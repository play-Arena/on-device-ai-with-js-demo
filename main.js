import "./style.css";
import { setupInput } from "./src/components/input.js";
import { setupButtons } from "./src/components/buttons.js";
import { setupPanel } from "./src/components/panel.js";

import { setupAI, prompt } from "./src/utils/ai.js";
import { parseBold } from "./src/utils/responseFormatter.js";

const initUI = () => {
  const app = document.querySelector("#app");
  app.innerHTML = `
  <div class="container">
    <h1>Learn Word Usage with AI</h1>
    <div id="input-container"></div>
    <div id="button-container" class="button-container"></div>
    <div id="panel-container"></div>
  </div>
`;

  const input = setupInput(document.querySelector("#input-container"));
  const { updateContent, updateTitle } = setupPanel(
    document.querySelector("#panel-container")
  );

  setupButtons(document.querySelector("#button-container"), {
    onSubmit: () => {
      const trimmedValue = input.value.trim();
      if (trimmedValue) {
        updateTitle(trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1));
        updateContent(`
        <p>Asking the AI for the word usage instructions...Please wait...</p>
      `);

      prompt(inferenceSession, trimmedValue)
        .then((response) => {
          updateContent(`
          <div>${parseBold(response)}</div>
        `);
      })
        .catch((error) => {
          updateContent(`
          <p>Failed to get the usage instructions. Please try again.</p>
        `);
        console.error(error);
        });
      }
    },
    onClear: () => {
      if (!input.value.trim()) return;

      input.value = "";
      updateTitle("Submit a word to learn its usage");
      updateContent(`
      <p>Input cleared</p>
    `);
    },
  });
};

let inferenceSession = null;
document.addEventListener("DOMContentLoaded", async () => {
  try{
    inferenceSession = await setupAI();
    initUI();
  }catch(error){
    console.error(error);
    alert("App failed to load. Please check the console for more details.");
  }
});

export async function setupAI() {
  if(!window.ai?.languageModel){
    throw new Error("AI feature is not enabled on this browser.");
  }
  const inferenceSession = await window.ai.languageModel.create({
    systemPrompt: `You are an English teacher. For a given word and come up with a sentence to demonstrate the usage of the word.
    Always respond in English in the following format: 
    <h3>Usage:</h3> <p>Your sentence here</p>
    <h3>Meaning:</h3>  <p>The meaning of the word</p>
    `,
  });
  return inferenceSession;
};

export async function prompt(inferenceSession, word){
    const response = await inferenceSession.prompt(word);
    return response;
}

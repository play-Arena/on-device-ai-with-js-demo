export function setupButtons(element, { onClear, onSubmit }) {
  const submitButton = document.createElement('button')
  submitButton.textContent = 'Submit'
  submitButton.addEventListener('click', onSubmit)

  const clearButton = document.createElement('button')
  clearButton.textContent = 'Reset'
  clearButton.addEventListener('click', onClear)

  element.appendChild(submitButton)
  element.appendChild(clearButton)

  return { submitButton, clearButton }
}
export function setupInput(element) {
  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Type the word here...'
  input.className = 'text-input'
  element.appendChild(input)
  return input
}
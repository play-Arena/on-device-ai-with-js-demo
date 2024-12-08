export function setupPanel(element) {
  const panel = document.createElement('div')
  panel.className = 'info-panel'
  
  const title = document.createElement('h2')
  title.textContent = 'Submit  a word to learn its usage'
  title.className = 'panel-title'
  
  const content = document.createElement('div')
  content.className = 'panel-content'
  content.innerHTML = `
    <p>Your entered word usage explanation will appear here.</p>
  `
  
  panel.appendChild(title)
  panel.appendChild(content)
  element.appendChild(panel)
  
  return {
    panel,
    updateContent: (newContent) => {
      content.innerHTML = newContent
    },
    updateTitle: (newTitle) => {
      title.textContent = newTitle
    }
  }
}
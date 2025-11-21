(function () {
  const cards = document.querySelectorAll('.service-card')
  const panels = document.querySelectorAll('.service-panel')

  function closeAll() {
    cards.forEach((card) => card.classList.remove('active'))
    panels.forEach((panel) => panel.classList.remove('open'))
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-panel')
      const targetPanel = document.getElementById(targetId)

      if (!targetPanel) return

      const isActive = card.classList.contains('active')
      closeAll()

      if (!isActive) {
        card.classList.add('active')
        targetPanel.classList.add('open')
      }
    })
  })
})()

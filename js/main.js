/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})
// Toggle Join Us section
const joinButton = document.getElementById('joinUsButton');
const joinContent = document.getElementById('joinUsContent');

joinButton.addEventListener('click', () => {
  if (joinContent.style.display === 'none' || joinContent.style.display === '') {
    joinContent.style.display = 'block';
  } else {
    joinContent.style.display = 'none';
  }
});

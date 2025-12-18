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
const expandBtn = document.querySelector(".expand-btn");
const content = document.querySelector(".expand-content");

expandBtn.addEventListener("click", () => {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.paddingTop = "0";
    content.style.paddingBottom = "0";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingTop = "1em";
    content.style.paddingBottom = "1em";
  }
});


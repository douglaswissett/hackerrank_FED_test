let arrows  = document.getElementsByClassName('arrow');
let slides  = document.getElementsByClassName('slide');
let buttons = document.getElementsByTagName("button");
let tab = 0;
slides[0].style.display = 'block';

// arrow click events
for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (event) => {
    if (event.target.className === 'arrow left') {
      if (tab > 0) toggle(tab-1);
    } else {
      if (tab < 2) toggle(tab+1);
    }
  });
}

// tab button click events
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let i = event.target.innerText.replace('Tab ','');
    toggle(i-1);
  });
}

function toggle(i) {
  buttons[tab].classList.remove('active');
  slides[tab].style.display = 'none';
  tab = i;
  slides[tab].style.display = 'block';
  buttons[tab].className += 'active';
}
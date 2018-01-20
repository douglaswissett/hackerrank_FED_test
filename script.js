let arrows  = document.getElementsByClassName('arrow');
let slides  = document.getElementsByClassName('slide');
let buttons = document.getElementsByTagName("button");
let tab = 0;
slides[0].style.display = 'block';

// arrow click events
for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (event) => {
    slides[tab].style.display = 'none';
    if (event.target.className === 'arrow left') {
      if (tab > 0) tab--;
    } else {
      if (tab < 2) tab++;
    }
    slides[tab].style.display = 'block';
  });
}

// tab button click events
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    slides[tab].style.display = 'none';
    tab = event.target.innerText.replace('Tab ','');
    tab--;
    slides[tab].style.display = 'block';
  });
}
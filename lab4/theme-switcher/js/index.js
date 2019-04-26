const defaultTheme = () => {
  document.querySelector('header').style.backgroundColor='black';
  document.querySelector('.content').style.backgroundColor='white';
  document.querySelector('h1').style.fontFamily="Covered By Your Grace, cursive";
};

const oceanTheme = () => {
   document.querySelector('header').style.backgroundColor='darkblue';
   document.querySelector('.content').style.backgroundColor='lightblue';
   document.querySelector('h1').style.fontFamily="ZCOOL Kuaile, cursive";
};

const desertTheme = () => {
  document.querySelector('header').style.backgroundColor='brown';
  document.querySelector('.content').style.backgroundColor='yellow';
  document.querySelector('h1').style.fontFamily="Indie Flower, cursive";
};


document.querySelector("#default").onclick = defaultTheme;
document.querySelector("#ocean").onclick = oceanTheme;
document.querySelector("#desert").onclick = desertTheme;

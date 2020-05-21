var hero = document.getElementById('hero');
var windowHeight = window.innerHeight;
//console.log(windowHeight);

function calcHero() {
  hero.style.height = windowHeight + "px";
  hero.setAttribute("style","height:"+ windowHeight + "px");
}
calcHero();

//window.addEventListerner("resize", calcHero); // scale hero on resize.

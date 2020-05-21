//////////////////// SAMPLE CODE //////////////////////////////

/*
tlLoader = new TimelineMax({repeat: 2, onComplete: functionName});  // -1 = loop

  tlLoader
    .staggerFromTo(".dot", 0.3,
    {y: 0, autoAlpha: 0},
    {y: 20, autoAlpha: 1, ease: Back.easeInOut},
    0.05
  )
  .fromTo(loader,0.3,
    {autoAlpha: 1, scale: 1.3 },
    {autoAlpha: 0, scale: 1, ease:Power0.easeNone },
    0.9
  );

*/
//tl = new TimelineLite({paused: true});

tl = new TimelineLite();

tl  // '-=2.15' adds overlap onto previous tween. -=2.15' will add a delay.
  .from("#design", 1, { left: 300, autoAlpha: 0 })
  .add('architecture')// timeline lable
  .from("#architecture", 3, { left: 400, autoAlpha: 0 }, '-=2.15') // relative timing
  .from(".arrow-up", 1, { bottom: 300, autoAlpha: 0 }, 'architecture+=3') //set to same time as lable
  .from("#development", 1, { left: 300, autoAlpha: 0 }, 2); // abosolute timing
  // .staggerFrom(buttons, 0.2, {x:200, ease, ease:Power1.easeOut}, 0.1);

  //tl.pause();

  $('#btnPlay').on('click', function() {
    tl.play();
  })

  // play, pause, resume, reverse, speed up, slowdown, seek 1 sec, go to 50%, restart

TweenLite.from(".logo",3, { left: 500,
  //onStart: onStart,
  //onUpdate: onUpdate,
  //onComplete: onComplete
});

//////////////////// SAMPLE CODE //////////////////////////////

// Animate out onClick

var designWrap = document.getElementById('design');
var developmentWrap = document.getElementById('development');
var architectureWrap = document.getElementById('architecture');

var skillIconsWrap = document.getElementsByClassName('skill-icons')[0];
var lightboxText = document.getElementById("light-box-text");
var resetSkills = document.getElementById('reset-skills');
var titles = document.getElementsByClassName('titles')[0];

var designText = document.getElementsByClassName("skill-content-design")[0];
var developmentText = document.getElementsByClassName("skill-content-development")[0];
var architectureText = document.getElementsByClassName("skill-content-architecture")[0];

// DESIGN

var designTimeline = new TimelineMax({paused: true});

designTimeline.to(".titles", 0.4, {
  opacity: 0
})
.to("#development", 0.6, {
  width: "0%",
  display: "none",
})
.to("#architecture", 0.6, {
  width: "0%",
  display: "none"
})
.to("#light-box-text", 0.6, {
  display: "flex",
  opacity: 1
})
.to("#reset-skills", 0.6, {
  display: "block",
  opacity: 0.3
})
.to(".skill-content-design", 0.6, {
  display: "block",
  opacity: 1,
})

function displayDesign() {
  designTimeline.play();
  designTimeline.eventCallback("onComplete", playDesignDetail);
}

designWrap.addEventListener('click', function() {
  displayDesign();
});

var designDetailTimeline = new TimelineMax({paused: true});

designDetailTimeline.to(".shape-1", 0.4, {
  opacity: 0.2,
  right: "23%",
  top: "100%"
})
.to(".shape-2", 0.4, {
  opacity: 0.2,
    left: "19%",
    top: "115%"
})
.to(".shape-3", 0.4, {
  opacity: 0.2,
  right: "80%",
  top: "-45%"
})
.to(".shape-1", 0.4, {
  opacity: 0,
  right: "50%",
  top: "40%",
  delay: 2
})
.to(".shape-2", 0.4, {
  opacity: 0,
    left: "70%",
    top: "30%"
})
.to(".shape-3", 0.4, {
  opacity: 0,
  right: "30%",
  top: "-70%"
})

function playDesignDetail() {
  designDetailTimeline.play();
}

//DEV
var devTimeline = new TimelineMax({paused: true});

devTimeline.to("#design", 0.6, {
  width: "0%",
  display: "none"
})
.to(".titles", 0.6, {
  opacity: 0
})
.to("#architecture", 0.6, {
  width: "0%",
  display: "none"
})
.to("#light-box-text", 0.6, {
  display: "flex",
  opacity: 1
})
.to("#reset-skills", 0.6, {
  display: "block",
  opacity: 0.3
})
.to(".skill-content-development", 0.6, {
  display: "block",
  opacity: 1
})

function displayDev() {
  devTimeline.play();
}

developmentWrap.addEventListener('click', function() {
  displayDev();
});

//  DEV ICON - DETAIL  /////

var deviconClicked = false;

// 1. Move skills around laptop

var showSkills = new TimelineMax({paused: true})

showSkills.to(".bootstrap-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
})

.to(".c-sharpe-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "49%",
  left: "-34%",

})

.to(".css-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "111%",
  left: "-18%"

})

 .to(".html-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "125%",
  left: "23%"

})

 .to(".javaScript-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "126%",
  left: "65%"

})

.to(".sass-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "102%",
  left: "104%"

})

.to(".angular-ico", 0.3, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "48%",
  left: "112%"

})

 .to(".node-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "-9%",
  left: "108%"
  //onComplete: window.moveToScreen(),
  //useFrames:true
});


function devIcoMouseover() {
  showSkills.play();
}

function devIcoMouseout(e) {
   showSkills.reverse();
}

development.addEventListener('mouseover', function() {
  devIcoMouseover()
});
development.addEventListener('mouseout', function() {
  if(deviconClicked === false) {
    devIcoMouseout()
  } else { return; }
});

// 2. Move dev icons to laptop screen
var skillsToScreen = new TimelineMax({paused: true, onComplete: playDevCube})

skillsToScreen.to(".bootstrap-ico", 0.6, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"
})

.to(".c-sharpe-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

})

.to(".css-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

})

 .to(".html-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

})

 .to(".javaScript-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

})

.to(".sass-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

})

.to(".angular-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

})

 .to(".node-ico", 0.4, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "44%",
  left: "41%"

});

function devIcoClick() {
  skillsToScreen.play();
}

development.addEventListener('click', function() {
deviconClicked = true;
devIcoClick(deviconClicked);
});


// 3. Dispaly devcube

var devCube = new TimelineMax({paused: true });

devCube.to("#dev-cube-img", 0.6 , {
  display: "block",
  opacity: 1,
  rotation: 360
})

//.to("#hero", 3 , {
  //background: "linear-gradient(to right, #fc5c7d, #6a82fb);"
//}, 3)

.to("#dev-cube-img", 0.6 , {
  display: "none",
  opacity: 0
  //morphSVG: "#dev-cube-img-colour"
  //rotation: 360
})

.to("#dev-cube-img-colour", 0.6 , {
  display: "block",
  opacity: 1,
  rotation: 360
})

.to("#dev-screen", 0.6 , {
  visibility: "visible",
  opacity: 1,
  top: "14%"
})

.to("#dev-rocket", 1 , {
  visibility: "visible",
  opacity: 1
})

.to("#dev-rocket", 1 , {
  delay: 1.5,
  top: "-420%",
  width: "20%",
  ease: Bounce.easeOut
})

function playDevCube() {
  devCube.play();
}

// ARCHITECTURE

var architectureTimeline = new TimelineMax({ paused: true });

architectureTimeline.to("#design", 1, {
  width: "0%",
  display: "none"
})
.to(".titles", 0.6, {
  opacity: 0
})
.to("#development", 1, {
  width: "0%",
  display: "none"
})
.to("#light-box-text", 1, {
  display: "flex",
  opacity: 1
})
.to("#reset-skills", 1, {
  display: "block",
  opacity: 0.3
})
.to(".skill-content-architecture", 1, {
  display: "block",
  opacity: 1
})

function displayArchitecture() {
    architectureTimeline.play(0);
}

architectureWrap.addEventListener('click', function() {
  displayArchitecture();
});

// Architecture detail

var architectureHover = new TimelineMax({paused: true });

architectureHover.to(".user",0.4, {
  visibility: "visible",
  opacity: 1,
  top: "8%",
  left: "43%"
})
.to(".arch-arrow",0.4, {
  visibility: "visible",
  opacity: 1,
  top: "-6%",
  left: "94%",
  width: "29%"
})
.to(".circle",0.4, {
  visibility: "visible",
  opacity: 1,
  top: "97%",
  left: "44%",
  width: "14%"
})
.to(".dashed-rect",0.4, {
  visibility: "visible",
  opacity: 1,
  top: "87%",
  left: "62%",
  width: "57%"
})

var architectureClicked = false;

var architectureClick = new TimelineMax({paused: true });

architectureClick.to(".tracker",0.4, {
  delay: 3,
  visibility: "visible",
  opacity: 1,
  left: "43%",
  zIndex: 500,
  top: "40%",
})
.to(".tracker",0.4, {
  left: "83%"
})
.to(".tracker",0.4, {
  delay: 0.5,
  left: "112%",
  top:"17%"
})
.to(".tracker",0.4, {
  left: "100%",
  top: "-6%"
})
.to(".tracker",0.4, {
  visibility: "hidden"
})
// click
architectureWrap.addEventListener('click', function() {
  architectureClicked = true;
  architectureClick.play();
});

// mouseover
function playArchitectureHover() {
  architectureHover.play();
}
architectureWrap.addEventListener('mouseover', function() {
  playArchitectureHover();
});

//mouseout
function playArchitectureMouseout() {
    architectureHover.reverse();
}
architectureWrap.addEventListener('mouseout', function() {
  if(architectureClicked){ return;
  } else { playArchitectureMouseout(); }
});


function reset() {
    designTimeline.reverse();
    architectureTimeline.reverse();
    devTimeline.reverse();
}

resetSkills.addEventListener('click', function() {

  deviconClicked = false;
  architectureClicked = false;

  // Dev Ico
  skillsToScreen.pause(0);
  showSkills.pause(0);
  devCube.pause(0);

  // ARCH
  architectureHover.pause(0);

  // Design
  designDetailTimeline.pause(0);

  reset();

});

// Mobile / desktop view switcher

var mobileBTN  = document.getElementsByClassName("mobile")[0];
var desktopBTN = document.getElementsByClassName("desktop")[0];

var switchMobile = new TimelineMax({paused: true });

switchMobile.to("#laptop",0.4, {
  opacity: 0,
  display: "none"
})
.to("#mobile",0.4, {
  opacity: 1,
  display: "block"
})
.to(".mobile",0.4, {
  opacity: 1
})
.to(".desktop",0.4, {
  opacity: 0.3
})

mobileBTN.addEventListener('click', function() {
  switchMobile.play(0);
});

var switchDesktop = new TimelineMax({paused: true });

switchDesktop.to("#mobile",0.4, {
  opacity: 0,
  display: "none"
})
.to("#laptop",0.4, {
  opacity: 1,
  display: "block"
})
.to(".mobile",0.4, {
  opacity: 0.3
})
.to(".desktop",0.4, {
  opacity: 1
})

desktopBTN.addEventListener('click', function() {
  switchDesktop.play(0);
});

// View work btn - not finished

var viewWorkArrow  = document.getElementById("arrow-up-img");
var viewWorkHover = new TimelineMax({ paused: true });

viewWorkHover.to("#arrow-up-fill",0.4, { 
  opacity: 0,
  fill: "#4ca9b4"
})

viewWorkArrow.addEventListener('mouseover', function() {
  //alert("moseover");
  viewWorkHover.play(0);
});




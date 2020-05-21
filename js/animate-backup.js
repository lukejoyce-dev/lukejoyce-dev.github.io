const development = document.getElementById("development");

var tl = new TimelineMax( {
  //repeat:1,
  //yoyo:true,
  //onRepeat:onRepeatHandler,
  onComplete:moveToScreen
});

tl.duration(1);

function devIcoActive(moveToScreen) {

tl.to(".bootstrap-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
});

tl.to(".c-sharpe-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "40%",
  left: "-31%",

});

tl.to(".css-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "105%",
  left: "-20%"

});

tl.to(".html-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "120%",
  left: "42%"

});

tl.to(".javaScript-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "113%",
  left: "102%"

});

tl.to(".sass-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "45%",
  left: "110%"

});

tl.to(".node-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "-20%",
  left: "105%"

  //onComplete: window.moveToScreen(),
  //useFrames:true
});

}

function moveToScreen() {

  alert("triggered");

  TweenMax.to(".bootstrap-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
  });

  TweenMax.to(".c-sharpe-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
    bottom: "44%",
    left: "39%",
    delay: 1
  });

  TweenMax.to(".css-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
    bottom: "44%",
    left: "39%",
    delay: 2
  });

  TweenMax.to(".html-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
    bottom: "44%",
    left: "39%",
    delay: 3
  });

  TweenMax.to(".javaScript-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
    bottom: "44%",
    left: "39%",
    delay: 4
  });

  TweenMax.to(".sass-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
    bottom: "44%",
    left: "39%",
    delay: 5
  });

  TweenMax.to(".node-ico", 1, {
    opacity: 0,
    rotation: 360,
    width: "20%",
    bottom: "44%",
    left: "39%",
    delay: 6,
  });

}


function devIcoDefault() {

TweenMax.to(".bootstrap-ico", 1, {
  opacity: 0,
  rotation: 360,
  width: "20%",
});

TweenMax.to(".c-sharpe-ico", 1, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "-25%",
  left: "-23%",
  delay: 1
});

TweenMax.to(".css-ico", 1, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "-25%",
  left: "-23%",
  delay: 2
});

TweenMax.to(".html-ico", 1, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "-25%",
  left: "-23%",
  delay: 3
});

TweenMax.to(".javaScript-ico", 1, {
  opacity: 0,
  rotation: 360,
  width: "20%",
  bottom: "-25%",
  left: "-23%",
  delay: 4
});

TweenMax.to(".sass-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "-25%",
  left: "-23%",
  delay: 5
});

TweenMax.to(".node-ico", 1, {
  opacity: 1,
  rotation: 360,
  width: "20%",
  bottom: "-25%",
  left: "-23%",
  delay: 6
});

}

development.addEventListener('mouseover', devIcoActive);
//development.addEventListener('mouseout', devIcoDefault);

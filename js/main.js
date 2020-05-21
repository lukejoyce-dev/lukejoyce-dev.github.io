(function() {

  window.onload = function() {

  // Add Iframe URL's here. Match "key" to project dataset.
  // Iframe's are created on request to reduce load time.
  var iframes = {
    devhouse: "https://thedevhouse.uk"
  }

  var hoverStateBtnClicked = false;
  var clickCount = 0;

  // Detailed Prototypes
  function porfolio() {

    function displayProject() {
        var allThumbNails = document.getElementsByClassName('thumbnail');
        //console.log(allThumbNails);
        function lightboxManager(e) {

          var thumbnailImg        = e.currentTarget.getElementsByTagName("IMG")[0];
          var selectedProject     = thumbnailImg.dataset.project;
          var portfolioLightbox   = document.getElementById('portfolio-lightbox');
          var laptopView          = document.getElementsByClassName("laptop-screen")[0];
          var closePortfolioBtn   = document.getElementById("close-portfolio");
          var loader              = document.getElementById("loading");
          var viewBtns            = document.getElementById("view-port");
          var websiteBtn          = document.getElementById("website-btn");
          var prototypeBtn        = document.getElementById("prototype-btn");
          var processBtn          = document.getElementById("process-btn");

          // Display portfolio lightbox
          portfolioLightbox.classList = "active";

          // Close window function
          function closePortfolio(e) {
            portfolioLightbox.classList.remove("active");
            laptopView.style.overflow = "scroll"; // reset any changes made by iframe views
          }
          closePortfolioBtn.addEventListener("click", closePortfolio);

          var projects  = document.getElementsByClassName("portfolio-group");
          var iframeBuilt = false;

          // Build iframes
          function buildIframe(selectedProject,i) {

            var project = projects[i];
            var projectScreen = projects[i].firstElementChild;
            var iframe = document.createElement("iframe");

            laptopView.style.overflow = "hidden"; // Remove double scroll from iframes.

            if(projectScreen.classList.contains("iframe-loaded")) {
              return;
            } else {
              //console.log(projectScreen);
              for (key in iframes) {
                //console.log(iframes[key]);
                if(key === selectedProject) {
                  iframe.src = iframes[key];
                } else { console.log("No URL found"); }
              }
              iframe.setAttribute("width", "100%");
              iframe.setAttribute("height", "100%");
              iframe.setAttribute("allow", "fullscreen");
              iframe.setAttribute("frameBorder", "0");
              projectScreen.appendChild(iframe);
              projectScreen.classList.add("iframe-loaded");

              loader.classList.add("active");

              setTimeout(function(){ loader.classList.remove("active"); }, 2500);

              console.log(iframeBuilt);

            }
          }

          // Display projects
          for(i=0; i < projects.length; i++) {
            //console.log(i);
            //console.log(projects[i].dataset.project);
            if(projects[i].dataset.project === selectedProject) { // Find project
              projects[i].classList = "portfolio-group active";
              // Lazy load images
              switch(selectedProject) {   //llJaguar, llUser, llV8, llParts, llToyota;
                case "jaguar":
                    llJaguar.loadAll();
                  break;
                case "ford":
                    llUser.loadAll();  
                  break;
                case "parts": 
                    llV8.loadAll();
                break;
                case "toyota":
                    llToyota.loadAll();  
                break;
                case "v8":
                    llV8.loadAll();
                break;      
                default:
                  console.log("Loader not found");
              }
              if (projects[i].dataset.view != "all") { // Has mobile view? select from "all", "desktop", "mobile"
                viewBtns.style.opacity = 0;
              } else {
                viewBtns.style.opacity = 1;
              }
              if (projects[i].dataset.link != "false") { // Has link?
                websiteBtn.href = projects[i].dataset.link;
                websiteBtn.style.display   = "block";
                prototypeBtn.style.display = "none";
              } else {
                websiteBtn.style.display   = "none";
                prototypeBtn.style.display = "block";
              }
              if (projects[i].dataset.process === "false") { // Has Process work?
                processBtn.style.display = "none";
              } else {
                processBtn.style.display = "block";
                currentProject = projects[i];
                showThumbnails(currentProject); // If project has process work create thumbnails.
              }
              if(projects[i].dataset.iframe === "true") {  // Has Iframe?
                //var selection =
                buildIframe(selectedProject,i);
              }
            } else {
              projects[i].classList = "portfolio-group";
            }
          }
        }
        var i;
        for(i=0; i < allThumbNails.length; i++) {
          allThumbNails[i].addEventListener("click", lightboxManager);
          //console.log(allThumbNails[i]);
        }

    } // end display project

    function displayScreen() {

      var screens           = document.getElementsByClassName("screen"); // All Screens
      var hotspots          = document.getElementsByClassName("hotspot");// All Hotspots
      var hotspotsHover     = document.getElementsByClassName("hover");
      var hotspotHoverState = document.getElementsByClassName("hoverstate");

      var onDisplayScreen;
      //console.log(displayScreen);

      function hotspotEngine() {

        var body = document.body;

        function hideHotspots() {
          var i = 0;
          setTimeout(function () {
          for(i=0; i < hotspots.length; i++) {
            //console.log(i);
            //console.log(hotspots[i]);
            hotspots[i].classList.remove("flash");
          }
        }, 1000);
        }

        function highlightHotspots(e) {
          for(i=0; i < hotspots.length; i++) {
            if(e.target.classList != "hotspot") {
              //console.log(i);
              //console.log(hotspots[i]);
              hotspots[i].classList.add("flash");
            }
          }
          hideHotspots();
        }

        body.addEventListener("click", highlightHotspots);

        function onDisplayScreen(e) {

          var hotspotTrigger      = e.currentTarget;
          var hotspotTriggerClass = e.currentTarget.className;
          var screenGroup         = e.currentTarget.parentNode.parentNode.getElementsByClassName("screen");
          var targetScreen        = e.currentTarget.dataset.hotspot;
          var eventType           = e.type;

          //console.log(hoverStateBtnClicked);
          //console.log(eventType);
          //console.log(hotspotTriggerClass);

          if (hoverStateBtnClicked === true && eventType === "mouseout") {
            hoverStateBtnClicked = false;
            console.log("Hover state Clicked");
            return;
          }

          if(eventType === "click") {

            function click(screenGroup, targetScreen) {
              if (hotspotTriggerClass === "hotspot hoverstate") {
                hoverStateBtnClicked = true;
              }

              for(i=0; i < screenGroup.length; i++) {
                if(targetScreen === screenGroup[i].dataset.screen) {
                  screenGroup[i].classList.add("active");
                }  else { screenGroup[i].classList = "screen"; }
              }

            }
            click(screenGroup, targetScreen);
          }

          else if(eventType === "mouseover") {

            var screen = e.currentTarget.parentNode;

            window.mouseOverScreen = screen;

            function mouseover(screenGroup, targetScreen) {
              for(i=0; i < screenGroup.length; i++) {
                if(targetScreen === screenGroup[i].dataset.screen) {
                  screenGroup[i].classList.add("active");
                }  else { screenGroup[i].classList = "screen"; }
              }

            }
            mouseover(screenGroup, targetScreen);
          }
          else if(eventType === "mouseout") {
            function mouseout(mouseOverScreen) {
            //console.log("YOU HAVE MOUSEDOUT");
            //console.log(mouseOverScreen);

            var hoverScreen = e.currentTarget.parentNode; // Current screen display onhover
            mouseOverScreen.classList.add("active"); // saved onmouseover
            hoverScreen.classList.remove("active");
            //console.log(hoverScreen);
            //console.log(mouseOverScreen);
            //console.log(hoverScreen);

            }
            mouseout(window.mouseOverScreen);
          }

        } // end display screen

        for (i=0; i < hotspots.length; i++){
          hotspots[i].addEventListener("click", onDisplayScreen);
        }
        for (i=0; i < hotspotsHover.length; i++){
          hotspotsHover[i].addEventListener("mouseover", onDisplayScreen);
        }
        for (i=0; i < hotspotHoverState.length; i++){
          hotspotHoverState[i].addEventListener("mouseout", onDisplayScreen);
        }
      }
      hotspotEngine();
    } // end display screen

    displayProject();
    displayScreen();

  } // end porfolio
  porfolio();


  var designWrap = document.getElementById('design');
  var designImg = document.getElementById('design-start');
  // Design
  function designIconActive() {
    designImg.src = "./img/design-ico/design-active.svg";
    designWrap.classList.add("active");
  }

  function designIcon() {
    designImg.src = "./img/design-ico/design.svg";
    designWrap.classList.remove("active");
  }

  designWrap.addEventListener('mouseover',designIconActive);
  designWrap.addEventListener('mouseout',designIcon);
  // Development
  var developmentWrap = document.getElementById('development');
  var developmentImg = document.getElementById('dev-cube-img');
  function developmentIconActive(){
    developmentWrap.classList.add("active");
  }

  function developmentIcon(){
    developmentWrap.classList.remove("active");
  }

  developmentWrap.addEventListener('mouseover',developmentIconActive);
  developmentWrap.addEventListener('mouseout',developmentIcon);

  // Architecture

  var architectureWrap = document.getElementById('architecture');
  function architectureIcon() {
    architectureWrap.classList.add("active");
  }

  function architectureIconOut() {
    architectureWrap.classList.remove("active");
  }

  architectureWrap.addEventListener('mouseover',architectureIcon);
  architectureWrap.addEventListener('mouseout',architectureIconOut);


  // Arrow Up
  function arrowUpActive() {
      arrowUpWrap.classList.add("active");
  }

  function arrowUp() {
      arrowUpWrap.classList.remove("active");
  }
  var arrowUpWrap = document.getElementsByClassName('arrow-up-content')[0];
  arrowUpWrap.addEventListener('mouseover',arrowUpActive);
  arrowUpWrap.addEventListener('mouseout',arrowUp);

  // Portfolio thumbnails
  function createThumbnails() {

  var onehundredPercentHeights = document.getElementsByClassName('height-1-1');
  var twohundredPercentHeights = document.getElementsByClassName('height-1-2');
  var threehundredPercentHeights = document.getElementsByClassName('height-1-3');

  // One-to-one square
    function calcSize(elements, heightRatio) {
        var i = 0;
        for(i=0;i<elements.length; i++){
            // Set size of thumbnail wrapper to correct ratio.
            var currentWidth = elements[i].offsetWidth;
            var elementHeight = currentWidth * heightRatio;
            elements[i].style.height = elementHeight + "px";
            // Set height or width attributes on img relative to container for lazy load : https://github.com/verlok/lazyload/blob/master/
            var img = elements[i].firstElementChild;
            if(img.classList.contains('fit-width')) {
                img.width   = elements[i].offsetWidth;
            } else if (img.classList.contains('fit-height')) {
                img.height = elements[i].offsetHeight;
            }  else {
               console.log(img, "has incorrect markup");
            }          
          }
    }
    calcSize(onehundredPercentHeights,1)
    calcSize(twohundredPercentHeights,2)
    calcSize(threehundredPercentHeights,3)

    function overlay() {
      var thumbnails = document.getElementsByClassName('thumbnail');
      function overlayActive(e) {
          e.currentTarget.classList.add("active");
      }
      function overlayNotActive(e) {
        e.currentTarget.classList.remove("active");
      }
      var i = 0;
      for (i=0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('mouseover', overlayActive);
        thumbnails[i].addEventListener('mouseout', overlayNotActive);
      }
    }
    overlay();
  }
  createThumbnails();

  window.onresize = function() { // Resize thumbnails on window resize.
    createThumbnails();
    //console.log("Resizing");
  }

  // Scroll to animate
  $("#eye, .arrow-up a").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
  });

  } // end onload

})();

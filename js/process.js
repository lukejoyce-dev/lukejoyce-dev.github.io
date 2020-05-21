
// IMAGE FOLDER NAMES NEED TO MATCH PROJECT NAMES FOR PORTFOLIO AND DISPLAY OF PROCESS WORK

var currentProject = " ";

var processBtn        = document.getElementById("process-btn");
var processLightbox   = document.getElementById("process-lightbox");
var processClose      = document.getElementById("close-process");
var fullsizeLightbox  = document.getElementById("fullsize-lightbox");
var thumbnailGroup     = document.getElementsByClassName("process-square-wrap");
var allThumbnails      = document.getElementsByClassName("process-square");

// Show / Hide thumbnail wraper

function displayThumbnailsWrap() {
  processLightbox.classList.add("active");
}

function hideThumbnailsWrap() {
  processLightbox.classList.remove("active");
}

processBtn.addEventListener('click', displayThumbnailsWrap);
processClose.addEventListener('click', hideThumbnailsWrap);

// Show thumbnails

function showThumbnails(currentProject) {
  //console.log(allThumbnails[i]);
  for(i=0; i < thumbnailGroup.length; i++) {
    if(thumbnailGroup[i].dataset.thumbnailgroup === currentProject.dataset.project) {
      thumbnailGroup[i].classList.add("active");
    } else {
      thumbnailGroup[i].classList.remove("active");
    }
  }
}

function displayFullsize(e) {
    fullsizeLightbox.classList.add("active");
    var selectedProject = e.currentTarget.parentElement.dataset.thumbnailgroup;
    var selectedThumb   = e.currentTarget.firstElementChild.dataset.large;
    fullsizeLightbox.firstElementChild.src = "./img/portfolio/" +  selectedProject + "/process/fullsize/" + selectedThumb; // image name folders need to match project names
}

function hideFullsize(e) {
    fullsizeLightbox.classList.remove("active");
}

for(i=0; i < allThumbnails.length; i++) {
  allThumbnails[i].addEventListener('click', displayFullsize);
}


fullsizeLightbox.addEventListener('click', hideFullsize);


//processClose.addEventListener('click', hideThumbnailsWrap);

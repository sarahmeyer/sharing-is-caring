// bind ot all key events
// show next slide unless back key
// back key shows prev
document.addEventListener('keydown', function(evt) {
  var backwards = false;

  if (evt.keyCode === 37) {
    backwards = true;
  } else if (evt.keyCode !== 39) {
    return;
  }

  var slides = document.getElementsByClassName('slide');
  var currentSlide = document.getElementsByClassName('visible-slide')[0];
  var index = 0;

  while (slides[index] != currentSlide) {
    index += 1;
  }

  if (backwards) {
    var nextSlide = slides[Math.max(0, index - 1)]
  } else {
    var nextSlide = slides[Math.min(slides.length - 1, index + 1)];
  }

  var currentSlideClasses = currentSlide.className.replace('visible-slide', '');
  currentSlide.className = currentSlideClasses;
  var nextSlideClasses =  nextSlide.className + " visible-slide";
  nextSlide.className = nextSlideClasses;

});
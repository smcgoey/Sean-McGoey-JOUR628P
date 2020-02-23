var chart = c3.generate({
  bindto: '#genreByDecadeChart',
  data: {
    x: 'x',
    columns: [
      ['x', 1990, 2000, 2010],
      ['Funk/R&B', 1, 1, 0],
      ['Hip-hop', 3, 5, 10],
      ['Pop', 0, 2, 2],
      ['Rock', 3, 7, 3],
    ]
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895']
  }
});

var chart2 = c3.generate({
  bindto: '#venueChart',
  data: {
    // iris data from R
    columns: [
      ['Stamp', 76],
      ['McKeldin Mall', 4],
      ['Ritchie Coliseum', 4],
      ['The Clarice', 3],
      ['Xfinity Center', 3],
      ['All other venues', 9],
    ],
    type : 'pie',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255']
  }
});

//Photo gallery scripts. Credit: W3Schools
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




// --------------------- Timer worker -------------------------- //

// var worker = new Worker('/js/timer.js');

// worker.onmessage = function(event) {
//   document.getElementById("invite-timer").innerHTML = event.data;
// };


// --------------------- Slide Show -------------------------- //

let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-content");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}







// --------------------- Emoji Checker -------------------------- //
// function separateEmojisAndText(text) {
//   // Define the regular expression pattern to match emojis
//   var emojiPattern = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F3F4}-\u{1F3FF}\u{1F004}\u{1F0CF}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E6}-\u{1F1FF}\u{1F201}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F320}\u{1F330}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F380}-\u{1F393}\u{1F3A0}-\u{1F3CA}\u{1F3CF}-\u{1F3D3}\u{1F3E0}-\u{1F3F0}\u{1F3F4}\u{1F3C8}-\u{1F3CF}\u{1F3D4}-\u{1F3DF}\u{1F3E0}-\u{1F3F0}\u{1F400}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4F7}\u{1F4F9}-\u{1F4FC}\u{1F500}-\u{1F53D}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}-\u{1F579}\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}-\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}-\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6CF}\u{1F6D0}\u{1F6D1}\u{1F6E0}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6EC}\u{1F6F0}\u{1F6F3}-\u{1F6FC}\u{1F6FD}-\u{1F6FF}\u{1F774}\u{1F780}-\u{1F7D8}\u{1F7E0}-\u{1F7EB}\u{1F7F0}-\u{1F7F1}\u{1F7F2}-\u{1F7F4}\u{1F7F5}-\u{1F7F7}\u{1F7F8}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}-\u{1F8FF}\u{1F90C}-\u{1F90F}\u{1F93F}\u{1F94D}\u{1F94E}-\u{1F94F}\u{1F95F}\u{1F96C}-\u{1F97F}\u{1F98A}-\u{1F98F}\u{1F990}-\u{1F9E0}\u{1F9E1}-\u{1F9FF}\u{1FA60}-\u{1FA6D}\u{1FA70}-\u{1FA74}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA86}\u{1FA90}-\u{1FAA8}\u{1FAB0}-\u{1FAB6}\u{1FAC0}-\u{1FAC2}\u{1FAD0}-\u{1FAD6}\u{1FAE0}-\u{1FAE7}\u{1FAF0}-\u{1FAF6}\u{1FAG0}-\u{1FAG6}\u{1FB00}-\u{1FB92}\u{1FB94}-\u{1FBCA}\u{1FBF0}-\u{1FBF9}\u{1FC00}-\u{1FCAE}\u{1FCAF}-\u{1FCAF}\u{1FCB0}-\u{1FCB6}\u{1FCC0}-\u{1FCC6}\u{1FCD0}-\u{1FCEC}\u{1FCF0}-\u{1FCF9}\u{1FD00}-\u{1FD3E}\u{1FD40}-\u{1FD4F}\u{1FD50}-\u{1FD7F}\u{1FD80}-\u{1FD81}\u{1FD90}-\u{1FD91}\u{1FDA0}-\u{1FDA6}\u{1FDB0}-\u{1FDB1}\u{1FDC0}-\u{1FDFB}\u{1FE00}-\u{1FE0F}\u{1FE10}-\u{1FE1F}\u{1FE20}-\u{1FE2F}\u{1FE30}-\u{1FE5F}\u{1FE60}-\u{1FE6F}\u{1FE70}-\u{1FEFF}\u{1FF00}-\u{1FFEF}\u{1FFF0}-\u{1FFFF}\u{20000}-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}\u{50000}-\u{5FFFD}\u{60000}-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}\u{90000}-\u{9FFFD}\u{A0000}-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}\u{D0000}-\u{DFFFD}\u{E0000}-\u{EFFFD}]/gu;

//   // Match emojis in the text
//   var emojis = text.match(emojiPattern);

//   // Separate emojis and text
//   var emojiText = {
//     emojis: emojis ? emojis.join('') : '', // Join emojis into a single string
//     text: text.replace(emojiPattern, '') // Remove emojis from the text
//   };

//   return emojiText;
// }

// // Example usage
// var result = separateEmojisAndText("🎹 course");
// console.log("Emojis:", result.emojis); // "🎹"
// console.log("Text:", result.text);     // " course"

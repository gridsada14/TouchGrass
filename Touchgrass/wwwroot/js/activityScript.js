


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

// --------------------- Status Color -------------------------- //

function statusColor() {
  var elements = document.getElementsByClassName("member-status-join");

  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var status = element.innerHTML.trim(); // Trim whitespace

      if (status === "Joined" || status === "Host") {
          element.style.color = '#2ba84a';
      } else {
          element.style.color = '#6c707a';
      }
  }

  console.log("Status colors set.");
}

window.onload = function () {
  statusColor();
};


// --------------------- Join Activity-------------------------- //

function joinAct(clickedElement) {
  var id = clickedElement.getAttribute("id");
  console.log(id);
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "/Home/JoinAct", true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("id="+id);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              clickedElement.innerHTML = "Joined";
          } else {
              console.log("fail");
          }
      }
  };

  console.log("running")
}

function acceptMember(clickedElement) {
  var user_id = clickedElement.getAttribute("id");
  var act_id = document.querySelector(".invite-btn").getAttribute("id");

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/Home/AcceptMember", true);;
  
  var data = "user_id=" + user_id + "&act_id=" + act_id;

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(data);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log("accept running");
            window.location.href = "/Home/Act?id=" + act_id;
          } else {
              console.log("fail");
          }
      }
  };
    
}
function kickMember(clickedElement) {
  var user_id = clickedElement.getAttribute("id");
  var act_id = document.querySelector(".invite-btn").getAttribute("id");

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/Home/KickMember", true);
  
  
  var data = "user_id=" + user_id + "&act_id=" + act_id;

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(data);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Kick running");
          window.location.href = "/Home/Act?id=" + act_id;
        } else {
          console.log("fail");
        }
      }
  };
    
};


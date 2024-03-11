
// const tag1 = document.getElementById("tag-item-1");
// const tag2 = document.getElementById("tag-item-2");
// const tag3 = document.getElementById("tag-item-3");
// const tagplus = document.getElementById("tag-plus");

// const i1 = document.getElementById("member-img-1");
// const i2 = document.getElementById("member-img-2");
// const i3 = document.getElementById("member-img-3");
// const i4 = document.getElementById("member-img-4");
// const i5 = document.getElementById("member-img-5");
// const memplus = document.getElementById("member-plus");
// const overlayTextMember = document.getElementById("member-overlay");

// // displayMember()

// //member sections
// function displayMember() {
//     switch (memberAmount) {
//         case 1:
//             i2.style.display = "None";
//             i3.style.display = "None";
//             i4.style.display = "None";
//             i5.style.display = "None";
//             memplus.style.display = "None";
//         case 2:
//             i3.style.display = "None";
//             i4.style.display = "None";
//             i5.style.display = "None";
//             memplus.style.display = "None";
//         case 3:
//             i4.style.display = "None";
//             i5.style.display = "None";
//             memplus.style.display = "None";
//         case 4:
//             i5.style.display = "None";
//             memplus.style.display = "None";
//         case 5:
//             memplus.style.display = "None";
//         default :
//             overlayTextMember.innerHTML = "+" + memberPlusAmountValue;
// //     }    
// // }

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         initsmallscreen();
//     } 
//     else {
//         initnormalscreen();
//     }
// }
  
// // Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 767px)")

// // Call listener function at run time
// myFunction(x);

// // Attach listener function on state changes
// x.addEventListener("change", function() {
// myFunction(x);
// });

// function initnormalscreen() {
//     let allblocks = document.querySelectorAll(".act-block")
//     console.log(allblocks)
// }
// function initsmallscreen() {
//     let allblocks = document.querySelectorAll(".act-block")
//     console.log(allblocks)
//     }
// }

function joinGroup() {
    window.alert('You Requested to join this group');
}

function viewActivity(clickedElement) {
    var id = clickedElement.getAttribute("id");
    console.log(id);
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "/Home/Act?id=" + encodeURIComponent(id), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                window.location.href = "/Home/Act?id=" + encodeURIComponent(id);
            } else {
                console.log("fail");
            }
        }
    };
    xhr.send();

    console.log("running")
}
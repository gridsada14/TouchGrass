// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function HSbyClass(classes, event) {
    var ele = document.querySelector(classes);
    var style = window.getComputedStyle(ele);
    console.log(style.display)
    if (style.display === "none") {
        ele.style.display = "flex";
    }
    else {
        ele.style.display = "none";
    }
    event.stopPropagation();
}

function HSbyID(ID, event) {
    var ele = document.querySelector(ID);
    var style = window.getComputedStyle(ele);
    console.log(style.display)
    if (style.display === "none") {
        ele.style.display = "flex";
    }
    else {
        ele.style.display = "none";
    }
    event.stopPropagation();
}


function toggleUserContainer() {
    var userContainer = document.querySelector('.user-container');
    var style = window.getComputedStyle(userContainer);
    if (style.display === 'none') {
    userContainer.style.display = 'flex';
    } else {
    userContainer.style.display = 'none';
    }
}

function resetFilter() {
    var tag = document.querySelector('#tag');
    var date = document.querySelector('#date');
    tag.style.display = 'none';
    date.style.display = 'none';
}

function resetUser() {
    var userContainer = document.querySelector('.user-container');
    if (window.innerWidth > 992) {
        userContainer.style.display = 'flex';
    }
    else {
        userContainer.style.display = 'none';
    }
}

function resetNotification() {
    var noti_tab = document.querySelector('.noti-tab');
    noti_tab.style.display = 'none';
}
  
window.addEventListener('resize', function() {
    resetUser();
    resetNotification();
});

// function boxChecked (id) {
//     var id = id.id;
//     if (id.checked) {
//         console.log("Checkbox with ID " + checkboxId + " is checked");
//     } else {
//         console.log("Checkbox with ID " + checkboxId + " is not checked");
//     }
// }
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
    var filterTab = document.querySelector('.filter-tab');
    var user_style = window.getComputedStyle(userContainer);
    if (user_style.display === 'none') {
    userContainer.style.display = 'flex';
    filterTab.style.display = 'none';
    } else {
    userContainer.style.display = 'none';
    }
}

function toggleFilterTab() {
    var userContainer = document.querySelector('.user-container');
    var filterTab = document.querySelector('.filter-tab');
    var filter_style = window.getComputedStyle(filterTab);
    if (filter_style.display === 'none') {
    filterTab.style.display = 'flex';
    if (window.innerWidth < 979) {
        userContainer.style.display = 'none';
    }
        
    } else {
    filterTab.style.display = 'none';
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
    if (window.innerWidth > 979) {
        userContainer.style.display = 'flex';
    }
    else {
        userContainer.style.display = 'none';
    }
}
  
window.addEventListener('resize', function() {
    resetUser();
});

// function boxChecked (id) {
//     var id = id.id;
//     if (id.checked) {
//         console.log("Checkbox with ID " + checkboxId + " is checked");
//     } else {
//         console.log("Checkbox with ID " + checkboxId + " is not checked");
//     }
// }
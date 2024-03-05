//change tags depends on how many tags u have in the activity
let tagAmount = 6 //this is just a dummy no.
let memberAmount = 55 //this is just a dummy no.

const tag1 = document.getElementById("tag-item-1");
const tag2 = document.getElementById("tag-item-2");
const tag3 = document.getElementById("tag-item-3");
const tagplus = document.getElementById("tag-plus");

const i1 = document.getElementById("member-img-1");
const i2 = document.getElementById("member-img-2");
const i3 = document.getElementById("member-img-3");
const i4 = document.getElementById("member-img-4");
const i5 = document.getElementById("member-img-5");
const memplus = document.getElementById("member-plus");
const overlayTextMember = document.getElementById("member-overlay");

//member sections
let memberPlusAmountValue = memberAmount - 5;

switch (memberAmount) {
    case 1:
        i1.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i2.style.display = "None";
        i3.style.display = "None";
        i4.style.display = "None";
        i5.style.display = "None";
        memplus.style.display = "None";
    case 2:
        i1.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i2.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i3.style.display = "None";
        i4.style.display = "None";
        i5.style.display = "None";
        memplus.style.display = "None";
    case 3:
        i1.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i2.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i3.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i4.style.display = "None";
        i5.style.display = "None";
        memplus.style.display = "None";
    case 4:
        i1.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i2.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i3.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i4.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i5.style.display = "None";
        memplus.style.display = "None";
    case 5:
        i1.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i2.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i3.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i4.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i5.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        memplus.style.display = "None";
    default :
        i1.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i2.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i3.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i4.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        i5.src = "https://chpic.su/_data/stickers/m/mahiro_maeda_animstorek/mahiro_maeda_animstorek_006.webp?v=1707663603";
        overlayTextMember.innerHTML = "+" + memberPlusAmountValue;
}

//tag sections
function myFunction(x) {
    if (x.matches) { // If media query matches
        initsmallscreen();
    } 
    else {
        initnormalscreen();
    }
}
  
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
myFunction(x);
});

function initnormalscreen() {
    let plusAmountValue = tagAmount - 3;

    switch (tagAmount) {
        case 1:
            tag1.innerHTML = "tagLore1";
            tag2.style.display = "None";
            tag3.style.display = "None";
            tagplus.style.display = "None";
        case 2:
            tag1.innerHTML = "tagLore1";
            tag2.innerHTML = "tagLore2";
            tag3.style.display = "None";
            tagplus.style.display = "None";
        case 3:
            tag1.innerHTML = "tagLore1";
            tag2.innerHTML = "tagLore2";
            tag3.style.display = "flex";
            tag3.innerHTML = "tagLore3";
            tagplus.style.display = "None";
        default :
            tag1.innerHTML = "tagLore1";
            tag2.innerHTML = "tagLore2";
            tag3.innerHTML = "tagLore3";
            tag3.style.display = "flex";
            tagplus.innerHTML = "+" + plusAmountValue;
    }
}
function initsmallscreen() {
    let plusAmountValue = tagAmount - 2;

    switch (tagAmount) {
        case 1:
            tag1.innerHTML = "tagLore1";
            tag2.style.display = "None";
            tag3.style.display = "None";
            tagplus.style.display = "None";
        case 2:
            tag1.innerHTML = "tagLore1";
            tag2.innerHTML = "tagLore2";
            tag3.style.display = "None";
            tagplus.style.display = "None";
        default :
            tag1.innerHTML = "tagLore1";
            tag2.innerHTML = "tagLore2";
            tag3.style.display = "None";
            tagplus.style.display = "flex";
            tagplus.innerHTML = "+" + plusAmountValue;
    }
}

function joinGroup() {
    window.alert('You Requested to join this group');
}

function viewActivity() {
    window.alert('You clicked on ACT block');
}

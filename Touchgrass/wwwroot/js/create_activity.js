function openSearchAddress() {
  const mainn = document.getElementsByTagName("main")[0];
  var searchBarr = document.createElement("div");
  searchBarr.classList.add("searchBar");
  searchBarr.innerHTML = `
      <input name="address" id="address" oninput=searchAddress()>
      <div class="custom-dropdown">
          <ul class="options" id="suggestions"></ul>
      </div>
      <div class='searchBox'></div>
      `;
  mainn.appendChild(searchBarr);
}

function searchAddress() {
  const addressQuery = document.getElementById("address").value.split("\n")[0];
  const searchBar = document.getElementsByClassName("searchBar")[0];
  const encodedAddressQuery = encodeURIComponent(addressQuery);

  const optionsList = document.querySelector(".options");
  optionsList.style.display = "block";
  optionsList.addEventListener("click", function (event) {
    const clickedText = event.target.textContent.trim();
    const inputAddr = document.getElementById("addresss");
    inputAddr.value = clickedText;
    inputAddr.title = clickedText;
    optionsList.style.display = "none";
    searchBar.remove();
  });

  fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodedAddressQuery}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        while (data.length > 5) data.pop();
        const suggestions = data
          .map((place) => `<li>${place.display_name}</li>`)
          .join("");
        document.getElementById("suggestions").innerHTML = suggestions;
      } else {
        document.getElementById("suggestions").innerHTML = "";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

var imgSlot = [];
var allImg = [];
var imgPre = `
          <div class="add-img">
              <i class="fa-solid fa-image"></i>
          </div>
      `;
for (let i = 0; i < 4; i++) {
  imgSlot.push(imgPre);
}
document.addEventListener("DOMContentLoaded", function () {
  const imgContainer = document.getElementsByClassName("images-container")[0];
  imgContainer.insertAdjacentHTML("beforeend", imgSlot.join(""));
});

function getImg(event) {
  const imageContainer = document.querySelector(".images-container");
  if (event === "reset") {
    for (let i = 0; i < 4; i++) {
      imgSlot[i] = imgPre;
    }
    imageContainer.innerHTML = imgSlot.join("");
  } else {
    const fileInput = event.target;
    for (let i = 0; i < 4; i++) {
      const file = fileInput.files[i];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          if (fileInput.files.length > 4 && i === 3) {
            imgSlot[i] = `
              <div class="preview-image">
                <img class="pre-img" src="${
                  e.target.result
                }" style="filter:blur(1px);">
                <h1 style='position:absolute; font-size:30px; color:#000;font-weight:1000; backgroung-color:#fff'>+ ${
                  fileInput.files.length - 3
                } more images</h1>
              </div>
              `;
          } else {
            imgSlot[i] = `
                <div class="preview-image">
                  <img class="pre-img" src="${e.target.result}">
                </div>
              `;
          }
          imageContainer.innerHTML = imgSlot.join("");
        };
        reader.readAsDataURL(file);
      } else {
        imgSlot[i] = imgPre;
        imageContainer.innerHTML = imgSlot.join("");
      }
    }
  }
}

function getNewTag(previousSibling) {
  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "checkstr";
  newInput.placeholder = "double click to confirm";
  newInput.ondblclick = function () {
    if (this.value == "") this.remove();
    var newTag = document.createElement("div");
    newTag.innerHTML = `
          <input type="checkbox" id="${this.value}" name="tags" class='check' value='${this.value}'>
          <label for="${this.value}" class='checkstr'>${this.value}</label>
      `;
    this.parentNode.insertBefore(newTag, this);
    this.remove();
  };
  previousSibling.parentNode.insertBefore(newInput, previousSibling);
}

function getTag() {
  const b = document.getElementById("viewTag");
  b.style.height = "50%";
}
let checkTag = [];
function closeTag() {
  const b = document.getElementById("viewTag");
  b.style.height = "0";

  const tag = document.getElementsByClassName("check");
  const showTag = document.getElementById("showTag");
  checkTag = [];
  for (let i = 0; i < tag.length; i++) {
    if (tag[i].checked && tag[i].name == "tags") {
      checkTag.push(`<input type="checkbox" id="${tag[i].value.slice(
        2
      )}" name="Tag" class='check' value='${tag[i].value}' checked>
        <label for="${tag[i].value.slice(
          2
        )}" class='checkstr' onclick="getTag()">${tag[i].value}</label>`);
    }
  }
  showTag.innerHTML =
    checkTag.join("") +
    '<i class="fa-solid fa-plus addTag" onclick="getTag()"></i>';
}

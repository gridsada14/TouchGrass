//create tags
var created = false;
var tagBlock = document.getElementById("tag");
tagBlock.style.display = "flex";
tagBlock.style.flexDirection = "row";
tagBlock.style.gap = "10px";
tagBlock.style.marginTop = "15px";
tagBlock.style.marginLeft = "10px";
//create tags depends on how many tags u have in the activity
var tagAmount = 3 //6 is just a dummy no.

function inittaglessthan767() {
    if (tagAmount >2) {
        for (let i = 0; i < 2; i++) {
            let tagItem = document.createElement("div");
            let itemLore = document.createElement("p");
            let itemLoreText = document.createTextNode("%itemLore")
            itemLore.appendChild(itemLoreText);
            tagItem.appendChild(itemLore);
            tagBlock.appendChild(tagItem);
            itemLore.style.marginBottom = "0px";
            tagItem.style.display = "flex";
            tagItem.style.justifyContent = "center";
            tagItem.style.alignItems = "center";
            tagItem.style.width = "150px";
            tagItem.style.height = "30px";
            tagItem.style.borderStyle = "solid";
            tagItem.style.borderRadius = "15px";
            }
            //create 2 tag-item;
        let tagPlus = document.createElement("div");
        let plusAmount = document.createElement("p");
        let plusAmountValue = tagAmount - 2; 
        let plusAmountText = document.createTextNode("+" + plusAmountValue);
        plusAmount.appendChild(plusAmountText);
        tagPlus.appendChild(plusAmount);
        tagBlock.appendChild(tagPlus);
        plusAmount.style.marginBottom = "0px";
        tagPlus.style.display = "flex";
        tagPlus.style.justifyContent = "center";
        tagPlus.style.alignItems = "center";
        tagPlus.style.width = "45px";
        tagPlus.style.height = "30px";
        tagPlus.style.borderStyle = "solid";
        tagPlus.style.borderRadius = "15px";
        //create tag-plus;
    }
    else {   
        for (let i = 0; i < tagAmount; i++) {
            let tagItem = document.createElement("div");
            let itemLore = document.createElement("p");
            let itemLoreText = document.createTextNode("%itemLore")
            itemLore.appendChild(itemLoreText);
            tagItem.appendChild(itemLore);
            tagBlock.appendChild(tagItem);
            itemLore.style.marginBottom = "0px";
            tagItem.style.display = "flex";
            tagItem.style.justifyContent = "center";
            tagItem.style.alignItems = "center";
            tagItem.style.width = "150px";
            tagItem.style.height = "30px";
            tagItem.style.borderStyle = "solid";
            tagItem.style.borderRadius = "15px";
            }
            //create 2 tag-item;
    }
}
function inittagmorethan767() {
    if (tagAmount >3) {
        for (let i = 0; i < 3; i++) {
            let tagItem = document.createElement("div");
            let itemLore = document.createElement("p");
            let itemLoreText = document.createTextNode("%itemLore")
            itemLore.appendChild(itemLoreText);
            tagItem.appendChild(itemLore);
            tagBlock.appendChild(tagItem);
            itemLore.style.marginBottom = "0px";
            tagItem.style.display = "flex";
            tagItem.style.justifyContent = "center";
            tagItem.style.alignItems = "center";
            tagItem.style.width = "150px";
            tagItem.style.height = "30px";
            tagItem.style.borderStyle = "solid";
            tagItem.style.borderRadius = "15px";
            }
            //create 3 tag-item;
        let tagPlus = document.createElement("div");
        let plusAmount = document.createElement("p");
        let plusAmountValue = tagAmount - 3; 
        let plusAmountText = document.createTextNode("+" + plusAmountValue);
        plusAmount.appendChild(plusAmountText);
        tagPlus.appendChild(plusAmount);
        tagBlock.appendChild(tagPlus);
        plusAmount.style.marginBottom = "0px";
        tagPlus.style.display = "flex";
        tagPlus.style.justifyContent = "center";
        tagPlus.style.alignItems = "center";
        tagPlus.style.width = "45px";
        tagPlus.style.height = "30px";
        tagPlus.style.borderStyle = "solid";
        tagPlus.style.borderRadius = "15px";
        //create tag-plus;
    }
    else {   
        for (let i = 0; i < tagAmount; i++) {
            let tagItem = document.createElement("div");
            let itemLore = document.createElement("p");
            let itemLoreText = document.createTextNode("%itemLore")
            itemLore.appendChild(itemLoreText);
            tagItem.appendChild(itemLore);
            tagBlock.appendChild(tagItem);
            itemLore.style.marginBottom = "0px";
            tagItem.style.display = "flex";
            tagItem.style.justifyContent = "center";
            tagItem.style.alignItems = "center";
            tagItem.style.width = "150px";
            tagItem.style.height = "30px";
            tagItem.style.borderStyle = "solid";
            tagItem.style.borderRadius = "15px";
            }
            //create 3 tag-item;
    }    
}
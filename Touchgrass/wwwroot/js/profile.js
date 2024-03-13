function leaveAct(clickedElement) {
    var id = clickedElement.getAttribute("id");
    console.log(id);
    var xhr = new XMLHttpRequest();
  
    xhr.open("POST", "/Home/LeaveAct", true);
  
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id="+id);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                window.location.href = "/Home/Profile"
            } else {
                console.log("fail");
            }
        }
    };
  
    console.log("running")
  }
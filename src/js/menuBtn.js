// home button start
var homeButton = document.createElement('button');
homeButton.innerHTML = '<img src="images/home.png" alt="" style="width:20px; heigth:20px;"></img>';
homeButton.className = 'myButton';

var homeElement = document.createElement('div');
homeElement.className = 'homeButtonDiv';
homeElement.appendChild(homeButton);

var homeControl = new ol.control.Control({
  element: homeElement
})

homeButton.addEventListener("click", () => {
  location.href = "index.html";
})

map.addControl(homeControl);
// home button end
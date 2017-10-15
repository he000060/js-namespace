# js-namespace
var he000060 = {
pickColor:function(){
var letters = '0123456789ABCDEF'.split('');
var color='#';
for (var i = 0; i < 6; i++ ) {
color += letters[Math.round(Math.random() * 15)];
}
return color;
},

init: function(){

var newDiv = 
document.createElement("div");
newDiv.className = "box";
newDiv.textContent = "he000060";

var boxes = document.getElementById("boxes");
boxes.appendChild(newDiv);

newDiv.addEventListener("click",function press(){
newDiv.style.borderColor = he000060.pickColor();
newDiv.style.backgroundColor = he000060.pickColor(); 
});
newDiv.addEventListener("mouseover", function highlight(){
newDiv.classList.add("highlight");
});
newDiv.addEventListener("mouseout",function removelight(){
newDiv.classList.toggle("highlight");
newDiv.style=null;
});
}
}

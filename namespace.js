// HE000060 MAD9014 
//Namespace assignment

var HE000060 = {
pickColor:function(){
var letters = '0123456789ABCDEF'.split('');
var color='#';
for (var i = 0; i < 6; i++ ) {
color += letters[Math.round(Math.random() * 15)];
}
return color;
},
// This Loop I learnt from other's code //

init: function(){

var newDiv = 
document.createElement("div");
newDiv.className = "box";
newDiv.textContent = "HE000060";

var boxes = document.getElementById("boxes");
boxes.appendChild(newDiv);

newDiv.addEventListener("click",function press(){
newDiv.style.borderColor = HE000060.pickColor();
newDiv.style.backgroundColor = HE000060.pickColor(); 
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

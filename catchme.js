var box = document.getElementById("div");
var no= document.getElementById("no");

no.addEventListener('click',function()
{
    alert("ha ha ha I Always knew it , I like you too");
});
var maxHeight = window.innerHeight;
var maxWidth = window.innerWidth;

box.addEventListener("mouseover", function () {
    var curr = box.getBoundingClientRect();
    
    var pos = getPos(curr.height, curr.width);

    box.style.top=pos.y+'px';
    box.style.left=pos.x+'px';

    console.log("reached end of event");

});

function getPos(currX, currY) {
    
    var newX = Math.random() * maxWidth + 1 - currX;
    var newY = Math.random() * maxHeight + 1 - currY;

    if(newX<0)
        newX=0;

    if(newY<0)
        newY=0;

    return {
        x: newX,
        y: newY
    };
}
let body=document.getElementsByTagName("body");
function createRandomColor() 
{
     var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var hexR = r.toString(16).padStart(2, '0'); 
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');
     return '#' + hexR + hexG + hexB;
}
function changeColor()
{
    let mark=createRandomColor();
    let changedcolor=document.getElementById("changedcolor");
    body[0].style.backgroundColor=mark;
    changedcolor.defaultValue="White";
    changedcolor.innerText=mark;
}

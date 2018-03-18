const owl_bitmap = [0, 0, 0, 0, 0, 384+64, 63+512, 1023-63, 768, 256+120, 256+128+4, 256+48+2, 256+64+26, 256+127-5, 256+48+3, 128+4, 256+122, 256+9, 512+8, 512+8, 1024+8, 1024+16, 1024+16, 1024+32, 1024+64, 1024+384, 512, 512+127, 512+64+8, 512+128+7, 256, 0, 0, 0, 0, 0];
var bitmap = new Bitmap(owl_bitmap);
bitmap.render(document.getElementById("bitmap1"));
const toolbar = document.getElementById("toolbar");
const palette = document.getElementById("palette");

var tool = "draw";
var paint_color = "green";

toolbar.addEventListener("click", function(event) {
    if(event.target.id === "toolbar") return;
    var cur_selection = toolbar.getElementsByClassName("selected");
    if(cur_selection.length>0) cur_selection[0].classList.remove("selected");
    event.target.classList.add("selected");
    tool = event.target.id;
});

palette.addEventListener("click", function(event) {
    if(event.target.id === "palette") return;
    var cur_selection = palette.getElementsByClassName("selected");
    if(cur_selection.length>0) cur_selection[0].classList.remove("selected");
    event.target.classList.add("selected");
    paint_color = event.target.style.backgroundColor;
});

document.getElementById("grid").addEventListener("click", function(event) {
    document.body.classList.toggle("show_grid");
});
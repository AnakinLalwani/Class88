var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var player_obj = "";
var block_obj = "";

var block_width = 30;
var block_height = 30;

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_obj = Img; 
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({top:player_y, left:player_x});
        canvas.add(player_obj);
    });
}
function new_block_update(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        block_obj = Img; 
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({top:player_y, left:player_x});
        canvas.add(block_obj);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed=='80') {
        console.log("p and shift pressed together");
        block_height = block_height+10;
        block_width = block_width+10;
        document.getElementById("width").innerHTML= block_width;
        document.getElementById("height").innerHTML= block_height;
    }
    if (e.shiftKey == true && keypressed=='77'){
        console.log("m and shift pressed together");
        block_height = block_height-10;
        block_width = block_width-10;
        document.getElementById("width").innerHTML= block_width;
        document.getElementById("height").innerHTML= block_height;
    }


    if(keypressed==38){
        console.log("up");
        up();
    }
    if(keypressed==40){
        console.log("down");
        down();
    }
    if(keypressed==37){
        console.log("left");
        left();
    }
    if(keypressed==39){
        console.log("right");
        right();
    }


    if(keypressed==84){
        console.log("T");
        new_block_update('trunk.jpg');
    }
    if(keypressed==68){
        console.log("D");
        new_block_update('dark_green.png');
    }
    if(keypressed==76){
        console.log("L");
        new_block_update('light_green.png');
    }
    if(keypressed==71){
        console.log("G");
        new_block_update('ground.png');
    }
    if(keypressed==87){
        console.log("W");
        new_block_update('wall.jpg');
    }
    if(keypressed==89){
        console.log("Y");
        new_block_update('yellow_wall.png');
    }
    if(keypressed==85){
        console.log("U");
        new_block_update('unique.png');
    }
    if(keypressed==82){
        console.log("R");
        new_block_update('roof.jpg');
    }
    if(keypressed==67){
        console.log("C");
        new_block_update('cloud.jpg');
    }
}
function up() {
    if(player_y > 10){
        player_y= player_y-block_height;
        console.log("block height = " + block_height);
        console.log("The players X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}
function down() {
    if(player_y < 460){
        player_y= player_y+block_height;
        console.log("block height = " + block_height);
        console.log("The players X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}
function left() {
    if(player_x > 0){
        player_x = player_x-block_height;
        console.log("block height = " + block_height);
        console.log("The players X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}
function right() {
    if(player_x < 850){
        player_x = player_x+block_height;
        console.log("block height = " + block_height);
        console.log("The players X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}

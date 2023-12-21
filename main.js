
// Create canvas variable
var canvas =  new fabric.canvas ('myCanvas');
//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	
	new_image();
}

function new_image()
{
	fabric.Image.fromURL ("golf-h1.png", function(Img){
		hole_obj= Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		ball_obj.set({
			top:hole_y,
		left:ball_x

	});
	canvas.add(ball_obj);
		});
			
}

window.addEventListener("keydown", my_keydown);
if((ball_x==hole_x)&&(ball_y==hole_y)){
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!";
	document.getElementById("myCanvas").style.bordercolor="red"
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=450){
			ball_y = ball_y + block_image_height
			console.log("block image height = " + block_image_height);
			console.log("when Down arrow key is pressed, 	X= "+ ball_x + " ,  Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function down()
	{
		 if(ball_y <=450){
			ball_y = ball_y + block_image_height
			console.log("block image height = " + block_image_height);
			console.log("when Down arrow key is pressed, 	X= "+ ball_x + " ,  Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_y <=450){
				ball_y = ball_y + block_image_height
				console.log("block image height = " + block_image_height);
				console.log("when Down arrow key is pressed, 	X= "+ ball_x + " ,  Y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			 }
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ball_y <=450){
				ball_y = ball_y + block_image_height
				console.log("block image height = " + block_image_height);
				console.log("when Down arrow key is pressed, 	X= "+ ball_x + " ,  Y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			 }
		}
	}
	
}


var Values = [];
ArraySize = 50;
var slider = document.getElementById("Slider");
var output = document.getElementById("output");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  ArraySize = this.value;
};



window.onload = DrawGraph();
window.onload = GenerateArray();

function DrawGraph() { //draws the barchart onto the canvas
var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 1200;
myCanvas.height = 500;
var ctx = myCanvas.getContext("2d");


var width = 500/Values.length; //Rectangle width
var currX = 1; //space between Rectangles
var base = 400; //Canvas Height


ctx.fillStyle = 'green' ;
for (var i = 0;i<Values.length;i++){
    var h = Values[i];
    ctx.fillRect(currX,myCanvas.height-h,width,h);
    currX += width + 10;
}
}


function SortingGraph(highlighted1, highlighted2) { //draws the barchart onto the canvas
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = 1200;
    myCanvas.height = 500;
    var ctx = myCanvas.getContext("2d");
    
    
    var width = 500/Values.length; //Rectangle width
    var currX = 1; //space between Rectangles
    var base = 400; //Canvas Height
    
    
    
    for (var i = 0;i<Values.length;i++){
        if (i == highlighted1){
            ctx.fillStyle = 'yellow';
        } else if(i == highlighted2) {
            ctx.fillStyle = 'Orange';
        } else {
            ctx.fillStyle = 'green' ;
        }
        var h = Values[i];
        ctx.fillRect(currX,myCanvas.height-h,width,h);
        currX += width + 10;
    }
    }



function GenerateArray() {  //Clears and repopulates the array with random values
    Values = [];
    for (var i=0; i<ArraySize; i++) {
        Values.push(Math.round(Math.random() * 350))
    }
    DrawGraph();
}

 async function bubbleSort(){
    var len = Values.length;
    for (var i = len-1; i>=0; i--){  
      for(var j = 1; j<=i; j++){
        if(Values[j-1]>Values[j]){
            SortingGraph(j-1,j);
            await sleep(200);
            var temp = Values[j-1];
         Values[j-1] = Values[j],50000
            Values[j] = temp;
         }
      }
    }
    setTimeout(DrawGraph(),999999999);
 }

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//-----------------------------------------------------------------------------------
//                                  Global Variables                                |
//-----------------------------------------------------------------------------------
var Values = [];
Sortingspeed = 200;
ArraySize = 50;
SelectedAlgorithm = "empty";
bubble = "Bubble Sort";
Quick = "Quick Sort";
Merge = "Merge Sort";
Binary = "Binary Tree Sort";
Insertion ="Insertion";
//-----------------------------------------------------------------------------------
//                                    Control panel                                 |
//-----------------------------------------------------------------------------------
var slider = document.getElementById("Slider"); // Slider for array size
var output = document.getElementById("output");
output.innerHTML = slider.value; 


var Sslider = document.getElementById("SSlider");//Slider for sorting speed
var Soutput = document.getElementById("Soutput");
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle generates the array to the apropriate size)
slider.oninput = function() {
  output.innerHTML = this.value;
  ArraySize = this.value;
  GenerateArray();
};


// Update the current slider value (each time you drag the slider handle changes the sorting speed)
Sslider.oninput = function() {
  Soutput.innerHTML = this.value;
  Sortingspeed = parseInt(this.value);
};

//gets the selected algorithm from the dropdown box
async function SelectAlgo(Algorithm){
  console.log(Algorithm);
  document.getElementById("SelectedAlgorithm").innerHTML = Algorithm;
  SelectedAlgorithm = Algorithm;
};

function GenerateArray() {  //Clears and repopulates the array with random values
  Values = [];
  for (var i=0; i<ArraySize; i++) {
      Values.push(Math.round(Math.random() * 350))
  }
  DrawGraph();
}

//-----------------------------------------------------------------------------------
//                             Drawing to JS canvas                                  |
//-----------------------------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------------
//                                        bubblesort Algorithm                                          |
//------------------------------------------------------------------------------------------------------
 async function bubbleSort(){
    var len = Values.length;
    for (var i = len-1; i>=0; i--){  
      for(var j = 1; j<=i; j++){
        if(Values[j-1]>Values[j]){
          SortingGraph(j-1,-1);  
           await sleep(Sortingspeed+100);
           SortingGraph(j-1,j);
           await sleep(Sortingspeed);
            var temp = Values[j-1];
         Values[j-1] = Values[j],50000
            Values[j] = temp;
            DrawGraph();
            await sleep(Sortingspeed);
         }
      }
    }
 }

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//------------------------------------------------------------------------------------------------------
//                                        insertion Algorithm                                           |
//------------------------------------------------------------------------------------------------------

  async function insertionSort(){
    var i, len = Values.length, el, j;
  
    for(i = 1; i<len; i++){
      el = Values[i];
      j = i;
      while(j>0 && Values[j-1]>el){
          SortingGraph(j,j-1);
          await sleep(500);
        Values[j] = Values[j-1];
        j--;
     }
  
     Values[j] = el;
    }
  
   DrawGraph();
  }
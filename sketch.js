function setup() {
    createCanvas(600, 600);
    background(" white");
  }
  
  function draw() {
    stroke("#B2164B");
   fill ("#D073E0")
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
       rect(mouseX, mouseY, 20, 35);
    }
  }
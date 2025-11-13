// Cube rendering

const WIDTH = 500
const HEIGTH = 500

let objs = []
let objsIndex = 0

function addObject(newObject){
  objs[objsIndex] = newObject;
  objsIndex++;
  return objs[objsIndex-1]
}

function setup() {
  createCanvas(WIDTH, HEIGTH);
  n1 = addObject(new Node(WIDTH/4,HEIGTH/4,null))
  n2 = addObject(new Node(WIDTH*3/4,HEIGTH/4,n1))
  n3 = addObject(new Node(WIDTH*3/4,HEIGTH*3/4,n2))
  n4 = addObject(new Node(WIDTH/4,HEIGTH*3/4,n3))
  n1.setNext(n4)
}

function draw() {
  background(0);
  objs.forEach(x => {x.draw()})
}

function Node(x,y,next){
  this.x = x
  this.y = y
  this.next = next
  
  this.draw = function(){
    fill("white")
    circle(this.x,this.y,10)
    if(this.next){
      stroke("white")
      line(this.x,this.y,this.next.x,this.next.y)
    }
  }
  
  this.setNext = function(nNext){
    this.next = nNext
  }
}

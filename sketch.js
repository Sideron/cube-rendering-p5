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
  n1 = addObject(new Node(-150,-150,1.5,null))
  n2 = addObject(new Node(150,-150,1.5,n1))
  n3 = addObject(new Node(150,150,1.5,n2))
  n4 = addObject(new Node(-150,150,1.5,n3))
  n1.setNext(n4)
  
  n1c = addObject(new Node(-150,-150,0.5,null))
  n2c = addObject(new Node(150,-150,0.5,n1c))
  n3c = addObject(new Node(150,150,0.5,n2c))
  n4c = addObject(new Node(-150,150,0.5,n3c))
  n1c.setNext(n4c)
}

function draw() {
  background(0);
  objs.forEach(point => {
    point.z+=0.1
    point.draw()
  })
}

function Node(x,y,z,next){
  this.cx = x
  this.cy = y
  this.z = z
  this.x = this.cx/this.z
  this.y = this.cy/this.z
  this.next = next
  
  this.draw = function(){
    this.x = this.cx/this.z
    this.y = this.cy/this.z
    fill("white")
    circle(this.x+WIDTH/2,this.y+HEIGTH/2,10)
    if(this.next){
      stroke("white")
      line(this.x+WIDTH/2,this.y+HEIGTH/2,
           this.next.x+WIDTH/2,this.next.y+HEIGTH/2)
    }
  }
  
  this.setNext = function(nNext){
    this.next = nNext
  }
}

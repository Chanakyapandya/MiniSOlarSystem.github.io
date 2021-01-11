class Sun{

constructor(x,y,r){

var options={

isStatic : true


}

this.body = Bodies.circle(x,y,r,options);
this.r = this.r
this.image = loadImage("images/sun.png")

World.add(myWorld,this.body);

}

display(){

var pos = this.body.position;



imageMode(CENTER);
image(this.image,pos.x,pos.y,this.r,this.r);

}


}
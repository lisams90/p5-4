function Pumpkin(x,y,veggie){
	this.x =x;
	this.y=y;
	this.veggie =veggie;

	this.display =function(){

    imageMode(CENTER);
    image(this.veggie, this.x, this.y);
	}
	this.update=function(){
		this.x =this.x+random(-1,1);
		this.y =this.y+random(-1,1);
	}
}
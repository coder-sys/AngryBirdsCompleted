class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smk = loadImage("sprites/smoke.png");
    this.pa = []
  }

  display() {

    super.display();
    if(this.body.position.x > 200){
      this.p =[this.body.position.x,this.body.position.y];
      this.pa.push(this.p)
    }
    for(var i = 0;i<this.pa.length;i++){
      image(this.smk,this.pa[i][0],this.pa[i][1])
    }
  }
}

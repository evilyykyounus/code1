class Car{
    constructor(x,y){
        var options ={
           restitution:2
           
        }
        this.body=Bodies.rectangle(x,y,100,100,options)
this.image=loadImage("images/playerSitinginACar.jpg")
World.add(world,this.body)
    }
    display () {
        var pos =this.body.position;
        pos.x =mouseX
        pos.y =mouseY

        image(this.image,this.body.position.x,this.body.position.y,100,100)
    
    }
}
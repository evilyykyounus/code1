class Cat11{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,100,100,options)
        this.width = 100; 
        this.height = 100;
        var r=random(1,6)
 this.image=loadImage("images/cat11.png")
World.add(world,this.body)
    }
    display () {
        imageMode(CENTER)

        image(this.image,this.body.position.x,this.body.position.y,100,100)
    }
}
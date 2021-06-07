class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction:0,
            density : 1.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
        this.image = loadImage("paper.png")

    }
    display(){
       
        push()
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.r,this.r)
        pop()
    }
}
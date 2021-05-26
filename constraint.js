class constraint{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,pointB:pointB,stiffness:0.05,length:10

        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
display(){
    if(this.sling.bodyA){
        
    
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
}}
    fly(){
        this.sling.bodyA=null
    
    }
    attach(body){
        this.sling.bodyA=body
    }
}
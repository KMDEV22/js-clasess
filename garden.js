class Garden{
    rows=0
    columns=0
    name='Garden'
    plant=null
    plants=[]
    constructor(rows,columns,plant){
        this.rows=rows
        this.columns=columns
        // debugger
        console.log('i am before switch')
        switch(plant){
            case 'rose':
                this.plant=new Plant('rose',0,2,'./images/rose.png',[0,210,40,15])
                console.log('i am in rose case')
                break
            case 'orchid':
                this.plant=new Plant('orchid',0,1,'./images/orchid.png',[100,240,60,15])
                console.log('i am in orchid case')
                break
            case 'tulsi':
                this.plant=new Plant('tulsi',0,2,'./images/tulsi.png',[200,220,80,15])
                console.log('i am in tulsi case')
                break
                

        }
        console.log('i am after switch')
        this.prepareGarden()

    }
    prepareGarden(){
        for(let i=0;i<this.columns;i++){
            // first variable is initiated with value 0
            // the middle potion tells how much to loop; loop it till i>column count.
            // the third portion increment the value of i; so after the last line it  is assigned a value (i+1)
            console.log('i=',i)
            let createButtonclick= false
            this.plants[i]=new Plant(this.plant.name,this.plant.age,this.plant.growthFactor,this.plant.imgPath,[i*60,this.plant.rect.y-100,this.plant.rect.w,this.plant.rect.h],this.plant.floweringAge,createButtonclick)
            // this.plants[i].grow()
        
        }
        let btn= document.createElement('button')
        btn.textContent= this.name.toUpperCase()
        document.querySelector('.buttons').appendChild(btn)
        btn.addEventListener('click',()=>{
        this.grow()

        
        })

    }
    grow(){
        this.plants.forEach((item)=>{
            item.grow()
            
        })
    }
}

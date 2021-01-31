class Plant{
     age = 0;
     name = null
     growthFactor = 0
     imgPath=''
     image= null;
     flowerImage= null
     rect={
         x:0,y:0,
         w:0,h:0
     };
     floweringAge=0
     constructor(name, age, growthFactor,imgPath,rect,floweringAge,createButtonclick){

        //  debugger
         this.rect.x= rect[0]
         this.rect.y= rect[1]
         this.rect.w= rect[2]
         this.rect.h= rect[3]
         this.floweringAge = floweringAge ||0
         this.name = name
         this.age = age 
         this.growthFactor = growthFactor
         this.imgPath = imgPath
         this.createButtonclick = createButtonclick

         this.image=new Image();
         this.image.src=imgPath;
         this.flowerImage=new Image();
         this.flowerImage.src=imgPath.replace('.png','_flowers.png')
        //  debugger
         this.image.onload=()=>{
            let canvas = document.querySelector('#plantcanvas');
            let ctx = canvas.getContext('2d');
            ctx.drawImage(this.image,this.rect.x,this.rect.y,this.rect.w,this.rect.h*this.age)
   
   
         }
        this.init()

     }

     init(){
         if(this.createButtonclick){
            let btn= document.createElement('button')
            btn.textContent= this.name.toUpperCase()
            document.querySelector('.buttons').appendChild(btn)
            btn.addEventListener('click',()=>{
            this.grow()
   
            
            })
   
         }
     }
     grow(){
        this.age += this.growthFactor
        let canvas = document.querySelector('#plantcanvas');
        let ctx = canvas.getContext('2d');
        let startY = (this.rect.h*this.age)
        ctx.clearRect(this.rect.x,this.rect.y-startY,this.rect.w,this.rect.h*this.age)
        console.log(this.rect.x,this.rect.y-startY,this.rect.w,this.rect.h*this.age)
        ctx.drawImage(this.image,this.rect.x,this.rect.y-startY,this.rect.w,this.rect.h*this.age)
        if(this.age*this.growthFactor>10){
            ctx.drawImage(this.flowerImage,this.rect.x,this.rect.y-startY,this.rect.w,this.rect.h*this.age)

        }
    }
}

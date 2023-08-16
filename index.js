let button=document.getElementById("clicker")
let counter=0
let mragin1=0
let margin2=0
let isAlive=true
let start="https://speedydelay.github.io/discord"
var w = window.innerWidth;
var h = window.innerHeight;
let result=document.getElementById("result")
button.addEventListener("click",function(){
    if(isAlive===true){
        if (counter===1){
             start = Date.now()
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        counter++
        console.log(20-counter,"remaining")
        button.textContent=counter
        mragin1=Math.floor(Math.random()*w*9/10)
        margin2=Math.floor(Math.random()*h*9/10)
        console.log("x:",mragin1)
        console.log("y:",margin2)
        button.style.marginLeft=mragin1+"px"
        button.style.marginTop=margin2+"px"  
        if(20-counter===0){
            isAlive=false
            const end =Date.now()
            const timeELapsed=(end-start)/1000
            console.log(timeELapsed,"elapsed")
            console.log("average reaction time:",timeELapsed/20)
            button.style.display="none"
            result.textContent="average reaction time:"+timeELapsed/20
    }
    }
    
})

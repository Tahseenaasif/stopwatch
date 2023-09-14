var min1=document.getElementById("m1");
var min2=document.getElementById("m2");
var second1=document.getElementById("s1");
var second2=document.getElementById("s2");
var millisec1=document.getElementById("ms1");
var millisec2=document.getElementById("ms2");
var start=document.getElementById("start");
var stop=document.getElementById("stop");

start.addEventListener("click",time);
stop.addEventListener("click",reset);
let mili1=0;
let mili2=0;
let sec1=0;
let sec2=0;
let minute1=0;
let minute2=0;

function time(){
      stop.style.display = "block";
    //   return{
         timeintrval=setInterval(settime,10);
         
    //   }
      
}

function settime(){
    // console.log(mili2);
    mili2+=1;
  
  if(mili2==9){
    mili2=0;
    mili1+=1;

  }
  if(mili1==9){
    mili1=0;
    sec2+=1;
  }

  if(sec2==9){
    sec2=0;
    sec1+=1;
  }
  if(sec1==6){
    sec1=0;
    minute2=minute2+1;
  }
  if( minute2==9){
    minute2=0;
    minute1=minute1+1;
  }
  if(minute1==9){
    reset();
  }
  
  millisec1.innerText=mili2;
  millisec2.innerText=mili1;
  second2.innerText=sec2;
  second1.innerText=sec1;
  min2.innerText=minute2;
  min2.innerText=minute1;
//   if(mili2==2){
//     second.innerText=s
//   }
 
}

function reset(){
    mili1=0;
    mili2=0; 
     sec1=0;
    sec2=0;
   minute1=0;
   minute2=0;
   millisec1.innerText=mili2;
  millisec2.innerText=mili1;
  second2.innerText=sec2;
  second1.innerText=sec1;
  min2.innerText=minute2;
  min2.innerText=minute1;
    clearInterval(timeintrval);
    stop.style.display = "none";
    
    
}


function makebubble(){
    var clutter = "";

for(var i=1; i<=168; i++){

    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector('#pbtm').innerHTML=clutter;

}

var timer = 60;

function runTimer(){
    var timerInt=setInterval(function(){
        if(timer >0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>GameOver</h1>`;
        }
        
        
    },1000);

}
var hitno = 0;
function getNewHit(){
    hitno = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitno;
}
var score = 0;
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitno){
        increaseScore();
        makebubble();
        getNewHit();
    }
});
runTimer();
makebubble();
getNewHit();
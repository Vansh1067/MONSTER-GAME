const attackBtn = document.getElementById('attack');
const strongAttackBtn = document.getElementById('strongattack');
const healBtn = document.getElementById('heal');
const logBtn = document.getElementById('log');
var lifeLine = document.getElementById('health');
let MONSTER_UPDATE=document.getElementById('MONSTER');
let HUMAN_UPDATE=document.getElementById('HUMAN')
const QUIT =document.getElementById('quit');
const A="ATTACK";
const S="STRONG ATTACK"
function randomNumberH(a){
    
    return a==S?Math.random()*25:Math.random()*15;
}
function randomNumberM(){
    return Math.random()*25;
}
const MONSTER ="MONSTER";
const HUMAN ="HUMAN"
let player=HUMAN
let mHealth=100;
let pHealth=100;
let COUNT_H=3;
let COUNT_S=5;
let Life_Line=1;
var START=true;

/*  function START_GAME(){

    if(START){
        START=false;
        mHealth=100;
    pHealth=100;
    update(pHealth,mHealth);
        QUIT.innerHTML="QUIT";
        strongAttackBtn.disabled=START;
        attackBtn.disabled=START;
        healBtn.disabled=START;
        logBtn. disabled=START;
    }else{
        START=true;
        QUIT.innerHTML="START";
        DISABLE()
       
    } 


}
function DISABLE(){
    strongAttackBtn.disabled=START;
    attackBtn.disabled=START;
    healBtn.disabled=START;
    logBtn.disabled=START; 
}
DISABLE();
 */   
   

function Heal(){
    if(mHealth<100){
        if(COUNT_H > 0){
            pHealth+=25;
            mHealth+=0;
            update(pHealth,mHealth);
            COUNT_H--;
        
        }
        else if(COUNT_H==0){
            healBtn.setAttribute("disabled", false);
        }
    }
}
function winner(){
    if(pHealth < 0){
        alert("MONSTER WINS");
        mHealth=100;
        pHealth=100;
        update(pHealth,mHealth);
        
        
    }
    else if(mHealth<0){
        alert("HUMAN WINS");
        mHealth=100;
        pHealth=100;
        update(pHealth,mHealth);
        
    }
   
    
   

}
function update(p,m){

    MONSTER_UPDATE.value=m;
    HUMAN_UPDATE.value=p;
}
function Attack(a){
    if(mHealth >0 && pHealth>0){
        mHealth-=randomNumberH(a);
        pHealth-=randomNumberM();
        update(pHealth,mHealth);
        winner()
    }

   
}

function LIFE_LINE(){
    if(mHealth<100){
        if(Life_Line>0){
            pHealth=100;
            mHealth+=0;
            update(pHealth,mHealth);
            Life_Line--;
            
        }
         else if(Life_Line===0){
            lifeLine.parentNode.removeChild(lifeLine);
           
        }
    }
    
}

attackBtn.addEventListener('click',()=>{
    Attack(A)
     

 });
 strongAttackBtn.addEventListener('click',()=>{
    if(COUNT_S>0){
        Attack(S);
        COUNT_S--;
        
    }else if(COUNT_S==0){
        strongAttackBtn.setAttribute("disabled", false);
    }
});
 healBtn.addEventListener('click',()=>{
     Heal()
 })
     

lifeLine.addEventListener('click',LIFE_LINE);

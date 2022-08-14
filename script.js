//TODO
//split butonu yapilacak
//reset butonu yapilacak ++
//log yazdirma yapilacak (split icin ayri puase icin ayri)
//pause tusuna bastiktan sonra tekrar start tusuna basildiginda sifirlanmasin ++
//Butonlar enable disable edilecek  ++
//10. saniyeye ve 10. dakikaya geldikten sonra saniye ve dakikanin basindaki 0'i sil ++
let seconds = 0;
let miliseconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = 0;
let finalTime;
let passedTime;
let startTime;
let deneme = false;
let deneme2 = true;

const butStart = document.getElementById('startButton');
const butPause = document.getElementById('pauseButton');
const butReset = document.getElementById('resetButton');
const butSplit = document.getElementById('splitButton');
const swDisplay = document.getElementById('times');
// const logs = document.getElementById('splitLists');



butStart.addEventListener('click',()=>{
  startTime = Date.now();
  
  timerInterval = setInterval(()=>{
    if(deneme){
      passedTime = Date.now() - startTime + finalTime;
    }
    if(deneme2){
    passedTime = Date.now() - startTime;}
    miliseconds = Math.floor((passedTime%1000)/10);
    seconds = Math.floor((passedTime / 1000)%60);
    minutes = Math.floor((passedTime / 1000) / 60);
    hours = Math.floor(minutes / 60);
   
    if(seconds < 10){
    swDisplay.innerHTML = '0'+hours + ":" +'0'+ minutes + ":" +'0'+ seconds + ":" + miliseconds;
    }
    if(seconds >= 10){
      swDisplay.innerHTML = '0'+hours + ":" +'0'+ minutes + ":" + seconds + ":" + miliseconds;
    }
    
    if(minutes >= 10){
      swDisplay.innerHTML = '0'+hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
    }
    if(hours >= 10){
      swDisplay.innerHTML = +hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
    }
  },1)
  butPause.disabled = 0;
  butStart.disabled = 1;
  butReset.disabled = 0;
  // butSplit.disabled = 0;
});

butPause.addEventListener('click',()=>{
  clearInterval(timerInterval);
 
  finalTime = passedTime;
  deneme2 = false;
  deneme = true;

  butPause.disabled = 1;
  butStart.disabled = 0;
  butStart.innerHTML= "Resume";
});
// butSplit.addEventListener('click',()=>{
//   logs. = swDisplay;
// })
butReset.addEventListener('click', ()=>{
  clearInterval(timerInterval);

  finalTime = 0;
  swDisplay.innerHTML = '00:00:00:00';

  butPause.disabled = 1;
  butStart.disabled = 0;
  butReset.disabled = 1;
  butStart.innerHTML= "Start";
  
})






// copy button funtionality 
function countCopyBtn(id){
      const initialCopyCount = parseInt(document.getElementById(id).innerText);
    const copyCount = initialCopyCount + 1;
     alert('copy it');
    return  document.getElementById(id).innerText = copyCount; 
}


// heart icon function 
function countHeartIcon(id){
      const initialHeartIcon = parseInt(document.getElementById(id).innerText);
    const heartIconCount = initialHeartIcon + 1;
    return  document.getElementById(id).innerText = heartIconCount;
 
}


// coin button function
function initialCoin(id){
      return parseInt(document.getElementById(id).innerText); 
}

function setCoin(value){
    return document.getElementById("coin-count").innerText = value;
}



// copy button 
document.getElementById('copy-press').addEventListener('click',function(){
  countCopyBtn('copy-count');
})


// heart icon 

document.getElementById("heart-press").addEventListener('click',function(){
 countHeartIcon("heart-count");
})


// coin button and call button
document.getElementById("call-press").addEventListener('click',function(){
    const total = initialCoin("coin-count");
    if(total < 20){
      alert('Not sufficient coin');
      return;
      }
      const remainingCoin = total - 20;
      setCoin(remainingCoin);
     const  serviceName = document.getElementById('service-name').innerText;
     const serviceNumber = document.getElementById('service-number').innerText;
     alert(serviceName +' and '+ serviceNumber);
})
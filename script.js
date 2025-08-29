const history =[];
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

// show alert 
function showAlert(id1,id2){
const  serviceName = document.getElementById(id1).innerText;
     const serviceNumber = document.getElementById(id2).innerText;
    return alert(serviceName +' and '+ serviceNumber);
}

// copied number 
function numberCopyOnClick(id){
  const textCopy = document.getElementById(id).innerText;
  // copy to clipboard
  return navigator.clipboard.writeText(textCopy).then(() => {
    // alert("Copied: " + textCopy);
  });
}


// National Emergency Number 


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
      showAlert('emergency-service','emergency-service-number');
     const data ={
        name : 'National Emergency Number',
        number : '999',
        time : new Date().toLocaleTimeString('en-US', { hour12: true })
     }
     history.push(data);
     const callHistory = document.getElementById('call-history-container');
callHistory.innerText = "";
for(const data of history){
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex justify-between items-center p-5 mt-4 bg-[#FAFAFA] rounded-xl">
                    <div>
                    <h1 class="font-semibold text-lg">${data.name}</h1>
                    <p class="text-[#5C5C5C]">${data.number}</p>
                    </div>
                    <h1 class="text-[#111111]">${data.time}</h1>
                </div>
    `
    callHistory.appendChild(div);
}
})

// hotline number
document.getElementById('emergency-service-number').addEventListener('click',function(){
   numberCopyOnClick('emergency-service-number');
})



// Police Helpline Number
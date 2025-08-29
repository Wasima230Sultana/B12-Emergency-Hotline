const history = [];
// copy button funtionality 
function countCopyBtn(id1, id2) {
    const initialCopyCount = parseInt(document.getElementById(id1).innerText);
    const copyCount = initialCopyCount + 1;
    const number = document.getElementById(id2).innerText;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    return document.getElementById(id1).innerText = copyCount;
}


// heart icon function 
function countHeartIcon(id) {
    const initialHeartIcon = parseInt(document.getElementById(id).innerText);
    const heartIconCount = initialHeartIcon + 1;
    return document.getElementById(id).innerText = heartIconCount;

}


// coin button function
function initialCoin(id) {
    return parseInt(document.getElementById(id).innerText);
}

function setCoin(value) {
    return document.getElementById("coin-count").innerText = value;
}

// show alert 
function showAlert(id1, id2) {
    const serviceName = document.getElementById(id1).innerText;
    const serviceNumber = document.getElementById(id2).innerText;
    return alert('Calling '+serviceName + ' ' + serviceNumber+'...');
}


// Clear button 
document.getElementById("clear-btn").addEventListener('click', function () {
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";

})

// heart icon 
document.querySelectorAll('.heart-press').forEach(heart => {
  heart.addEventListener('click', function () {
    countHeartIcon("heart-count");
  });
});

// National Emergency Number 
// copy button 
document.getElementById('copy-press').addEventListener('click', function () {
    countCopyBtn('copy-count', 'emergency-service-number');
})


// coin button and call button
document.getElementById("call-press").addEventListener('click', function () {
    const total = initialCoin("coin-count");
    if (total < 20) {
        alert('Not sufficient coin');
        return;
    }
    const remainingCoin = total - 20;
    setCoin(remainingCoin);
    showAlert('emergency-service', 'emergency-service-number');
    const data = {
        name: 'National Emergency Number',
        number: '999',
        time: new Date().toLocaleTimeString('en-US', { hour12: true })
    }
    history.push(data);
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";
    for (const data of history) {
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


// Police Helpline Number
// copy button 
document.getElementById('police-helpline-number-copy').addEventListener('click', function () {
    countCopyBtn('copy-count', 'police-helpline-number');
})


// coin button and call button
document.getElementById("police-helpline-number-call").addEventListener('click', function () {
    const total = initialCoin("coin-count");
    if (total < 20) {
        alert('Not sufficient coin');
        return;
    }
    const remainingCoin = total - 20;
    setCoin(remainingCoin);
    showAlert('police-helpline', 'police-helpline-number');
    const data = {
        name: 'Police Helpline Number',
        number: '999',
        time: new Date().toLocaleTimeString('en-US', { hour12: true })
    }
    history.push(data);
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";
    for (const data of history) {
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

// Fire Service Number 
// copy button 
document.getElementById('fire-service-number-copy').addEventListener('click', function () {
    countCopyBtn('copy-count', 'fire-service-number');
})


// coin button and call button
document.getElementById("fire-service-number-call").addEventListener('click', function () {
    const total = initialCoin("coin-count");
    if (total < 20) {
        alert('Not sufficient coin');
        return;
    }
    const remainingCoin = total - 20;
    setCoin(remainingCoin);
    showAlert('fire-service', 'fire-service-number');
    const data = {
        name: 'Fire Service Number',
        number: '999',
        time: new Date().toLocaleTimeString('en-US', { hour12: true })
    }
    history.push(data);
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";
    for (const data of history) {
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


// Ambulance Service
// copy button 
document.getElementById('ambulance-service-number-copy').addEventListener('click', function () {
    countCopyBtn('copy-count', 'ambulance-service-number');
})


// coin button and call button
document.getElementById("ambulance-service-number-call").addEventListener('click', function () {
    const total = initialCoin("coin-count");
    if (total < 20) {
        alert('Not sufficient coin');
        return;
    }
    const remainingCoin = total - 20;
    setCoin(remainingCoin);
    showAlert('ambulance-service', 'ambulance-service-number');
    const data = {
        name: 'Ambulance Service',
        number: '999',
        time: new Date().toLocaleTimeString('en-US', { hour12: true })
    }
    history.push(data);
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";
    for (const data of history) {
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

// Women & Child Helpline
// copy button 
document.getElementById('women-child-helpline-number-copy').addEventListener('click', function () {
    countCopyBtn('copy-count', 'women-child-helpline-number');
})


// coin button and call button
document.getElementById("women-child-helpline-number-call").addEventListener('click', function () {
    const total = initialCoin("coin-count");
    if (total < 20) {
        alert('Not sufficient coin');
        return;
    }
    const remainingCoin = total - 20;
    setCoin(remainingCoin);
    showAlert('women-child-helpline', 'women-child-helpline-number');
    const data = {
        name: 'Ambulance Service',
        number: '999',
        time: new Date().toLocaleTimeString('en-US', { hour12: true })
    }
    history.push(data);
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";
    for (const data of history) {
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
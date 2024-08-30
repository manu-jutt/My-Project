const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isrunning = false;

function start(){

    if (!isrunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}    

function stop(){
    if (isrunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isrunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isrunning = false; 
    display.textContent = "00:00:00:00"   
}

function update(){
    const currenttime = Date.now();
    elapsedTime = currenttime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mnts = Math.floor(elapsedTime / (1000 * 60) % 60);
    let scnds = Math.floor(elapsedTime / (1000) % 60);
    let miliscnds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    mnts = String(mnts).padStart(2, "0");
    scnds = String(scnds).padStart(2, "0");
    miliscnds = String(miliscnds).padStart(2, "0");

    display.textContent = `${hours}:${mnts}:${scnds}:${miliscnds}`;
}
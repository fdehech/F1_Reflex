const body=document.body;
let running = false;
let watch;
let Trigger;
let Mobile;
let clock=0;



function isMobileDevice() {
    return /Mobi|Android|iPad|iPhone|iPod/i.test(navigator.userAgent);
}
if (isMobileDevice()) {
    Mobile=true;
    Trigger='click';
    body.style.backgroundColor='Orange'
}else{
    Mobile=false;
    Trigger='keypress';
}


const clear = () =>{
    const Elements=body.querySelectorAll('.Landing');
    Elements.forEach(Elem => {
        body.removeChild(Elem);
    });
}
const getRandomNumber = () => Math.floor(Math.random() * (3500 - 300 + 1)) + 300;
function convertMsToSecMs(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const ms = milliseconds % 1000;
    return `${seconds}:${ms.toString().padStart(3, '0')}`;
}

const startbtn = Object.assign(document.createElement("span"),{
    className: "Start Landing",
    innerText:"Start"
});

body.append(startbtn);

function startWatch() {
    Object.assign(watch.style, { visibility: 'visible' });
    running = true;
    const run = () => {
        if (!running) return;
        setTimeout(() => {
            clock += 10;
            watch.innerText = convertMsToSecMs(clock);
            run();
        }, 10);
    };
    run();
}

startbtn.addEventListener("click", ()=>{
    clear();
    Object.assign(body,{style:'background-color:white;'});
    watch=Object.assign(document.createElement("p"),{
        className:'watch',
        innerText:clock
    });
    let container=document.querySelector(".container")
    Object.assign(container, {
        style:'visibility : visible'
    })

    let instr=Object.assign(document.createElement("p"),{id:'instruction', innerText:"Press Enter to Start" , className:'instr'});
    
    body.append(watch,instr)
    
    Load = async () => {    
        watch.innerText='00:00';
        TurnOffGreen();
        running = false;
        
        document.querySelector('.instr').innerText="Press AnyKey to Start"
    
        document.addEventListener(Trigger, async () => {
                
                document.querySelector('.instr').innerText="Press AnyKey to Stop"

                await new Promise((resolve) => {
                    clock=0;
                    watch.innerText='00:00';
                    TurnOffGreen();
                    TurnOnRed(resolve);
                });
                
                await new Promise(resolve => setTimeout(resolve, getRandomNumber()));
                
                TurnOnGreen();
                
                TurnOffRed();
                
                startWatch();
                
                document.addEventListener(Trigger, () => {
        
                    running = false;
                    document.querySelector('.instr').innerText="Press AnyKey to Reload"
                    document.addEventListener(Trigger, () => {
                            Load();
                    },{once:true})
                },{once:true});
            },{once:true});
    }
Load();
})














const TurnOffRed = () =>{
    document.querySelectorAll(".RedOn").forEach(Bulb => 
        Bulb.classList.replace("RedOn", "Off")
    );
}
const TurnOnRed = (resolve) =>{
    ['.LS1', '.LS2', '.LS3', '.LS4', '.LS5'].forEach((QS, index) => 
    setTimeout(() => {
        document.querySelectorAll(QS).forEach(Bulb => 
            Bulb.classList.replace("Off", "RedOn")
        );
        if (index === 4) resolve();
    }, 1000 * (index + 1))
    );
}
const TurnOnGreen = () => {
    document.querySelectorAll(".GreenBulb").forEach(Bulb => 
        Bulb.classList.replace("Off", "GreenOn")
    );
}
const TurnOffGreen = () => {
    document.querySelectorAll(".GreenBulb").forEach(Bulb => 
        Bulb.classList.replace("GreenOn", "Off")
    );
}





























/*
const body=document.body;
let running = false;
let watch;
var clock=0;

const clear = () =>{
    const Elements=body.querySelectorAll('.Landing');
    Elements.forEach(Elem => {
        body.removeChild(Elem);
    });
}

const getRandomNumber = () => Math.floor(Math.random() * (3500 - 300 + 1)) + 300;
function convertMsToSecMs(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const ms = milliseconds % 1000;
    return `${seconds}:${ms.toString().padStart(3, '0')}`;
}

const startbtn = Object.assign(document.createElement("span"),{
    className: "Start Landing",
    innerText:"Start"
});

body.append(startbtn);

function startWatch() {
    Object.assign(watch.style, { visibility: 'visible' });
    running = true;
    const run = () => {
        if (!running) return;
        setTimeout(() => {
            clock += 10;
            watch.innerText = convertMsToSecMs(clock);
            run();
        }, 10);
    };
    run();
}

async function Load(){

    clock=0;
    watch.innerText='00:00';
    TurnOffGreen();
    running = false;
    
    document.querySelector('.instr').innerText="Press Enter to Start"

    document.addEventListener('keydown', async (event) => {
        if (event.code === 'Enter' && !running) {
            document.querySelector('.instr').innerText="Press Space to Stop"
            await new Promise((resolve) => {
                clock=0;
                watch.innerText='00:00';
                TurnOffGreen();
                TurnOnRed(resolve);
            });
            
            await new Promise(resolve => setTimeout(resolve, getRandomNumber()));
            TurnOnGreen();
            TurnOffRed();
            startWatch();
            document.addEventListener('keypress', async (event) => {
    
                if (event.code === 'Space') {
                    running = false;
                }
        
                if( event.code==='Space' && !running){
                    document.querySelector('.instr').innerText="Press R to Reload"
                    document.addEventListener('keypress', async (event) => {
                        if (event.code === 'KeyR'){
                            Load();
                        }
                    },{once:true})
                } 
            },{once:true});
        }
    },{once:true});
    
}


startbtn.addEventListener("click", ()=>{
    clear();
    Object.assign(body,{style:'background-color:white;'});
    watch=Object.assign(document.createElement("p"),{
        className:'watch',
        innerText:clock
    });
    let container=document.querySelector(".container")
    Object.assign(container, {
        style:'visibility : visible'
    })

    let instr=Object.assign(document.createElement("p"),{id:'instruction', innerText:"Press Enter to Start" , className:'instr'});
    
    body.append(watch,instr)
    
    Load();
})

const TurnOffRed = () =>{
    document.querySelectorAll(".RedOn").forEach(Bulb => 
        Bulb.classList.replace("RedOn", "Off")
    );
}
const TurnOnRed = (resolve) =>{
    ['.LS1', '.LS2', '.LS3', '.LS4', '.LS5'].forEach((QS, index) => 
    setTimeout(() => {
        document.querySelectorAll(QS).forEach(Bulb => 
            Bulb.classList.replace("Off", "RedOn")
        );
        if (index === 4) resolve();
    }, 1000 * (index + 1))
    );
}
const TurnOnGreen = () => {
    document.querySelectorAll(".GreenBulb").forEach(Bulb => 
        Bulb.classList.replace("Off", "GreenOn")
    );
}
const TurnOffGreen = () => {
    document.querySelectorAll(".GreenBulb").forEach(Bulb => 
        Bulb.classList.replace("GreenOn", "Off")
    );
}

*/
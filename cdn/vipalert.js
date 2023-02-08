const head = document.querySelector('head');

const mycss = document.createElement("style");
mycss.innerHTML = `.alertbox {
        border: 10px solid black;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 0 rgb(70, 70, 70);
        
        color: rgb(255, 255, 255);
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        position: absolute;
        padding: 50px;
        height: min-content;
        width: min(min-content, 500px);
        min-width: 200px;
        top: 0%;
        left: 50%;
        visibility: hidden;
        transform: translate(-50%, -50%) scale(.1);
        transition: transform .4s, top .4s;
    }
    .pop_up {
        transform: translate(-50%, -50%) scale(1);
        visibility: visible;
        top: 20%;
    }`;
head.appendChild(mycss);

function vipalert(msg = "Default Message!", time = 3000) {
    let body = document.querySelector('body');
    if (!body) {
        setTimeout(() => {
            vipalert(msg, time)
        }, 10);
    }
    else {
        const alertbox = document.createElement("div");
        alertbox.innerHTML = msg;
        alertbox.className = "alertbox";
        body.appendChild(alertbox);
        var i = 0;
        setTimeout(() => {
            alertbox.classList.add('pop_up');
        }, .001);
        setInterval(() => {
            alertbox.style.background = `linear-gradient(to right,rgb(39, 38, 38) ${i++}%, #000000 0%)`;
        }, time / 100);
        setTimeout(() => {
            alertbox.remove();
        }, time + 500);
    }
}
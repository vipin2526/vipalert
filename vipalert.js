const head = document.querySelector('head');

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
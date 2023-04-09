
function repeatHello(callback) {
    let id = setInterval(() => {
        console.log("Hello");
        callback()
    }, 500);
setTimeout(() => clearInterval(id), 5000)

}

repeatHello(function () { })

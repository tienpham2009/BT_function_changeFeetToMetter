function changeMetertoFeet(meter) {
    meter = parseInt(meter)
    feet = meter * 3.279
    document.getElementById("metertofeet").innerHTML = "Result: "+feet + " feet"
}

function changeFeettoMeter(feet) {
    feet = parseInt(feet)
    meter = feet * 0.305
    document.getElementById("feettometer").innerHTML = "Result: "+meter + "meter"
}

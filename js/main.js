function fun1() {
    $('#timerDiv').html($('#timerDiv').text() + " fun1, ");
    //console.log("fun1");
    setTimeout(fun2, 0);
    $('#timerDiv').html($('#timerDiv').text() + " fun1-2, ");
    //console.log("fun1-2");
    fun3();
}
function fun2() {
    $('#timerDiv').html($('#timerDiv').text() + " fun2 ");
    //console.log("fun2");
}
function fun3() {
    $('#timerDiv').html($('#timerDiv').text() + " fun3, ");
    //console.log("fun3");
}

function timerBtn() {
    fun1();
}
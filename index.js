function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('res').value;
    try {
        document.getElementById('res').value = eval(num1);
    } catch (e) {
        document.getElementById('res').value = "Error";
    }
}
function Clear() {
    document.getElementById('res').value = "";
}
function Back() {
    var v = document.getElementById('res');
    v.value = v.value.substring(0, v.value.length - 1);
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Result();
    } else if (event.key === "Backspace") {
        Back();
    } else if (event.key === "Delete") {
        Clear();
    } else {
        Solve(event.key);
    }
});
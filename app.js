var input = document.getElementById("input");
function onClickNum(num) {
  console.log(num);
  input.value += num;
}
function calValue() {
  input.value = eval(input.value);
}
function clearValue() {
  input.value = "";
}
function backValue(){
    input.value = input.value.slice(0, -1);
}
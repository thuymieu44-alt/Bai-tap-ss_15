
input = prompt("Mời nhập vào các số bất kì").trim().split(" ").map(Number);
for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
        input[i] = "_";
    }
}
     console.log(input);

function history () {
    // get history value
    return document.getElementById("history-value").innerText;
}
function setHistory (num) {
    // set history value
    return document.getElementById("history-value").innerText = num;
}
function output () {
    // get output value
    return document.getElementById("output-value").innerText;
}
function setOutput (num) {
    // use this if statement because if input value is emty so show nothing but if we not use if this satement so input field is not emty it keeps 0 value;
    if (num == "") {
        return document.getElementById("output-value").innerHTML = num;
    }else{
        return document.getElementById("output-value").innerHTML = changeValueToLocalStr(num);
    }
}
// change value toLocalString for example = 234234 = 23,423,4
function changeValueToLocalStr (num) {
    let chanNum = Number(num);
    let n = chanNum.toLocaleString("en");
    return n;
}
//  use this function to remove commas between value 
function reverseNumberFormate (num) {
    return num.replace(/,/g, "");
}

// get all operator
let operator = document.getElementsByClassName("operator");
// run for loop into operator for iteration
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        // remove all value when user click "C"
        if (this.id === "clear") {
            // set empty in feild
            setHistory("");
            setOutput("");
        }
        // remove last value when user click "CL"
        else if (this.id === "backspace") {
            let outPut2 = reverseNumberFormate(output()).toString();
            // copy value from start to second last
            let n = outPut2.substr(0, outPut2.length - 1);
            // set value in out field
            setOutput(n);
        }
        else {
            let output3 = output();
            let history1 = history();
            if(output3 === "" && history1 != "") {
                if(isNaN(history1[history1.length - 1])){
                    history1 = history1.substring(0, history1.length-1);
                }
            }
            if(output3 != "" || history1 != ""){
                output3 = output3 == ""? output3 : reverseNumberFormate(output3);
                history1 += output3;
                if(this.id === "=") {
                    let result = eval(history1);
                    setOutput(result);
                    setHistory("");
                }else{
                    history1 += this.id;
                    setHistory(history1);
                    setOutput("");
                }
            }
        }
    })
}

// get number keyboard
let number = document.getElementsByClassName("number");
// user for loop for iteration when user click number if block is executed
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        // get output user value
        let output1 = reverseNumberFormate(output());
        // condition for check if is not string if block is executed
        if (output1 != NaN) {
            // concatenation user and screen current value
            output1 = output1 + this.id;
            // set output value
            setOutput(output1);
        }
    })
}
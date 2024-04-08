
const runButton = document.getElementById("runButton");
const bishInput = document.getElementById("BishInput");
const boshInput = document.getElementById("BoshInput");
const countInput = document.getElementById("loopCountInput");

function run() {


    var bish = bishInput.value;
    var bosh = boshInput.value;
    var count = countInput.value;

    if(bish<0 || bosh<0 ) {
        alert("input error") 
        return;
    }

    document.getElementById("result").innerHTML = `bish=${bish} bosh=${bosh} count=${count}<br>`;

    bishBosh(bish,bosh,count);
}

function bishBosh(num1,num2,count) {

    var toggle = true

    var firstBish = -1;
    var firstBosh = -1;

    for (i = 1; i <= count; i++) {
        let divisableByNum1 = i % num1;
        let divisableByNum2 = i % num2;

        if (divisableByNum1 == 0 && divisableByNum2 == 0) {
            console.log("Bish-Bosh");
        }
        else if (divisableByNum1 == 0 || divisableByNum2 == 0) {

            if (toggle) {
                console.log("Bish");
                document.getElementById("result").innerHTML += "Bish <br>";
                if (firstBish == -1) firstBish = i;
            }
            else {
                console.log("Bosh");
                if (firstBosh == -1) firstBosh = i;
                document.getElementById("result").innerHTML += "Bosh <br>";

            }
        }
        else {
            document.getElementById("result").innerHTML += `${i} <br>`;

            console.log(i);
        }
        toggle = !toggle
    }


    console.log("firstBish: ", firstBish);
    console.log("firstBosh: ", firstBosh);
}

runButton.addEventListener('click', run);
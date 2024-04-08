
var toggle = true 

for(i=1; i<=100 ; i++) {
    let divisableBythree = i%3;
    let divisableByFour = i%4;

    if(divisableBythree == 0 &&divisableByFour == 0) {
       console.log("Bish-Bosh");
    }
    else if(divisableBythree == 0 || divisableByFour == 0) {

        if(toggle) console.log("Bish");
        else console.log("Bosh");
    }
    else {
        console.log(i);
    }
    toggle = !toggle
}


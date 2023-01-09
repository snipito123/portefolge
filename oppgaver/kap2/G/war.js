function juhu() {
    console.log("WELCOME TO WAR BITCHES");
}
juhu();

let a_antall = 48;
let b_antall = 52;
while (a_antall > 0 && b_antall > 0) {
    if (Math.random() < 0.5) {
        a_antall--;

    } else {
        b_antall--;
    }
}
    console.log('A: ' + a_antall + 'B:' + b_antall);
    if (a_antall > 0) {
        console.log('Lag A vant lag B sug balle');
    } else{
        console.log('Lag B vant lag A sug balle');
    }
    console.log('A: ' + a_antall + 'B:' + b_antall);
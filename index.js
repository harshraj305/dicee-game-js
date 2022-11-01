


function gameFunction() {

    var max = 6;
    var min = 1; 

    var randomVariable1 = Math.floor(Math.random() * (max - min + 1) + min);
    var randomVariable2 = Math.floor(Math.random() * (max - min + 1) + min);

    // console.log(`Max : ${max}, min : ${min}, rand: ${randomVariable1}`);

    var newSrc1 = '/images/dice' + randomVariable1.toString() + '.png';
    // console.log(ans);
    var newSrc2 = '/images/dice' + randomVariable2.toString() + '.png';

    document.querySelectorAll("img")[0].setAttribute('src', newSrc1);
    document.querySelectorAll("img")[1].setAttribute('src', newSrc2);

    // Text change
    if (randomVariable1 > randomVariable2) {
        document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
    }
    else if (randomVariable1 < randomVariable2) {
        document.querySelector("h1").innerHTML = "🚩Player 2 wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}
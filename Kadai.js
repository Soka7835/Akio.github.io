function Kadai(myhand){
    var handArray=['僕も楽しかったよ！','僕もそこそこだったよ！','僕も難しかった！']
    console.log('答えてくれてありがとう!' +handArray[myhand])

    var random= Math.random()* 100;
console.log(random)

var randomInt =Math.floor(random)
console.log(randomInt)


var computerHand = randomInt % 3;
console.log('答えてくれてありがとう！'+ handArray[computerHand]);

var victory=0;


    alert("答えてくれてありがとう！" + handArray[myhand] );
       


}


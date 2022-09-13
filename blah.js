

var input = "3 0 Qc As Kd 1 Kd 5h 6c 2 Jc Jd 9s"

var map = {
    'StFlush': 19,
    '3Kind': 18,
    'Straight': 17,
    'Flush': 16,
    'Pair': 15,
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    '1': 1
};

function threeCardPoker(input){
    // create a storage array that contains the player scores
    var scores = Array(Number(input[0])).fill(0);

    // reformat the input to make it easier to work with
    input = input.slice(2);
    input = input.split(' ').join('');
    var reformat = [];
    for (var i = 0; i < input.length; i+=7) {
        var player = input[i + 1] + input[i + 2] + input[i + 3] + input[i + 4] + input[i + 5] + input[i + 6];
        reformat.push(player);
    }
    console.log(JSON.stringify(reformat));
    for (var i = 0; i < reformat.length; i++) {
        if (isStraight(reformat[i])) {
            scores[i] = map['Straight'];
        }
    }
    console.log(scores);
}

function isStraight(player){
    var values = [];
    for (var i = 0; i < player.length; i+=2) {
        values.push(map[player[i]]);
    }
    values.sort((a,b)=>a-b);
    if (values[0] === values[1] - 1 && values[1] === values[2] - 1 ) {
        return true;
    }
}

// function isFlush()

threeCardPoker(input);
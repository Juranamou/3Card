export function threeCardPoker(input) {

    // create a storage array that contains the player scores
    var scores = Array(Number(input[0])).fill(0);
    // reformat the data to make it easier to work with
    var reformat = reformatter(input);

    // loop throught the formatted data checking for scores
    for (var i = 0; i < reformat.length; i++) {
        // check for straight flush
        if (isStraight(reformat[i]) && isFlush(reformat[i])) {
            scores[i] = map['StFlush'];
            continue;
        }
        // check for three of a kind
        if (ThreeKind(reformat[i])) {
            scores[i] = map['3Kind'];
            continue;
        }
        // check for a straight
        if (isStraight(reformat[i])) {
            scores[i] = map['Straight'];
            continue;
        }
        // check for a flush
        if (isFlush(reformat[i])) {
            scores[i] = map['Flush'];
            continue;
        }
        // check for a pair
        if (isPair(reformat[i])) {
            scores[i] = map['Pair'];
            continue;
        } else {
            // check the highest card
            scores[i] = highCard(reformat[i]);
        }
    }
    return checkWinner(scores);
}

function reformatter(input) {
    input = input.slice(2);
    input = input.split(' ').join('');
    var reformat = [];
    for (var i = 0; i < input.length; i += 7) {
        var player = input[i + 1] + input[i + 2] + input[i + 3] + input[i + 4] + input[i + 5] + input[i + 6];
        reformat.push(player);
    }
    return reformat;
}

function isStraight(player) {
    var values = [];
    for (var i = 0; i < player.length; i += 2) {
        values.push(map[player[i]]);
    }
    values.sort((a, b) => a - b);
    if (values[0] === values[1] - 1 && values[1] === values[2] - 1) {
        return true;
    }
}
function isFlush(player) {
    if (player[1] === player[3] && player[3] === player[5]) {
        return true;
    }
}
function ThreeKind(player) {
    if (player[0] === player[2] && player[2] === player[4]) {
        return true;
    }
}
function isPair(player) {
    if (player[0] === player[2] || player[2] === player[4]) {
        return true;
    }
}
function highCard(player) {
    var values = [];
    for (var i = 0; i < player.length; i += 2) {
        values.push(map[player[i]]);
    }
    return Math.max(...values);
}
function checkWinner(scores) {
    var max = Math.max(...scores);
    var indexes = [];
    scores.forEach((score, i) => 
        score === max ? indexes.push(i) : null
    )
    return indexes.join();
}
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
    'T': 10,
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

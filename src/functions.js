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

// Changes the base format of the data from 3 0 2c As 4d 1 Kd 5h 6c 2 Jc Jd 9s  
// To something more mananageable ["2cAs4d", "Kd5h6c", "JcJd9s"]
function reformatter(input) {
    // remove first 2 indices, and remove spaces
    input = input.slice(2);
    input = input.split(' ').join('');
    var reformat = [];
    // reformat "2cAs4d1Kd5h6c2JcJd9s" to ["2cAs4d", "Kd5h6c", "JcJd9s"]
    for (var i = 0; i < input.length; i += 7) {
        var player = input[i + 1] + input[i + 2] + input[i + 3] + input[i + 4] + input[i + 5] + input[i + 6];
        reformat.push(player);
    }
    return reformat;
}

// Check for straights
function isStraight(player) {
    var values = [];
    // loops through a player "JcJd9s" and selects only the values "JJ9"
    for (var i = 0; i < player.length; i += 2) {
        // convert chars "JJ9" to values [11, 11, 9]
        values.push(map[player[i]]);
    }
    // sorts the values to numerical order [9, 11, 11]
    values.sort((a, b) => a - b);
    // compares neighboring values
    if (values[0] === values[1] - 1 && values[1] === values[2] - 1) {
        return true;
    }
}

// Check for flush
function isFlush(player) {
    // compare all suits to each other
    if (player[1] === player[3] && player[3] === player[5]) {
        return true;
    }
}

// Check for straight
function ThreeKind(player) {
    // compare all chars to each other (no need to convert to values)
    if (player[0] === player[2] && player[2] === player[4]) {
        return true;
    }
}

// Check for pairs
function isPair(player) {
    // compare if any of the values match
    if (player[0] === player[2] || player[2] === player[4] || player[0] === player[4]) {
        return true;
    }
}

// Find the highest card value
function highCard(player) {
    var values = [];
    // Convert chars to values
    for (var i = 0; i < player.length; i += 2) {
        values.push(map[player[i]]);
    }
    return Math.max(...values);
}

// Determines the winner by finding the highest score indice.
function checkWinner(scores) {
    var max = Math.max(...scores);
    var indexes = [];
    scores.forEach((score, i) => 
        score === max ? indexes.push(i) : null
    )
    return indexes.join();
}

//Convert Characters to values or determine how a player scored.
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

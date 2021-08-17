var player_1 = localStorage.getItem('Player 1 Name');
var player_2 = localStorage.getItem('Player 2 Name');
var score1 = 0;
var score2 = 0;
console.log(player_1, player_2);
function names() {
    document.getElementById('name_1').innerHTML = player_1 + ":";
    document.getElementById('name_2').innerHTML = player_2 + ":";
    document.getElementById('player_1').innerHTML = player_1;
    document.getElementById('player_2').innerHTML = player_2;
}
function send() {
    var number_1 = document.getElementById('number_1').value;
    var number_2 = document.getElementById('number_2').value;
    localStorage.setItem('Number 1', number_1);
    localStorage.setItem('Number 2', number_2);
    document.getElementById('answer').style.height = "35vh";
    document.getElementById('answer_input').style.display = "block";
    document.getElementById('check').style.display = "block";
    document.getElementById('no').style.display = "block";
    // For Adding Numbers
    document.getElementById('equation').innerHTML = number_1 + " X " + number_2;
}
function check() {
    var number_1 = document.getElementById('number_1').value;
    var number_2 = document.getElementById('number_2').value;
    var question_turn = player_1;
    var answer_turn = player_2;
    var input_answer = document.getElementById('answer_input').value;
    var actual_answer = number_1 * number_2;
    // If Statements
    if (input_answer == actual_answer) {
        if (answer_turn == player_1) {
            score1 = score1 + 1;
            document.getElementById('score1').innerHTML = score1;
            console.log(score1);
        }
        else{
            score2 = score2 + 1;
            document.getElementById('score2').innerHTML = score2;
            console.log(score2);
        }
    }
    if (question_turn == player_1) {
        question_turn = player_2;
        document.getElementById('question_turn').innerHTML = player_2;
    }
    else{
        question_turn = player_1;
        document.getElementById('answer_turn').innerHTML = player_1;
    }
    if (answer_turn == player_1) {
        answer_turn = player_2;
        document.getElementById('answer_turn').innerHTML = player_2;
    }
    else{
        answer_turn = player_1;
        document.getElementById('answer_turn').innerHTML = player_1;
    }
}
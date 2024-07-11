function calculateScore() {
    let score = 0;
    const quizForm = document.forms['quizForm'];
    for (let i = 1; i <= 15; i++) {
        score += parseInt(quizForm[`question${i}`].value);
    }

    let resultText = "";
    if (score >= 1 && score <= 15) {
        resultText = "Your score is between 1 and 15.";
    } else if (score >= 16 && score <= 30) {
        resultText = "Your score is between 16 and 30.";
    } else if (score >= 31 && score <= 45) {
        resultText = "Your score is between 31 and 45.";
    } else if (score >= 46 && score <= 60) {
        resultText = "Your score is between 46 and 60.";
    }

    document.getElementById('result').innerText = resultText;

    // 发送数据到 MySQL 数据库
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_score.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`score=${score}`);
}

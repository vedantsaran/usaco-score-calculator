document.getElementById('scoreForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const MAX_SCORE_PER_PROBLEM = 333.333333333;
    const numberOfProblems = 3;

    let totalScore = 0;

    for (let i = 1; i <= numberOfProblems; i++) {
        const totalCases = parseInt(document.getElementById(`cases${i}`).value);
        const correctCases = parseInt(document.getElementById(`correct${i}`).value);

        const scoreForProblem = (correctCases / totalCases) * MAX_SCORE_PER_PROBLEM;
        totalScore += scoreForProblem;
    }

    const roundedScore = Math.ceil(totalScore);

    document.getElementById('result').innerText = `The total USACO score is: ${roundedScore}`;
});

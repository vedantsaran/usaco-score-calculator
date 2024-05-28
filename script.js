document.getElementById('scoreForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const MAX_SCORE_PER_PROBLEM = 333.333333333;
    const numberOfProblems = 3;

    let totalScore = 0;

    for (let i = 1; i <= numberOfProblems; i++) {
        const correctCases = parseInt(document.getElementById(`correct${i}`).value);
        const totalCases = parseInt(document.getElementById(`total${i}`).value);

        if (!isNaN(correctCases) && !isNaN(totalCases) && totalCases > 0) {
            const scoreForProblem = (correctCases / totalCases) * MAX_SCORE_PER_PROBLEM;
            totalScore += scoreForProblem;

            document.getElementById(`score${i}`).innerText = `Score: ${scoreForProblem.toFixed(3)}`;
        } else {
            console.log(`Problem ${i}: Invalid input`);
            document.getElementById(`score${i}`).innerText = `Score: 0`;
        }
    }

    const roundedScore = Math.ceil(totalScore);
    console.log(`Total Score: ${roundedScore}`);

    document.getElementById('result').innerText = `The total USACO score is: ${roundedScore}`;
});

displayLeaderboard = () => {

    scores.sort(function(a, b){
        return b.totalScore - a.totalScore;
    });
    let tbody = document.getElementById('tablebody');

    for(let i = 0; i < scores.length; i++) {

        let userEmail = scores[i].email;
        let userScore = scores[i].totalScore;

        console.log(userEmail + ": " + userScore);
        // let li = document.createElement("li");
        // li.innerHTML = email + ": " + score
        // ol.appendChild(li);

        let tr = document.createElement("tr");

        let rank = document.createElement("td")
        rank.innerHTML = i + 1;

        let email = document.createElement("td")
        email.innerHTML = userEmail;

        let score = document.createElement("td")
        score.innerHTML = userScore;

        tr.appendChild(rank)
        tr.appendChild(email)
        tr.appendChild(score)

        tbody.appendChild(tr);


    }

}
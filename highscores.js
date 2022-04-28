const ListScorers = document.querySelector('#Scorers')
const highestScores = JSON.parse(localStorage.getItem("highestScores")) || []

//add each score as a list
ListScorers.innerHTML = highestScores.map(score => {
   return `<ul><li class="scoreWiner">${score.name} - ${score.score}</li></ul>`
}).join("")

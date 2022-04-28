const ListScorers = document.querySelector('#Scorers')
const highestScores = JSON.parse(localStorage.getItem("highestScores")) || []
ListScorers.innerHTML = highestScores.map(score => {
   return `<ul><li class="scoreWiner">${score.name} - ${score.score}</li></ul>`
}).join("")

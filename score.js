//get recent score
const recentScore = localStorage.getItem('recentScore')

const lastScore = document.querySelector('#lastScore')
const username = document.querySelector('#username')
const scoreButton = document.querySelector('#scoreButton')

//save high scores
const highestScores = JSON.parse(localStorage.getItem('highestScores')) || []

//create the final score
lastScore.innerText = recentScore
console.log(lastScore.innerText)
username.addEventListener('keyup', () => {
    scoreButton.disabled = !username.value
})

console.log(highestScores)
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: recentScore,
        name: username.value
    }

    //add score to array
  highestScores.push(score)

  // Top 7 scorers using sort()
  highestScores.sort((a, b) => {
    return b.score - a.score
  })


    highestScores.splice(7)
    localStorage.setItem('highestScores', JSON.stringify(highestScores))
    console.log(highestScores)
    window.location.assign('highscorers.html')

}

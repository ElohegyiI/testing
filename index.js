const balls = ['Molten', 'Spalding', 'Adidas', 'Nike', 'Pumaballs', 'Kinaiballs', 'Volleyballs', 'Basketballs', 'Tennisballs', 'Golfballs']

/*const mapBalls = balls.map((ball => {
console.log(ball)
return ball

}))*/
function search(balls, word){

    const result = balls.filter(ball => ball.includes(word))

    return result
}


console.log(search(balls, 'balls'))

module.exports = search
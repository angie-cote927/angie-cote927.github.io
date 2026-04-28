const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 1677215).toString(16)
}
document.getElementById("click").addEventListener('mouseenter', () => {
    document.getElementById("click").style.backgroundColor = getRandomColor();
})
document.getElementById("click").addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
})

document.getElementById("dont").addEventListener('click', () => {
    document.getElementById("dont").style.display = "none"
    document.getElementById("toldyou").style.display = "flex"
})
document.getElementById("toldyou").addEventListener('click', () => {
    document.getElementById("dont").style.display = "flex"
    document.getElementById("toldyou").style.display = "none"
})

document.getElementById("li1").addEventListener('click', () => {
    document.getElementById("li1").style.textDecoration = "line-through"
})
document.getElementById("li2").addEventListener('click', () => {
    document.getElementById("li2").style.textDecoration = "line-through"
})
document.getElementById("li3").addEventListener('click', () => {
    document.getElementById("li3").style.textDecoration = "line-through"
})
document.getElementById("li4").addEventListener('click', () => {
    document.getElementById("li4").style.textDecoration = "line-through"
})

document.getElementById("cat").addEventListener('click', () => {
    alert("cat says 'YAY THANK YOU!!'")
})
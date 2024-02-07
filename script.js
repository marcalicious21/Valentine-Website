let messageEl = document.getElementById("message")
let bearGif = document.getElementById("bear")
let yesButton = document.getElementById("yesButton")
let noButton = document.getElementById("noButton")
let wrapper = document.querySelector("#buttons")

yesButton.addEventListener("click", function() {
    messageEl.textContent = "YAY!! I LOVE YOU TOO POOKIE! 😘"
    bearGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
});

noButton.addEventListener('mouseover', () => {
    // Calculate the maximum left and top positions to keep the button within the visible area
    let maxLeft = window.innerWidth - noButton.offsetWidth
    let maxTop = window.innerHeight - noButton.offsetHeight
    
    // Generate random values for left and top positions within the visible area
    let leftPosition = Math.floor(Math.random() * maxLeft/3)
    let topPosition = Math.floor(Math.random() * maxTop/3)
    
    // Set the new position of the button, ensuring it stays within the visible area
    noButton.style.left = Math.min(leftPosition, maxLeft) + 'px'
    noButton.style.top = Math.min(topPosition, maxTop) + 'px'
});
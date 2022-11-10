document.addEventListener("DOMContentLoaded", function() {
    getExhibits()
})

const commentForm = document.getElementById("comment-form")
        
function renderExhibit(exhibitObj) {
    exhibitObj.forEach(exhibit => {
        const currentExhibitImage = document.getElementById("exhibit-image")
        currentExhibitImage.src = exhibit.image
        const exhibitTitle = document.getElementById("exhibit-title")
        exhibitTitle.innerText = exhibit.title
        const exhibitDescription = document.getElementById("exhibit-description")
        exhibitDescription.innerText = exhibit.description
        const exhibitComments = exhibit.comments
        let ticketsPurchased = 0
        const ticketButton = document.getElementById("buy-tickets-button")
        const ticks = document.getElementById("tickets-bought")
        ticks.innerText = `${ticketsPurchased} Tickets Bought`
        ticketButton.addEventListener("click", function (e) {
            ticketsPurchased += 1
            ticks.innerText = `${ticketsPurchased} Tickets Bought`
        })
        exhibitComments.forEach(comment => {
            const createComment = document.createElement("p")
            const commentBox = document.getElementById("comments-section")
            createComment.innerText = comment
            commentBox.append(createComment)
        })
        commentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const newComment = document.querySelector("#comment-itself").value
            const createComment = document.createElement("p")
            const commentBox = document.getElementById("comments-section")
            createComment.innerText = newComment
            console.log(newComment)
            commentBox.append(createComment)
            }
        )
    }
)}

function getExhibits() {
    fetch(`http://localhost:3000/current-exhibits`)
    .then(resp => resp.json())
    .then(exhibitData =>
        renderExhibit(exhibitData))
}
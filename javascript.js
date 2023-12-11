const podcast = document.getElementById("podcastlink")
const safelink = document.getElementById("safelink")
const differntscam = document.getElementById("differntscam")
const index = document.getElementById("index-link")



podcast.addEventListener("click", function () {
    window.location = "podcast.html"
})

safelink.addEventListener("click", function () {
    window.location = "safescam.html"
})

differntscam.addEventListener("click", function () {
    window.location = "differntscam.html"
})

index.addEventListener("click", function () {
    window.location = "index.html"
})


const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")
})
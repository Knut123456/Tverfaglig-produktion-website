const podcast = document.getElementById("podcastlink")
const safelink = document.getElementById("safelink")
const differntscam = document.getElementById("differntscam")




podcast.addEventListener("click", function () {
    window.location = "podcast.html"
})

safelink.addEventListener("click", function () {
    window.location = "safescam.html"
})

differntscam.addEventListener("click", function () {
    window.location = "differntscam.html"
})



const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")
})
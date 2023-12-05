const podcast = document.getElementById("podcastLink")
const safelink = document.getElementById("safelink")
const differntscam = document.getElementById("differntscam")
const smeny =document.getElementById ("smeny")
const insbutton = document.getElementById ("insbutton")


let menyopen = false

insbutton.addEventListener ("click", function (){
    if (menyopen ==false) {
        smeny.style.display ="block"
        menyopen = true
    }
    else {
        smeny.style.display = "none"
        menyopen = false
    }
})



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
document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer")

    document.addEventListener("click", function(event){
        if (event.target !== footer){
            footer.style.display = "none"
        }
    })

    footer.addEventListener("click", function(event){
        event.stopPropagation()
    })

})
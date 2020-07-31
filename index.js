
let source = new MovieApi()

const container = document.querySelector("div.container")
const success = document.querySelector("div.success")
const searchInput = document.querySelector("input")
const inputReset = document.querySelector("input.resetbtn")

let allMovies = source.getAllMovies()

displayMovies()

searchInput.addEventListener("change", (e) => {

    allMovies = source.searchMovies(e.target.value)
    container.innerHTML = ''
    allMovies.forEach(element => {
        container.innerHTML += '<div class="flex-item">' +
                                    '<p>' +
                                        `${element.title}`+
                                    '</p>'+
                                    '<p>' +
                                        `${element.genre}`+
                                    '</p>'+
                                '<span>available</span>'+
                                '<button>rent</button>'+
                                '</div>'
    });
    console.log(allMovies)
})

inputReset.addEventListener("click", () => {
    if(searchInput.value === "") return
    else{
        searchInput.value =""
        container.innerHTML = ''
        allMovies = source.getAllMovies()
        allMovies.forEach(element => {
            container.innerHTML += '<div class="flex-item">' +
                                        '<p>' +
                                            `${element.title}`+
                                        '</p>'+
                                        '<p>' +
                                            `${element.genre}`+
                                        '</p>'+
                                    '<span>available</span>'+
                                    '<button>rent</button>'+
                                    '</div>'
        });
    }
   
})

const rentButtons = document.querySelectorAll("button")


rentButtons.forEach((rentButton => {
    rentButton.addEventListener("click", () => {

        let availabilityStatus = rentButton.parentNode.childNodes[1]
        console.log(availabilityStatus);
        rentButton.parentNode.style.display = "none"
        alert(`${rentButton.parentNode.childNodes[0].textContent} rented successfully`)
    })
}))

function displayMovies() {
    for (let index = 0; index < allMovies.length; index++) {
        container.innerHTML += '<div class="flex-item">' +
                                    '<p>' +
                                        `${allMovies[index].title}`+
                                    '</p>'+
                                    '<p>' +
                                        `${allMovies[index].genre}`+
                                    '</p>'+
                                '<span>available</span>'+
                                '<button>rent</button>'+
                                '</div>'
    
    }
}

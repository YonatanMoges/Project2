console.log("select-start")
const getDogBreed = async () => {
    const data = await fetch("https://api.thedogapi.com/v1/breeds?limit=200")
    const breeds = await data.json()
    dogBreedSelector(breeds)
    topShowcase(breeds)
    
}

const dogBreedSelector = (breeds) => {
    const select = document.querySelector(".select-breed")
    const breedOptions = breeds.map(breed => {
        const option = document.createElement("option")
        option.text = breed.name
        option.value = breed.id
        return option 
    })

    breedOptions.forEach(breedOption => {
        select.appendChild(breedOption)
    })
}

const topShowcase = (dogimages) => {
    
    const {image: imageurl1} = dogimages[getRandomInt(172)]
    const {image: imageurl2} = dogimages[getRandomInt(172)]
    const {image: imageurl3} = dogimages[getRandomInt(172)]

    Object.assign(document.querySelector(".showcase-image-holder1"), {
        src: imageurl1.url,
        height: 220, // pixels
        width: 260, // pixels
        
    })
    Object.assign(document.querySelector(".showcase-image-holder2"), {
        src: imageurl2.url,
        height: 220, // pixels
        width: 260, // pixels
        
    })
    Object.assign(document.querySelector(".showcase-image-holder3"), {
        src: imageurl3.url,
        height: 220, // pixels
        width: 260, // pixels
        
    })
    
}

const showcaseDog = (imageurl, name, lifespan, weight_metric, height_metric , bred_for) => {

    Object.assign(document.querySelector(".image-holder"), {
        src: imageurl,
        height: 220, // pixels
        width: 260, // pixels
        
    })

    document.querySelector(".name").innerHTML = "NAME: " + name
    document.querySelector(".lifespan").innerHTML = "LIFESPAN: " + lifespan
    document.querySelector(".weight").innerHTML = "WEIGHT: " + weight_metric + "(metric)"
    document.querySelector(".height").innerHTML = "HEIGHT:  " + height_metric + "(metric)" 
    document.querySelector(".origin").innerHTML = "BRED FOR: " + bred_for
 
}

const getDogByBreed = async (breed_name) => {
    
    const data   = await fetch('https://api.thedogapi.com/v1/breeds?limit=200')
        .then(data => data.json())
    
    for(let dog = 0; dog < data.length; dog++){
        if(data[dog].name === breed_name){
            const { image, height, weight, name, life_span, bred_for } = data[dog]
            const {url: imageurl} = image
            const { metric: height_metric} = height
            const { metric: weight_metric} = weight
            console.log(data)
            showcaseDog(imageurl, name, life_span, weight_metric, height_metric, bred_for)
            break
        }else
            continue
    }
}

const changeSelect = (sel) => {
    console.log(sel.options[sel.selectedIndex].text)
    getDogByBreed(sel.options[sel.selectedIndex].text)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// search functionality
const getSearchedDog = async (text_value) => {
    const data = await fetch("https://api.thedogapi.com/v1/breeds")
    const breeds = await data.json()
    for(breed=0; breed < breeds.length; breed++) {
        if(breeds[breed].name === text_value){
            document.querySelector(".no-result").innerHTML = ""
            Object.assign(document.querySelector(".search-image-holder"), {
                src: breeds[breed].image.url,
                height: 220, // pixels
                width: 260, // pixels
                
            })
        
            document.querySelector(".search-name").innerHTML =  breeds[breed].name
            return
        }
    }
    Object.assign(document.querySelector(".search-image-holder"), {
        src: " ",
        height: 0, // pixels
        width: 0, // pixels
        
    })
    document.querySelector(".search-name").innerHTML = " "
    document.querySelector(".no-result").innerHTML = "No Result... Please Try Again"

}
const myFunction = () => {
    
    console.log(document.getElementById("myInput").value)
    getSearchedDog(capitalizeFirstLetter(document.getElementById("myInput").value))
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

getDogBreed()

var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.code === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
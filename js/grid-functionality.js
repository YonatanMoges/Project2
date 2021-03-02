console.log("start")

const doggies = async () => {
    const data = await fetch("https://api.thedogapi.com/v1/breeds?limit=200")
    const dogData = await data.json()
    dogData.map(dog => {
        console.log("id: " + dog.id + "name: " + dog.name + "imageurl: " + dog.image.url)
    })
    console.log(dogData)
    //outputDogImage(dogData)
    //dogBreedGroupSelector(dogData)
    //dogLifespanSelector(dogData)
    //dogOriginSelector(dogData)
}
/* ORIGIN */

const changeSelectOrigin = (sel) => {
    console.log(sel.options[sel.selectedIndex].text)
    getDogByOrigin(sel.options[sel.selectedIndex].text)
}
const getDogByOrigin = async (passed_origin) => {

    const data  = await fetch('https://api.thedogapi.com/v1/breeds?limit=200')
        .then(data => data.json())
    const filtered = []
    //console.log(passed_origin)
    data.forEach(dog => {
        const {origin} = dog
        console.log(origin)
        if(origin===passed_origin){
            filtered.push(dog)
        }
    });

    console.log(filtered)
    outputDogImage(filtered, passed_origin)
}
/* ORIGIN */

/* LIFESPAN */

const changeSelectLifespan = (sel) => {
    console.log(sel.options[sel.selectedIndex].text)
    getDogByLifespan(sel.options[sel.selectedIndex].text)
}
const getDogByLifespan = async (lifespan) => {

    const data  = await fetch('https://api.thedogapi.com/v1/breeds?limit=172')
        .then(data => data.json())
    const filtered = []
    data.forEach(dog => {
        const {life_span} = dog
        //console.log(life_span)
        if(life_span===lifespan){
            filtered.push(dog)
        }
    });

    console.log(filtered)
    outputDogImage(filtered, lifespan)
}
/* LIFESPAN */

/* BREED GROUP */

const changeSelectBreedGroup = (sel) => {
    console.log(sel.options[sel.selectedIndex].text)
    getDogByBreedGroup(sel.options[sel.selectedIndex].text)
}
const getDogByBreedGroup = async (breedgroup) => {

    const data  = await fetch('https://api.thedogapi.com/v1/breeds?limit=200')
        .then(data => data.json())
    const filtered = []
    //console.log(breedgroup)
    data.forEach(dog => {
        const {breed_group} = dog
        if(breed_group===breedgroup){
            filtered.push(dog)
        }
    });

    console.log(filtered)
    outputDogImage(filtered, breedgroup)
}
/* BREED GROUP */

const outputDogImage = (dogimages, dogparameter) =>{
    const select = document.querySelector(".picture-add")
    select.innerHTML = ""
    const imageGrid = dogimages.map(dogImage => {
        
        const first_node = document.createElement("div")
        first_node.className = 'col-lg-4 col-md-6 col-sm-12 element-item ' + dogparameter
        
        
        const second_node = document.createElement("div")
        second_node.className = 'our-project'
        
        const third_node = document.createElement("div")
        third_node.className = 'img'

        const fourth_node = document.createElement("a")
        fourth_node.className = 'test-popup-link'

        const fifth_node = document.createElement("img")
        fifth_node.className = 'img-fluid'
        fifth_node.src = dogImage.image.url

        const sixth_node = document.createElement("div")
        sixth_node.className = 'title py-4'

        const seventh_node = document.createElement("h5")
        seventh_node.className = 'text-uppercase'
        seventh_node.append(document.createTextNode(dogImage.name))        

        const eigth_node = document.createElement("span")
        eigth_node.className = 'text-secondary'
        eigth_node.append(document.createTextNode(dogparameter))

        const ninth_node = document.createElement("button")
        ninth_node.className = 'btn button primary-button text-uppercase'
        ninth_node.innerHTML = "ORDER"
        

        sixth_node.appendChild(seventh_node)
        sixth_node.appendChild(eigth_node)

        fourth_node.appendChild(fifth_node)
        third_node.appendChild(fourth_node)
        second_node.appendChild(third_node)
        second_node.appendChild(sixth_node)
        second_node.appendChild(ninth_node)
        first_node.appendChild(second_node)
        
        return first_node
    })

    imageGrid.forEach(image => {
        select.appendChild(image)
    })
}





doggies()
//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


const imgInject = document.getElementById("setImage")
const titleInject = document.querySelector("h2")
const descriptionInject = document.querySelector("h3")
document.querySelector('button').addEventListener('click', getNASApicture)

function getNASApicture(){
    let userInputDate = document.querySelector('input').value
    const dateFormat = /\d{4}-\d{2}-\d{2}$/g.test(userInputDate)
    
    if(!dateFormat){
        console.log(null)
        return null
    }else {
        getAPIresponse(`https://api.nasa.gov/planetary/apod?api_key=KZUlGfcKcccqlNoabQkZQ1lTH3fKCvdcawRL4MoC&date=${userInputDate}`)
    }
}

async function getAPIresponse(file){
    let APIresponse = await fetch(file)
    if(!APIresponse.ok){
        throw new Error(console.log(APIresponse.status))
    }
    let APIresult = await APIresponse.json()
    console.log(APIresult)
    let gatheredURL = APIresult.url
    let gatheredHDurl = APIresult.hdurl
    let gatheredTitle = APIresult.title
    let gatheredExplanation = APIresult.explanation
    placeGatheredObject(gatheredExplanation, gatheredURL, gatheredTitle, gatheredHDurl)
}

async function placeGatheredObject(explanation, url, title, HDurl){
        if(!HDurl){
            imgInject.src = url
        }else{
            imgInject.src = HDurl
        }
        titleInject.innerHTML = `${title}`
        descriptionInject.innerHTML = `${explanation}`    
}
    


// API key
// KZUlGfcKcccqlNoabQkZQ1lTH3fKCvdcawRL4MoC
// Account ID: 6ca12a01-f673-47c9-a5a2-7cbc24dac370
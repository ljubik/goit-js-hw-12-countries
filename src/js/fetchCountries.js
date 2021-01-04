const countries = document.querySelector('.countries')

let baseUrl = `https://restcountries.eu/rest/v2/name/`

function createItem(temp, data, place){
  const item = temp(data)
  place.insertAdjacentHTML("afterbegin", item)
}

export default function fetchCountries(searchQuery){
  countries.innerHTML = ''
  let url = `${baseUrl}${searchQuery}`
  return fetch(url)
  .then(res=>{console.log(res)
    if(res.status > 200){
      error({
        title: "Країну не знайдено",
        text:
          "Країну не знайдено",
          delay: 2000
      })
    }else {
      return res.json()
    }
  })
  .then(countriesList=>{
    console.log(countriesList)
    if (countriesList.length > 10){
      error({
        title: "Попередження",
        text:
        "Знайдено забагато збігів. Введіть більш конкретний запит!",
        delay: 2000
      })
    }else if(countriesList.length >= 2 && countriesList.length <= 10){
      createItem(listTemplate, countriesList, countries)
    }
    else{
      createItem(template, countriesList, countries)
    }
  })
  .catch(error =>console.log(error))
}

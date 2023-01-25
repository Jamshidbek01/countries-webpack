const form = document.querySelector('.search')
form.search.addEventListener('input', () => {
    const input = form.search.value.toLowerCase()
    console.log(input);
    const cardItem = document.querySelectorAll('.cards__item')
    const cardTitle = document.querySelectorAll('.cards__title')
    cardTitle.forEach((title, i) => {
        if (title.textContent.toLowerCase().includes(input)) {
            cardItem[i].style = `display: block;`
        } else {
            cardItem[i].style = `display: none;`
        }
    })
})
import { createCountries } from "./uptadeUI";
import request from "./request";
const searchSelect = document.querySelectorAll(".search__select-list li")
const span = document.querySelector('.search__select span')
searchSelect.forEach((li) => {
    li.addEventListener('click', () => {
        span.textContent = li.textContent
        let filterApi
        if (li.textContent == 'All') {
            filterApi = 'https://restcountries.com/v3.1/all'
        } else {
            filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`
        }
        request(filterApi).then((data) => {
            createCountries(data)
        }).catch((err)=> {
            alert(err.message)
        })
    })
})
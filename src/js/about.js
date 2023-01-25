import '../css/main.css'
import './mode'
import request from './request'
import { createCountryInfo } from './uptadeUI'

const querySting = window.location.search
const urlParams = new URLSearchParams(querySting)
const country = urlParams.get('country').toLowerCase()
const countryApi = `https://restcountries.com/v3.1/${country}`
console.log(countryApi);
request(countryApi).then((data) => {
    createCountryInfo(data[0])
}).catch((err) => {
    alert(err.message)
})
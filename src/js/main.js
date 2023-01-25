import '../css/main.css'
import './filter'
import './mode'
import request from './request'
import { createCountries } from './uptadeUI'
const API = 'https://restcountries.com/v3.1/all'
request(API).then((data) => {
    createCountries(data)
}).catch((err) => {
    alert(err.message)
})
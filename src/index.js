import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries.js'

const input = document.getElementById("searchInput")

input.addEventListener('input', debounce((e)=>{
  fetchCountries(e.target.value)
  input.value = ''
  }, 700))

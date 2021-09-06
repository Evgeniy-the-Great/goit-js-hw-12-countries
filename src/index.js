import countryMarkup from './tamplates/country.hbs';
import { debounce } from 'lodash';

const inputRef = document.querySelector('.js_input');
const listRef = document.querySelector('.js_list');

inputRef.addEventListener('input', debounce(onInput, 500));


function onInput(e) {
  const userCountry = e.target.value;
  fetch('https://restcountries.eu/rest/v2/name')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      listRef.innerHTML = countryMarkup(data);
    });
}

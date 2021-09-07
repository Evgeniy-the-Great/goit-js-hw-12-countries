import countryMarkup from './tamplates/country.hbs';
import countriesMarkup from './tamplates/countries.hbs';
import { alert } from '@pnotify/core';
import { debounce } from 'lodash';

const inputRef = document.querySelector('.js_input');
const listRef = document.querySelector('.js_list');
const markup = document.querySelector('.js_markup');

inputRef.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const userCountry = e.target.value;
  console.log(userCountry);
  if (userCountry) {
    listRef.innerHTML = '';
    markup.innerHTML = '';
    
  }
  fetch(`https://restcountries.eu/rest/v2/name/${userCountry}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.length === 1) {
        return (markup.innerHTML = countryMarkup(data[0]));
      }

      if (data.length > 1 && data.length < 10) {
        return (listRef.innerHTML = countriesMarkup(data));
      }
      if (data.length > 10) {
        return alert({
          text: 'To many matches found. Please enter more specific query!',
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
}

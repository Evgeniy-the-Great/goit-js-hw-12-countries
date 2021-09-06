import countryMarkup from './tamplates/country.hbs'

const inputRef = document.querySelector('.js_input');
const listRef = document.querySelector('.js_list');

inputRef.addEventListener('input', _.debounce(onInput, 500));

function onInput(e) {
  const userCountry = e.currentTarget.value;
  fetch(`https://restcountries.eu/rest/v2/name/${userCountry}`).then(res => {
    console.log(res);
  });
}

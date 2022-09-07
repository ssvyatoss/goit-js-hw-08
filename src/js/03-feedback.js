import localstorageService from './localstorage.js';

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const userData = {};

const fillContactFormFields = () => {
    const contactFormDataFromLS = localstorageService.load('userData');
  
    for (const prop in contactFormDataFromLS) {
      if (contactFormDataFromLS.hasOwnProperty(prop)) {
        formEl.elements[prop].value = contactFormDataFromLS[prop];
      }
    }
  };

const onFormFieldChange = event => {
    const { target } = event;
  
    const fieldName = target.name;
    const fieldValue = target.value;
  
    userData[fieldName] = fieldValue;
  
    localstorageService.save('userData', userData);
  };
  
  const onContactFormSubmit = event => {
    event.preventDefault();
  
    localstorageService.remove('userData');
    formEl.reset();
    console.log(userData);
  };

formEl.addEventListener('input', throttle(onFormFieldChange, 500));
formEl.addEventListener('submit', onContactFormSubmit);

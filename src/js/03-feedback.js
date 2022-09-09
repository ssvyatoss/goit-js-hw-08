import localstorageService from './localstorage.js';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const userData = {};

const fillContactFormFields = () => {
    const contactFormDataFromLS = localstorageService.load('userData');
  
    if (!contactFormDataFromLS) {return};

    for (const prop in contactFormDataFromLS) {
      if (contactFormDataFromLS.hasOwnProperty(prop)) {
        formEl.elements[prop].value = contactFormDataFromLS[prop];
        userData[prop] = contactFormDataFromLS[prop];
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
    const obj = { email : formEl.elements.email.value, message : formEl.elements.message.value }
  
    localstorageService.remove('userData');
    formEl.reset();
    console.log(userData);
  };

fillContactFormFields();
formEl.addEventListener('input', throttle(onFormFieldChange, 500));
formEl.addEventListener('submit', onContactFormSubmit);



import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const throttledSaveFormState = throttle(saveFormState, 500);

emailInput.addEventListener('input', throttledSaveFormState);
messageInput.addEventListener('input', throttledSaveFormState);

const savedFormData = JSON.parse(localStorage.getItem(storageKey));

if (savedFormData) {
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  
  console.log('Form submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });
    emailInput.value = '';
  messageInput.value = '';
});



const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let storageForm = { email: '', message: '' };
const writeForm = localStorage.getItem(storageKey);
if (writeForm) {
  storageForm = JSON.parse(writeForm);
  form.email.value = storageForm.email;
  form.message.value = storageForm.message;
}
form.addEventListener('input', event => {
  storageForm[event.target.name] = event.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(storageForm));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!storageForm.email || !storageForm.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(storageForm);

  localStorage.removeItem(storageKey);
  storageForm = { email: '', message: '' };
  form.reset();
});
const classBtn = document.querySelector('button');
classBtn.classList.add('form-btn');
const classInput = document.querySelector('input');
classInput.classList.add('form-input');
const classTextarea = document.querySelector('textarea');
classTextarea.classList.add('form-textarea');
const classLabel = document.querySelectorAll('label');
classLabel.forEach(item => item.classList.add('form-label'));

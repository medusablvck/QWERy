'use script'

const buttonStart = document.querySelector('.footer__button-start');
const modal = document.getElementById('registration__modal');
const closeButton = document.querySelector('.modal__close-button');
const navigation = document.querySelector('.header__navigation')
const form = document.forms.form;
const userNameInput = form.elements.userName; 
const emailInput = form.elements.email;
const passwordInput = form.elements.password;
const phonedInput = form.elements.phone;
const errorName = document.querySelector('.error__name')
const errorEmail = document.querySelector('.error__email')
const errorPassword = document.querySelector('.error__password')
const errorPhone = document.querySelector('.error__phone')
const checkboxInput = form.elements.checkbox;
const buttonInput = form.elements.button;

//при нажатии на кнопку выходит форма регистрации 
buttonStart.addEventListener('click', () => {
    modal.style.display = 'block';
    setTimeout(()=> {
        modal.querySelector('.registration__form').classList.add('visible');
    }, 10);
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.querySelector('.registration__form').classList.remove('visible');
});

window.addEventListener('click', (evt) => {
    if(evt.target === modal) {
        modal.style.display = 'none';
        modal.querySelector('.registration__form').classList.remove('visible')
    }
});

// при нажатии на элементы в навигации шапки выходит сообщение о разработке данных блоков 
navigation.addEventListener('click', function(){
    alert (`Page under construction`)
})

// условия для формы регистрации 
form.addEventListener('submit', function(evt)  {
    evt.preventDefault();
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    errorPhone.textContent = '';

    let isValid = true;
    
    const userName = userNameInput.value;
    if(userName.trim() === '') {
        errorName.textContent = 'Error: Please enter your name!';
        isValid = false;
    }

    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    if(!emailPattern.test(email)) {
        errorEmail.textContent = 'Error: Enter Email!';
        isValid = false;
    }

    const password = passwordInput.value;
    if(password.trim() === '') {
        errorPassword.textContent = 'Error: enter password!';
        isValid = false;
    } else {
        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!passPattern.test(password)) {
            errorPassword.textContent = 'Error: Please enter a strong password!';
            isValid = true;
        }
    }

    const phone = phonedInput.value;
    if(phone.trim() === '') {
        errorPhone.textContent = 'Error: Please enter your phone number in the format +1 (555) 555-5555'
        isValid = false;
    }

    if(!checkboxInput.checked) {
        alert('Error: consent to the processing of personal data is required!');
        isValid = false;
    }

    if(isValid) {
        alert('You have registered successfully!');
        form.reset();
    } else (
        console.log('The form has not been validated.')
    )
})

checkboxInput.addEventListener('click', function() {
    if (checkboxInput.checked === true) {
        buttonInput.disabled = false;
    } else {
        buttonInput.disabled = true;
    } 
});


// document.getElementById('accept-cookies').addEventListener('click', function() {
//     // Логика для принятия куки
//     document.getElementById('cookie-banner').style.display = 'none';
// });

// document.getElementById('decline-cookies').addEventListener('click', function() {
//     // Логика для отказа от куки
//     document.getElementById('cookie-banner').style.display = 'none';
// });


document.getElementById('burger').addEventListener('click', function(){
    document.querySelector('header').classList.toggle('open')
})
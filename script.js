const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpop = document.querySelector('.btnlginpop-up');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpop.addEventListener('click', ()=> {
    wrapper.classList.add('active-login');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-login', 'active');
});

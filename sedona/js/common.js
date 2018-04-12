var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opend');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opend');
  }
});


// var form = document.querySelector('.formWithValidation')
// var validateBtn = form.querySelector('.validateBtn')
// var from = form.querySelector('.name1')
// var password = form.querySelector('.password')
// var passwordConfirmation = form.querySelector('.passwordConfirmation')
// var where = form.querySelector('.name2')
// var where1 = form.querySelector('.name3')
// var message = form.querySelector('.message')
// var fields = form.querySelectorAll('.field')
//
// var generateError = function (text) {
//   var error = document.createElement('div')
//
//   error.className='error'
//   error.style.color = 'red'
//   error.innerHTML = text
//   return error
// }
//
// var removeValidation = function () {
//   var errors = form.querySelectorAll(".error")
//
//   for (var i = 0; i < errors.length; i++) {
//     errors[i].remove()
//   }
// }
// var checkFieldsPresence = function () {
//   for (var i = 0; i < fields.length; i++) {
//     if (!fields[i].value) {
//       console.log('field is blank', fields[i])
//       var error = generateError ('Поле не заповнено')
//       form[i].parentElement.insertBefore(error, fields[i])
//     }
//   }
// }
//
// var checkPasswordMatch = function () {
//   if (passwordConfirmation.value !== password.value) {
//     var error = generateError ('Пароли не совпадают')
//     passwordConfirmation.parentElement.insertBefore(error, passwordConfirmation)
//   }
// }
//
// form.addEventListener('submit', function (event) {
//   event.preventDefault()
//
//   removeValidation()
//
//   checkFieldsPresence()
//
//   checkPasswordMatch()
//
// })

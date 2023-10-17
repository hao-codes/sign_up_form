const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const createAccount = document.querySelector(".button");
const email = document.getElementById("email");
const phoneNumber = document.getElementById('telephone');

// add event Listeners to check the inputs and if they match the pattern
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an valid email address!");
    } else {
        email.setCustomValidity("");
    }
});


phoneNumber.addEventListener("input", (event) => {
    if (phoneNumber.validity.typeMismatch) {
        phoneNumber.setCustomValidity("Please enter a valid telephone number");
    } else {
        phoneNumber.setCustomValidity("");
    }
});



password.addEventListener("input", (event) => {
    if (password.validity.typeMismatch) {
        password.setCustomValidity("The password does not fulfill the requirements, please try a new password")
    } else {
        password.setCustomValidity("");
    }

});


passwordConfirm.addEventListener("input", (event) => {
    if (passwordConfirm.value != password.value) {
        passwordConfirm.setCustomValidity("The passwords do not match, please make sure both passwords are the same")
    } else {
        passwordConfirm.setCustomValidity("");
    }
});

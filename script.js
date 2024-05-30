// Function to reset the form
function resetForm() {
    document.getElementById('registrationForm').reset();
    // Clear any existing error messages
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneNumberError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error messages
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneNumberError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Validate Full Name
    if (fullName.trim().length < 5) {
        document.getElementById('fullNameError').innerText = 'Full Name must be at least 5 characters long.';
        return false;
    }

    // Validate Email
    if (email.indexOf('@') === -1) {
        document.getElementById('emailError').innerText = 'Please enter a valid Email ID.';
        return false;
    }

    // Validate Phone Number
    if (phoneNumber.trim() === '123456789' || phoneNumber.trim().length !== 10 || isNaN(phoneNumber.trim())) {
        document.getElementById('phoneNumberError').innerText = 'Please enter a valid 10-digit Phone Number.';
        return false;
    }

    // Validate Password
    if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase() || password.trim().length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and not be "password" or your Full Name.';
        return false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Password and Confirm Password do not match.';
        return false;
    }

    // Form is valid, can proceed with submission or other actions
    alert('Form submitted successfully!');
    resetForm(); // Clear the form fields
    return true;
}

// Add event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', validateForm);



document.getElementById('userForm').addEventListener('submit', function (event) {
      // Validation for phone number
      var phoneInput = document.getElementById('phone');
      var phoneRegex = /^\d{11}$/;
     // Change the regular expression according to your phone number format
      if (!phoneRegex.test(phoneInput.value)) {
        alert('Please enter a valid phone number (11 digits).');
        event.preventDefault();
        return false;
      }

      // Validation for email
      var emailInput = document.getElementById('email');
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
      if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
      }

    });
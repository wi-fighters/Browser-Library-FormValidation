(() => {
    // Add an event listener that runs when we submit the form

    // 1. grab the event target
    const form = document.querySelector('form');

    // 2. Define the callback
    const validate = function(event) {
        // Don't navigate to the action
        event.preventDefault();

        const emailInput = document.querySelector('#email');

        if (validator.isEmail(emailInput.value)) {
            console.log('yay email is valid!');
            // TODO: display the success message in the DOM
        } else {
            console.error('booo fix the email!');
            // TODO: display the error message in the DOM
        }

    };

    // 3. attach a callback to the event target
    form.addEventListener('submit', validate, false);
})();
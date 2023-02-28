function submitForm() {
    // Get the form data
    const formData = new FormData(document.getElementById('contact-form'));

    // Convert the form data to a JSON object
    const data = Object.fromEntries(formData);

    // Log the JSON object to the console
    console.log(data);

    // You can use this data object to send to the server via ajax or fetch
    // for example: 
    // Send the data to the server
    fetch('/submit-form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Show a success message to the user
        })
        .catch(error => {
            console.error('Error:', error);
            // Show an error message to the user
        });
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Define the user object
    const user = { name, password, role };

    // Send a POST request to the server
    fetch('https://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Redirect to another page
        window.location.href = '../pages/register.html';
    })
    .catch((error) => {
        console.error('Error:', error);
        // Display an error message
        document.getElementById('errorMessage').textContent = "Une erreur est survenue lors de la création de l'utilisateur.";
    });
});

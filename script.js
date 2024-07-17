// Select the form and add an event listener for the submit event
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values of the inputs
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Check if inputs are not empty
  if (name && age) {
    // Create a promise that resolves or rejects based on the age
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve();
        } else {
          reject();
        }
      }, 4000); // Wait for 4 seconds before resolving or rejecting the promise
    })
    .then(() => {
      // If the promise is resolved, show the welcome alert
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      // If the promise is rejected, show the sorry alert
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
  } else {
    // If inputs are empty, show an alert
    alert('Please fill out both fields.');
  }
});
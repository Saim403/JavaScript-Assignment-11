
// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Parse the response as JSON
    .then(users => {
        // Process the JSON data
        const userList = document.getElementById('userList');

        // Iterate through each user
        users.forEach(user => {
            // Create a list item for each user
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
            
            // Append the list item to the unordered list
            userList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

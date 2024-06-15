// Array of user objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 20 },
    { name: 'Dave', age: 35 }
];

// Function to display the array when the button is clicked
function showArray() {
    document.getElementById('arrayResults').innerHTML = `
        <div class="result">
            <h3>Users Array:</h3>
            <pre>${JSON.stringify(users, null, 2)}</pre>
        </div>
    `;

    // Using map to get an array of user names
    const names = users.map(user => user.name);
    console.log('User names:', names);

    // Using filter to get users older than 20
    const adults = users.filter(user => user.age > 20);
    console.log('Users older than 20:', adults);

    // Using reduce to get the total age
    const totalAge = users.reduce((total, user) => total + user.age, 0);
    console.log('Total age of users:', totalAge);

    // Using forEach to log user names
    console.log('Logging user names:');
    users.forEach(user => console.log(user.name));

    // Display results on the webpage
    document.getElementById('results').innerHTML = `
        <div class="result">
            <h3>User names:</h3>
            <pre>${JSON.stringify(names, null, 2)}</pre>
        </div>
        <div class="result">
            <h3>Users older than 20:</h3>
            <pre>${JSON.stringify(adults, null, 2)}</pre>
        </div>
        <div class="result">
            <h3>Total age of users:</h3>
            <pre>${totalAge}</pre>
        </div>
    `;
}

// var varOcg = true; // Example variable

// function showArray() {
//   const array = [1, 2, 3, 4, 5];
//   const arrayResultsDiv = document.getElementById('arrayResults');
//   arrayResultsDiv.innerHTML = ''; // Clear previous results

//   array.forEach(item => {
//     const div = document.createElement('div');
//     div.className = 'array-item';
//     div.textContent = item;
//     arrayResultsDiv.appendChild(div);
//   });

//   // Example usage of ES6 features
//   const doubledArray = array.map(num => num * 2);
//   const resultsDiv = document.getElementById('results');
//   resultsDiv.innerHTML = `Doubled Array: ${doubledArray.join(', ')}`;
// }
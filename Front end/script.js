document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('c_name').value;
    let number = document.getElementById('c_number').value;

    fetch('/add_customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ c_name: name, c_number: number })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Customer added successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add customer.');
    });
});

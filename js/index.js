document.addEventListener("DOMContentLoaded", function() {
// Generate a random short code
function generateShortCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    let shortCode = '';
    for (let i = 0; i < length; i++) {
        shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortCode;
}

// Event listener for generating short URL
document.getElementById('generateShortUrlBtn').addEventListener('click', function() {
    const longUrl = document.getElementById('longUrlInput').value.trim();
    if (longUrl === '') {
        alert('Please enter a valid long URL.');
        return;
    }
    const shortCode = generateShortCode();
    document.getElementById('shortCodeInput').value = shortCode;
    // Here you can save the mapping of short code and long URL to a database or storage
});

// Event listener for retrieving long URL
document.getElementById('retrieveLongUrlBtn').addEventListener('click', function() {
    const shortCode = document.getElementById('shortCodeInput').value.trim();
    if (shortCode === '') {
        alert('Please enter a valid short code.');
        return;
    }
    // Here you can retrieve the long URL associated with the short code from the database or storage
    const longUrl = 'Long URL corresponding to the short code'; // Replace with your logic to retrieve the long URL
    document.getElementById('result').innerHTML = `<p>Long URL: <a href="${longUrl}" target="_blank">${longUrl}</a></p>`;
});





    // fetch("https://cleanuri.com/api/v1/shorten")
});
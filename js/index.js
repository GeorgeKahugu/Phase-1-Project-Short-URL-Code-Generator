document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("shortenUrlBtn")
    .addEventListener("click", function () {
      const longUrl = document.getElementById("longUrlInput").value.trim();
      if (longUrl === "") {
        alert("Please enter a valid long URL.");
        return;
      }

      // Make a POST request to CleanURI API to shorten the URL
      fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result_url) {
            document.getElementById(
              "result"
            ).innerHTML = `<p>Shortened URL: <a href="${data.result_url}" target="_blank">${data.result_url}</a></p>`;
          } else {
            alert("Failed to shorten URL. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert(
            "An error occurred while shortening the URL. Please try again later."
          );
        });
    });
});

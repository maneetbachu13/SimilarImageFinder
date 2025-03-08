document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");

    if (uploadForm) {
        uploadForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            let formData = new FormData(uploadForm);

            const response = await fetch("https://similarimagefinder.onrender.com", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            alert("Similarity Score: " + result.score);
        });
    }
});

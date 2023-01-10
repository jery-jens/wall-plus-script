document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pwnd-form");

    Webflow.push(function() {
        $("#pwnd-form").submit(function() {
            const input = document.querySelector("#pwnd-email");

            const msgTrue = document.querySelector(".true");
            const msgFalse = document.querySelector(".false");
            const msgLoading = document.querySelector(".pwnd-loading");

            // Show loading msg
            msgLoading.style.display = "block";
    
            fetch("https://wall-plus-api.vercel.app/api/get-pwnd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: input.value }),
            })
                .then((res) => res.json())
                .then((data) => {
                    const info = data.message;

                    // Hide loading msg
                    msgLoading.style.display = "none";

                    // Show status msg
                    if (info === "You have been pawned!") {
                        msgTrue.style.display = "block";
                        msgFalse.style.display = "none";
                    } else {
                        msgTrue.style.display = "none";
                        msgFalse.style.display = "block";
                    };
                });
        });
    });
});
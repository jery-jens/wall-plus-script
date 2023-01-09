document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pwnd-form");

    Webflow.push(function() {
        $("#pwnd-form").submit(function() {
            const input = document.querySelector("#pwnd-email");
            const msg = document.querySelector("#pwnd-msg");
    
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
                    msg.style.display = "flex";
                    msg.innerHTML  = info;
                })
                .catch((e) => {
                    msg.style.display = "flex";
                    msg.innerHTML  = "Something went wrong. Try again later.";
                });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#pwnd-form");
    console.log(form);

    Webflow.push(function() {
        $("#pwnd-form").submit(function() {
            const input = form.querySelector("#pwnd-email");
            const msg = form.querySelector("#pwnd-msg");

            console.log(input)
    
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
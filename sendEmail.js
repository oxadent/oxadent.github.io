document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("ZbAOhgQ2kwP_01q_g"); // Replace with your Public Key

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Hide previous messages
        document.getElementById("submitSuccessMessage").classList.add("d-none");
        document.getElementById("submitErrorMessage").classList.add("d-none");

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Send email using EmailJS
        emailjs.send("service_d1wu6py", "template_w01pgug", {
            name: name,
            email: email,
            phone: phone,
            message: message
        }).then(function (response) {
            console.log("Email sent successfully:", response);
            document.getElementById("submitSuccessMessage").classList.remove("d-none");
            document.getElementById("contactForm").reset();
        }).catch(function (error) {
            console.error("EmailJS Error:", error);
            document.getElementById("submitErrorMessage").classList.remove("d-none");
        });
    });
});

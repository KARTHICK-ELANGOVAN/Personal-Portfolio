// contact form
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "wN0C1qYRx_4E4Vpf1",
    });
})();

const msg = document.querySelector(".form-message");

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.querySelector(".loader").classList.add("Show");
        // these IDs from the previous steps
        emailjs.sendForm("service_mu9hy42", "template_77jk8dp", this).then(
            function(){
                document.getElementById("contact-form").reset();
                document.querySelector(".loader").classList.remove("Show");
                msg.innerHTML = "";
                msg.innerHTML += "<span class='success-msg'>Email Sent</span>";
                msg.classList.add("show");
                setTimeout(() => msg.classList.remove("show"), 3000);
            },
            function(error) {
                document.querySelector(".loader").classList.toggle("show");
                msg.classList.add("show");
                msg.innerHTML += "<span class='error-msg'>Email Not Sent</span>";
            }
           );
    });
}


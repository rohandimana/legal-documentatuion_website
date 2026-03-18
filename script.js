document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let service = document.getElementById("service").value;

    if(name === "" || mobile === "" || service === "") {
        alert("Please fill all fields ❌");
    } else {

        let message = `New Client Inquiry:%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Service: ${service}`;

        let whatsappURL = `https://wa.me/918872334229?text=${message}`;

        window.open(whatsappURL, "_blank");

        document.getElementById("contactForm").reset();
    }
});
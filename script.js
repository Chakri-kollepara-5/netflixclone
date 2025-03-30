let accordian = document.getElementsByClassName("FAQ__title");
let signbtnEl = document.getElementById("signbtn");
let signformEl = document.getElementById("signform");

signbtnEl.onclick = function() {
    if (signformEl.style.display === "none" || signformEl.style.display === "") {
        signformEl.style.display = "block"; // Show form
    } else {
        signformEl.style.display = "none"; // Hide form if clicked again
    }
};

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        if (this.childNodes[1].classList.contains("fa-plus")) {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        } else {
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


document.getElementById("nf-registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("nf-fullname").value.trim();
    let email = document.getElementById("nf-email").value.trim();
    let password = document.getElementById("nf-password").value.trim();

    let nameError = document.getElementById("nf-name-error");
    let emailError = document.getElementById("nf-email-error");
    let passwordError = document.getElementById("nf-password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Full Name is required.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});

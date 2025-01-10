
document.getElementById("myForm").onsubmit = function (event) {
    let valid = true;
    //Clear previous error messages

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";


    //Username validation
    const username = document.getElementById("Username").value;
    if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be atleast 3 characters long.";
        valid = false;
    }
    else if (username.length > 15) {
        document.getElementById("usernameError").innerText = "Username must not exceed 15 characters.";
        valid = false;
    }

    //Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regular expression for basic email validation
    console.log("Email entered:", email);
    if (!email) {
        document.getElementById("emailError").innerText = "Email is required.";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        valid = false;
    }

    //Message validation
    const textarea = document.getElementById("message").value.trim();
    const message = document.getElementById("message").value;
    if (message.length === 0) {
        document.getElementById("messageError").innerText = "Message cannot be empty";
        valid = false;
    }
    else if (message.length > 200) {
        document.getElementById("messageError").innerText = "Message must not exceed 200 characters";
        valid = false;

    }
    else {
        alert('Message submitted successfully')
    }
    // If the form is invalid, prevent submission
    if (!valid) {
        event.preventDefault(); //prevent form submission
    }
};

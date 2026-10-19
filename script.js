
const skincareForm = document.getElementById("skincare-form");
const formMessage = document.getElementById("form-message");

skincareForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the customer's information
    const fullName = document.getElementById("full-name").value.trim();
    const skinType = document.getElementById("skin-type").value;
    const budget = document.getElementById("budget").value;

    // Get the selected skin concerns
    const selectedConcerns = document.querySelectorAll(
        'input[name="concerns"]:checked'
    );

    // Validate the customer's name
    if (fullName === "") {
        formMessage.textContent = "Please enter your full name.";
        return;
    }

    // Require at least one skin concern
    if (selectedConcerns.length === 0) {
        formMessage.textContent =
            "Please select at least one skincare concern.";
        return;
    }

    // Display a personalized response
    formMessage.textContent =
        `Hi ${fullName}, for ${skinType} skin we will recommend something for you!`;

    // Prepare the consultation details for WhatsApp
    const concerns = Array.from(selectedConcerns)
        .map(function (checkbox) {
            return checkbox.value;
        })
        .join(", ");

    const message =
        `Hello GlowPure! My name is ${fullName}. ` +
        `My skin type is ${skinType}. ` +
        `My concerns are ${concerns}. ` +
        `My budget is ${budget}. ` +
        `Please recommend suitable skincare products for me.`;


});

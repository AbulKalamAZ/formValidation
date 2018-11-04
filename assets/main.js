//validation code
const inputs = document.querySelectorAll("input")

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/i,
    telephone: /^[\d]{11}$/
}

function validate(field, regExp) {
    if(!regExp.test(field.value)) {
        field.className = "invalid";

    } else {
        field.className = "valid";
    }
}

inputs.forEach((input) => {

    input.addEventListener("keyup", (e) => {
        let targetElement = e.target;
        let targetElementValue = e.target.attributes.name.value;

        validate(targetElement, patterns[targetElementValue]);
        
        
    })
})
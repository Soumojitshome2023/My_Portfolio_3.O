

// const scriptURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfR84HZWQY03MCTaXVWDVryh8f4eqGuzzd5tpcKLiERdJ0R8w/formResponse'
// const form = document.forms['submit-to-google-sheet']
// const success = document.getElementById('success');
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => console.log('Success!', response))


//         .catch(error => console.error('Error!', error.message))

// })

const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     document.getElementById("message").value = "";

// })

form.addEventListener('submit', e => {
    e.preventDefault(); 
    const formElement = e.target;
    
    // Set the action URL and method dynamically
    formElement.action = "https://formspree.io/f/xwkdzoza"; 
    formElement.method = "POST"; 
    formElement.submit();
    
    document.getElementById("message").value = "";
    // Submit the form or add additional code to handle the form submission if needed
});



function contactsubmitscr() {

    success.style.fontSize = "20px";
    success.style.color = "white";

    document.getElementById("submitbtn").style.display = 'none';

    success.innerHTML = "...Please Wait...";

    setTimeout(() => {
        // form.reset()
        document.getElementById("message").value = "";
        // success.innerHTML = "";
        success.innerHTML = "Data Submit Successfully";
    }, 3000);

    setTimeout(() => {
        success.innerHTML = `Thank you so much ${document.getElementById("name").value}`;
    }, 5000);

    setTimeout(() => {
        success.innerHTML = "";
        // location.reload();
        document.getElementById("submitbtn").style.display = "";
        document.getElementById("submitbtn").disabled = true;
    }, 20000);

}





// ===================================================================

// disable the submit button until all required fields have values



let inputs = document.getElementById("myForm").querySelectorAll("input[required], textarea[required]");

inputs.forEach(function (input) {
    input.addEventListener("input", function () {

        let allFieldsFilled = Array.from(inputs).every(function (input) {
            return input.value.trim() !== "";
        });


        document.getElementById("submitbtn").disabled = !allFieldsFilled;
    });
});



save("name");
save("email");
save("phone");
// save("message");


function save(idv) {

    if (localStorage.getItem(idv) != null) {
        let b = document.getElementById(idv);
        b.value = localStorage.getItem(idv);
    }

    // setInterval(() => {
    //     if (document.getElementById(idv).value != localStorage.getItem(idv)) {
    //         console.log("data update");
    //         let a = document.getElementById(idv).value;
    //         localStorage.setItem(idv, a);
    //     }
    // }, 1000);

    document.getElementById(idv).addEventListener("input", function () {
        let a = document.getElementById(idv).value;
        localStorage.setItem(idv, a);

    });
}
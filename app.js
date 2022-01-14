const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', validateForm);



function validateForm (e) {
    e.preventDefault();

    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailReg =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var errorText = document.querySelectorAll('.errorText');
    var errorText1 = document.querySelector('.one');
    var errorText2 = document.querySelector('.two');
    var errorText3 = document.querySelector('.three');
    var errorText4 = document.querySelector('.four');
    var errorImg1 = document.querySelector('.fname');
    var errorImg2 = document.querySelector('.lname');
    var errorImg3 = document.querySelector('.email');
    var errorImg4 = document.querySelector('.password');

    if(fName !== '' && lName !== '' && email !== '' && password !== '') {
        if(email.match(emailReg)) {
            if(fName.length < 3 || lName.length < 3 || password.length < 3) {
              errorText1.classList.add('active');
              errorText2.classList.add('active');
              errorText4.classList.add('active');
              errorImg1.classList.add('active');
              errorImg2.classList.add('active');
              errorImg4.classList.add('active');
            }
            else {
               console.log("hello");
               alert ('Your response have been recorded successfully');
            }
        }
        else {
            errorText3.classList.add('active');
            errorImg3.classList.add('active');
        }
    }
    else {
        alert('some fields are empty')
    }

   
}
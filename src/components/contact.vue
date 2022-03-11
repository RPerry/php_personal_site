<template>
        <div>
                <h3 id="contactHeader">Contact</h3>
                <section class="form" >
                        <form name="contactForm" id="contactForm">
                                <div id=section1>
                                        <label for="firstName">First Name (required): </label>
                                        <input id="firstName" type="text" name="firstName" required>
                                </div>  
                                <span id="fNameError"></span><br>
                                <span id="fRegError"></span>
                                <div id=section2>  
                                        <label for="lastName">Last Name (required): </label>
                                        <input id="lastName" type="text" name="lastName" required>
                                </div>
                                <span id="lNameError"></span><br>
                                <span id="lRegError"></span>
                                <div id="section3">
                                        <label for="email">Email (required): </label>
                                        <input id="email" type="text" name="email" required>
                                </div>
                                <span id="emailError"></span><br>
                                <span id="emailRegError"></span><br>
                                <button id="submit" type="button">Submit</button>
                                <section id="formSubmissionData">
                                </section>
                        </form>
                </section>  
        </div>
</template>

<script>
export default {
        mounted: function() {
                document.getElementById("submit").addEventListener("click", function() {

                const fNameError = document.getElementById("fNameError")
                const lNameError = document.getElementById("lNameError")
                const emailError = document.getElementById("emailError")
                const fRegError = document.getElementById("fRegError")
                const lRegError = document.getElementById("lRegError")
                const emailRegError = document.getElementById("emailRegError")
                let isfNameError = false
                let islNameError = false
                let isEmailError = false
                let isfRegError = false
                let islRegError = false
                let isEmailRegError = false 
                 let firstName = document.getElementById("firstName").value;
                        let lastName = document.getElementById("lastName").value;
                        let email = document.getElementById("email").value;

                         if (firstName.length < 2) {
                        fNameError.textContent = "First name must be at least two characters";
                        this.isfNameError = true;
                        } else {
                        fNameError.textContent = "";
                        isfNameError = false;
                        }

                // the next 5 if statements are to check for errors in the input. Checking for minimum name and email lengths,
                //  and regex for formatting
                if (lastName.length < 2) {
                        lNameError.textContent = "Last name must be at least two characters"
                        islNameError = true;
                } else {
                        lNameError.textContent = "";
                        isfNameError = false;
                }

                 if (email.length < 5) {
                        emailError.textContent = "Email must be at least four characters"
                        isEmailError = true;
                } else {
                        emailError.textContent = "";
                        isEmailError = false;
                }

                // checks that the input only includes letters, upper or lowercase
                const alphaRegex = /[A-Za-z]+/

                if (alphaRegex.test(firstName) != true) {
                        fRegError.textContent = "First name must contain letters"
                        isfRegError = true;
                } else {
                        console.log("in the else")
                        fRegError.textContent = "";
                        isfRegError = false;

                }

                if (alphaRegex.test(lastName) != true) {
                        lRegError.textContent = "Last name must contain letters"
                        islRegError = true;
                } else {
                        lRegError.textContent = "";
                        islRegError = false;
                }

                // checks that the input is in an email format
                const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (emailRegex.test(email) != true) {
                        emailRegError.textContent = "Email is in an invalid format"
                        isEmailRegError = true;
                } else {
                        emailRegError.textContent = "";
                        isEmailRegError = false;
                }
                
                // to check if there are any errors for the user to fix before saving input to local storage
                if (!isfNameError & !islNameError & !isEmailError & !isfRegError & !islRegError & !isEmailRegError) {
                        
                        // contact form data input saved in an object
                        let formObjectData = {
                                fName: firstName,
                                lName: lastName,
                                email: email
                        }

                        
                        localStorage.setItem('emailData', JSON.stringify(formObjectData));
                        let retrievedData = localStorage.getItem('emailData')
                        let dataObject = JSON.parse(retrievedData)

                        const displaySection = document.createElement("div");
                        displaySection.className = "displaySection";

                        document.getElementById("firstName").value = "";
                        document.getElementById("lastName").value = "";
                        document.getElementById("email").value = "";

                        console.log(retrievedData)
                        // retrieving saved form data from local storage
                        const sectionContents = 
                        `
                        <p class="bold">First Name: ${dataObject.fName}</p>
                        <p class="bold">Last Name: ${dataObject.lName}</p>
                        <p class="bold">Email: ${dataObject.email}</p>
                        `;

                        displaySection.innerHTML = sectionContents;
                        const display = document.getElementById("formSubmissionData");
                        display.appendChild(displaySection);
                }
                        
                });
        },

  name: "contactForm",
  data() {
    return {

    };
  },


  methods: {

        }  
  }

</script>




<style scoped>

  #contactHeader{
          padding-top: 4%;
  }

 .form {
        padding-top: 30px
 }

  span{
        color: red;
        font-weight: bold;
  }

  label{
        font-weight: bold;
  }

   #section2 {
         padding-top: 20px;
  }

  #section3 {
         padding-top: 20px;
         padding-bottom: 10px;
  }

  #emailError, #emailRegError {
          padding-bottom: 10px;
  }

  #formSubmissionData {
        padding-top: 50px;
  }

 #submit {
        cursor: pointer;
        font-weight: bold;
  padding: 15px 32px;
  background-color: lightblue;
  cursor: pointer;
  color: black;
  font-size: 100%;
  border: none;
}
</style>
// Contact
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message'),
checkBox = document.getElementById('consent-check');

const sendEmail = (e) => {
    e.preventDefault();

    if (!contactName.value || !contactEmail.value || !message.value || !checkBox.checked){
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message 
        contactMessage.textContent = 'Fill in all the input fields and check the checkbox.';
    } else {
        emailjs.sendForm('service_z00kpn4','template_aoseuld','#contact-form', 'sWQ8_Ai-2-BfwslmR')
        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent successfully!'

        //     //remove message after 5 seconds
        //     setTimeout(()=> {
        //         contactMessage.textContent='';
        //     }, 5000);
        // }, (error) => {
        //   alert('Something went wrong', error)
        });

        contactName.value ='';
        contactEmail.value='';
        message.value='';
        checkBox.checked = false;
    }
};

contactForm.addEventListener('submit', sendEmail)
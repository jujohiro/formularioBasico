const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', sendEmail)

const serviceId = 'service_kuic7cc'
const templateId = 'template_6gggw3q'
const apiKey = 'IpZxjHnQIPPG2uNCz'

function sendEmail(event) {
event.preventDefault()
emailjs.init(serviceId)

emailjs.sendForm(serviceId, templateId, contactForm, apiKey)
    .then(result => {
        Swal.fire("Su mensaje se ha enviado con éxito.!");
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "No ha sido posible enviar el mensaje!",
        })
    })
}

// Initialize EmailJS with your User ID
emailjs.init('bPrw7fZMI2rVz4_yA'); // Replace with your EmailJS User ID

document.addEventListener('DOMContentLoaded', function() {
  // Gather visitor data
  const visitorData = {
    ip: '', // Server-side logic required to obtain IP address
    userAgent: navigator.userAgent,
    device: navigator.platform
  };

  // Send data using EmailJS
  emailjs.send('service_rckkxdc', 'template_lj35oye', visitorData)
    .then(response => {
      console.log('Sent successfully:', response);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
});


window.onload = function () {
   document
      .getElementById('contact-form')
      .addEventListener('submit', function (e) {
         e.preventDefault();
      });
};
function sendMail(params) {
   var tempParams = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      from_subject: document.getElementById('subject').value,
      message: document.getElementById('msg').value,
   };

   emailjs.send('gmail', 'template_dnht9rg', tempParams).then(
      function () {
         alert('CONGRATS! Message Successfully send');
      },
      function (error) {
         alert('FAILED...', error);
      }
   );
}

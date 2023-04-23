const form = document.getElementById("email-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  fetch("send-email.php", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("Сообщение успешно отправлено!");
      form.reset();
    } else {
      alert("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.");
    }
  })
  .catch(error => {
    console.error(error);
    alert("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.");
  });
});
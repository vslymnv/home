<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $to = "suley.vusal16@mail.ru";
  $subject = $subject;
  $mainMessage = $message;
  $headers = "From: $name <$email>";

  if (mail($to, $subject, $mainMessage, $headers)) {
    http_response_code(200);
    echo json_encode(array("message" => "Сообщение успешно отправлено!"));
  } else {
    http_response_code(500);
    echo json_encode(array("message" => "Произошла ошибка при отправке сообщения."));
  }
} else {
  http_response_code(405);
  echo json_encode(array("message" => "Метод не разрешен."));
}
?>

<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message']

  $email_from = $_POST['email'];

  $email_subject = "Thank you for contacting Clarin";

  $email_body = "User Name $name.\n".
                'User Email:$visitor_email.\n'.
                'User Message: $message.\n';

  $mailTo ='clarinkyng@gmail.com';

  $headers='From: $email_from\r\n';

  $headers= 'Reply_To: $visitor_email \r\n';

  mail($mailTo,$email_subject,$email_body,$headers);

  header("Location:index.html");
?>

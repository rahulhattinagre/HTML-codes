<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['user_name'];
    $email   = $_POST['user_email'];
    $message = $_POST['user_message'];

    $to      = "rahulhattinagre@gmail.com"; 
    $subject = "New message from website";

    $body    = "Name: $name\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
}
?>

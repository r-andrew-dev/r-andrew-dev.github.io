<!-- <?php

if(isset($_POST['submit'])) {
   
    $recipient="rachael-andrew@rachael-andrew.dev";
    $subject="Contact from Portfolio";
   
    $sender = $_POST["sender"];
    $senderReason = $_POST["reason"];
    $message = $_POST["message"];

    $headers = "From: ".$sender;
    $mailBody="Sender: ".$sender.".\nReason: ".$senderReason.".\n\n".$message;

      mail($recipient, $subject, $mailBody, $headers);

      header( "<p> Thank you for reaching out! Your message has been sent. </p>")
      
} -->
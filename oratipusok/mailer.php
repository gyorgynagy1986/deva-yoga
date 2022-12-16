<?php
	  
    // Data from the HTML from inputs

      $name = strip_tags(trim($_POST["name"]));
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $phone = trim($_POST["phone"]);
      $message = trim($_POST["message"]);
      
    // Send the email to

    $recipient = "gyorgynagy1986@gmail.com";
    $deva ="devayogastudio@gmail.com";


    // Set the email subject.
    $subject = "New contact from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message\n\n";



	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => '6LcFxHwdAAAAAH22DxMAwiOtzagClLtJDqoSy4vn',
		'response' => $_POST["g-recaptcha-response"]
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
			'content' => http_build_query($data)
		)
	);

	$context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success=json_decode($verify);

    // Rechapcha validation

	if ($captcha_success->success==false) {
        header("Location: https://devayoga.hu/emailerror.php?success=-1#form");
        exit;
	} else if ($captcha_success->success==true) {

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    mail($deva, $subject, $email_content, $email_headers);

    
    // Redirect to the index.html page with success code
    header("Location: https://devayoga.hu/emailsent.php?success=1#form");
	}
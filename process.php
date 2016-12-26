 <?php
 
       $values = $_POST; 
 	$message='Message from Hooked On Sonics website: ';
	$message .= $values['text'].'    ------   ';
	$message .= 'Phone: ';
	$message .= $values['phone'].'    ------   ';
	$message .= 'Event Date: ';
	$message .= $values['eventDate'].'    ------   ';
	$message .= 'Event Location: ';
	$message .= $values['eventLocation'].'    ------   ';
	$message .= 'Event Type: ';
	$message .= $values['eventType'].'    ------   ';

    
    $success=mail('hooked_on_sonics_band@yahoo.com', 'Hooked On Sonics inquiry', $message, "From: \"{$values['name']}\" <{$values['email']}>"); 
     exit;  
 ?> 
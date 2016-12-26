 <?php
 
       $values = $_POST; 
 	$message='Get Me on your mailing list immediately!: ';

    
    $success=mail('nsanzeri@gmail.com', 'Hooked On Sonics mailing list', $message, "From: \"{$values['name']}\" <{$values['email']}>"); 
     exit;  
 ?> 

<? 
// ----------------------------конфигурация-------------------------- // 
 
$to = 'kimchibalo@gmail.com';  // e-mail админа 
$subject = 'Тайтл';
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$phone=$_POST['phone'];

$email=$_POST['email'];

$msg=$_POST['message'];
 
$message = 'Имя: ' . $name . '     Телефон: ' . $phone . '     Почта: ' . $email . '     Сообщение: ' . $msg ;


 // Отправляем письмо админу  
 
mail($to, $subject, $message);

// Выводим сообщение пользователю 
 
?>
﻿<? 
// ----------------------------конфигурация-------------------------- // 
 
$to = 'frokstv@gmail.com';  // e-mail админа 
$subject = 'Тайтл';
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$msg=$_POST['telephone'];

$soobshenie=$_POST['message'];
 
$message = 'Имя: ' . $name . '     Телефон: ' . $msg . '     Сообщение: ' . $soobshenie;


 // Отправляем письмо админу  
 
mail($to, $subject, $message);

// Выводим сообщение пользователю 
 
?>
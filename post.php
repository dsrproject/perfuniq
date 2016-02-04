<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="israel@perfuniq.com";  // e-mail админа 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="/my-own";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 

$gender=$_POST['gender']; 
$desire=$_POST['desire']; 
$myself=$_POST['myself']; 
$addons=$_POST['addons']; 
$cap=$_POST['cap'];
$bottle=$_POST['bottle'];
$firstline=$_POST['firstline'];
$secondline=$_POST['secondline'];
$contacts=$_POST['contacts'];
$adresat=$_POST['adresat'];

  
// Проверяем валидность e-mail 
 
/*if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($youremail))) 
 
 { 
 
  echo 
"<center>Вернитесь <a 
href='javascript:history.back(1)'><B>назад</B></a>. Вы 
указали неверные данные!"; 
 
  } 
 
 else 
 
 { */
 

$msg=" 
gender: $gender
desire: $desire 
myself: $myself
addons: "; 
$koladds = count($addons);
for ($i=0; $i<$koladds; $i++) {
	$msg = $msg . $addons[$i] . ' , ';
}
$msg = $msg . "
cap: $cap
bottle: $bottle
firstline: $firstline
secondline: $secondline
contacts: $contacts
adresat: $adresat ";


// Отправляем письмо админу  
mail("$adminemail", "$date $time Message from site Parfuniq
$name", "$msg");  
 
  
/*$msg */ 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 3000); 
//--></script> 
 

<p style='font-size: 24px; text-align:center;'>Your message was sent!</p>";  
exit; 
 
?>
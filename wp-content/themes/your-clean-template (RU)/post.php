<? 
// ----------------------------������������-------------------------- // 
 
$adminemail="israel@perfuniq.com";  // e-mail ������ 
$date=date("d.m.y"); // �����.�����.��� 
$time=date("H:i"); // ����:������:������� 
$backurl='/cart';
 
//---------------------------------------------------------------------- // 
 
  
 
// ��������� ������ � ����� 

$gender=$_POST['gender']; 
$desire=$_POST['desire']; 
$myself=$_POST['myself']; 
$addons=$_POST['addons']; 
$cap=$_POST['cap'];
$bottle=$_POST['bottle'];
$firstline=$_POST['firstline'];
$secondline=$_POST['secondline'];
$adresat=$_POST['adresat'];
$phone=$_POST['phone'];
$address=$_POST['address'];
$emailskype=$_POST['emailskype'];
$social=$_POST['social'];
$website=$_POST['website'];
$contacts=$_POST['contacts'];
// ��������� ���������� e-mail 
 
/*if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($youremail))) 
 
 { 
 
  echo 
"<center>��������� <a 
href='javascript:history.back(1)'><B>�����</B></a>. �� 
������� �������� ������!"; 
 
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
phone: $phone
address: $address
emailskype: $emailskype
social: $social
website: $website
adresat: $adresat "; 

// ���������� ������ ������  
mail("$adminemail", "$date $time Message from site Parfuniq
$name", "$msg");  
/*$msg */ 
// ������� ��������� ������������ 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 2000); 
//--></script> 
<p style='font-size: 24px; text-align:center;'>Sending your data!</p>";  
exit; 
?>
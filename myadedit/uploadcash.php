<html lang="en">
<body>
    
<?php
include_once("connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $jumpo = isset($_POST['jumpo'])?$_POST['jumpo']:-1;
    $location = isset($_POST['location'])?$_POST['location']:-1;
    $filename = $_FILES["inputfile"]["name"];
    $tempname = $_FILES["inputfile"]["tmp_name"];
    $folder = "../images/" . $filename;
    $phonenum = isset($_POST['phonenum'])?$_POST['phonenum']:-1;
    $title1 = isset($_POST['title1'])?$_POST['title1']:-1;
    $title2 = isset($_POST['title2'])?$_POST['title2']:-1;
    $title3 = isset($_POST['title3'])?$_POST['title3']:-1;
    $title4 = isset($_POST['title4'])?$_POST['title4']:-1;
    $title5 = isset($_POST['title5'])?$_POST['title5']:-1;
    $title6 = isset($_POST['title6'])?$_POST['title6']:-1;
    $title7 = isset($_POST['title7'])?$_POST['title7']:-1;
    $title8 = isset($_POST['title8'])?$_POST['title8']:-1;
    $title9 = isset($_POST['title9'])?$_POST['title9']:-1;
    $title10 = isset($_POST['title10'])?$_POST['title10']:-1;
    $title11 = isset($_POST['title11'])?$_POST['title11']:-1;
    $title12 = isset($_POST['title12'])?$_POST['title12']:-1;
    $title13 = isset($_POST['title13'])?$_POST['title13']:-1;
    $title14 = isset($_POST['title14'])?$_POST['title14']:-1;
    $opentime = isset($_POST['opentime'])?$_POST['opentime']:-1;
    $closetime= isset($_POST['closetime'])?$_POST['closetime']:-1;
    $eathere = isset($_POST['eathere'])?$_POST['eathere']:-1;
    $takeout = isset($_POST['takeout'])?$_POST['takeout']:-1;
    $delivery = isset($_POST['delivery'])?$_POST['delivery']:-1;
    $else1 = isset($_POST['else1'])?$_POST['else1']:-1;
    $cash = isset($_POST['cash'])?$_POST['cash']:-1;
    $card = isset($_POST['card'])?$_POST['card']:-1;
    $poucher = isset($_POST['poucher'])?$_POST['poucher']:-1;
    $localmoney = isset($_POST['localmoney'])?$_POST['localmoney']:-1;
    $notes = isset($_POST['notes'])?$_POST['notes']:-1;
    $category1 = isset($_POST['category1'])?$_POST['category1']:-1;
    $category2 = isset($_POST['category2'])?$_POST['category2']:-1;
    $category3 = isset($_POST['category3'])?$_POST['category3']:-1;
    $category4 = isset($_POST['category4'])?$_POST['category4']:-1;
    $option1 = isset($_POST['option1'])?$_POST['option1']:-1;
    $option2 = isset($_POST['option2'])?$_POST['option2']:-1;
    $option3 = isset($_POST['option3'])?$_POST['option3']:-1;
    $option4 = isset($_POST['option4'])?$_POST['option4']:-1;
    $option5 = isset($_POST['option5'])?$_POST['option5']:-1;
    $cost = isset($_POST['cost'])?$_POST['cost']:-1;

    // Display the submitted data

    $sql = "INSERT INTO likeliontable2 (jumpo,location,inputimage,phonenum,title1,
    title2,title3,title4,title5,title6,title7,title8,title9,title10,title11,
    title12,title13,title14,opentime,closetime,eathere,takeout,delivery,else1,
    cash,card,poucher,localmoney,notes,category1,category2,category3,
    category4,option1,option2,option3,option4,option5) VALUES('$jumpo','$location',
    '$filename','$phonenum','$title1','$title2','$title3','$title4','$title5',
    '$title6','$title7','$title8','$title9','$title10','$title11','$title12',
    '$title13','$title14','$opentime','$closetime','$eathere','$takeout','$delivery',
    '$else1','$cash','$card','$poucher','$localmoney','$notes','$category1',
    '$category2','$category3','$category4','$option1','$option2','$option3',
    '$option4','$option5')";

    if($conn -> query($sql))echo "<script>alert('등록 성공');</script>";
    else echo "<script>alert('등록 실패');</script>";

}
?>
</body>
</html>
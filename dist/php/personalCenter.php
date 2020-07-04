<?php

header("Content-Type:text/html;charset=utf-8");

// 表单
$arr = $_REQUEST["arr"];
$yx = $_REQUEST["yx"];//页序 1
$ys = $_REQUEST["ys"];//页数 10

// 添加数据
$user = $_REQUEST["go"];
$pass = $_REQUEST["out"];
$sex = $_REQUEST["temi"];

// 搜索关键字
$formControl = $_REQUEST["formControl"];

// 编辑
$id = $_REQUEST["id"];

// 删除
$mt = $_REQUEST["mt"];


$unm = ($yx-1)*$ys;

$link = mysqli_connect("localhost","root","root","vip");
if(!$link){
    die("连接失败，".mysqli_connect_error());
}

//添加数据
if($arr === "add"){ //添加数据
    // 添加数据
    $sql4 = "insert into study (go,out) value ('$user','$pass')";
    $mysql_aee = mysqli_query($link,$sql4);
    if($mysql_aee){
        echo '{"err":1,"data":"购买成功"}';
    }else{
        echo '{"err":0,"data":"购买失败"}';
    }
}else if($arr == "ass"){ // 查询数据
    $sql5 = "select * from study order by age";
    $mysql_ass = mysqli_query($link,$sql5);
    $mysql_ass1 = mysqli_fetch_all($mysql_ass);
    $result = json_encode($mysql_ass1);// 获取查询到的数据
    if($result == []){
        echo '{"err":2,"data":"没有搜索到数据"}';
    }else{
        echo "{\"daa\":$result}";//返回数据
    }
}/* else if($arr == "teb"){//删除数据
    $sql6 = "delete from vips where id='$mt'";
    $mysql_teb = mysqli_query($link,$sql6);
    // echo $mysql_teb;
    if($mysql_teb){
        echo '{"err":1,"data":"删除成功"}';
    }else{
        echo '{"err":0,"data":"删除失败"}';
    }
}else if($arr == "edit"){// 修改数据
    $sql7 = "update vips set vipName='$user',vipPass='$pass',sex='$sex' where id='$id'";
    // die($sql7);
    $mysql_edit = mysqli_query($link,$sql7);
    // die($mysql_edit);
    if($mysql_edit){
        echo '{"err":1,"data":"修改成功"}';
    }else{
        echo '{"err":0,"data":"修改失败"}';
    }
} */

// 关闭数据库
mysqli_close($link);

?>
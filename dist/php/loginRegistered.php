<?php

header('Content-Type:text/html;charset=utf-8');

$btnn = $_REQUEST["btnn"];
$user = $_REQUEST["user"];
$pass = $_REQUEST["pass"];

// 连接数据库

if($btnn && $user && $pass){
    $link = mysqli_connect("localhost","root","root","vip");

    if(!$link){
        die("连接失败:".mysqli_connect_error());
    }
    mysqli_set_charset($link,'utf8');//设置编码

    if($btnn == "login"){
        $login_sql = "select * from vips where vipName='$user' and vipPass='$pass'";
        $login_res = mysqli_query($link,$login_sql);//执行sql语句
        $mfaa_sql = mysqli_fetch_all($login_res);//解析数据
        if(count($mfaa_sql)>0){
            echo '{"err":"-1","msg":"登录成功"}';
        }else{
            echo '{"err":"-2","msg":"登录失败，账户或密码错误！"}';
        }
    }else if($btnn == "add"){
        $add_sql = "select * from vips where vipName='$user'"; 
        $add_res = mysqli_query($link,$add_sql);//执行sql语句
        $mfa_sql = mysqli_fetch_all($add_res);//解析数据(查询需要解析)
        if(count($mfa_sql)>0){
            die('{"err":"0","msg":"用户名已存在"}');
        }else{
            $arr_sql = "insert into vips (vipName,vipPass) value ('$user','$pass')";
            $arr_ret = mysqli_query($link,$arr_sql);//执行sql语句
            // echo $arr_ret; //1
            // $mfas_sql = mysqli_fetch_all($arr_ret);//解析数据（添加不需要解析）
            if($arr_ret){
                echo '{"err":"1","msg":"注册成功"}';
            }else{
                echo '{"err":"2","msg":"注册失败"}';
            }
        }
    }else {
        die('{"err":-9,"msg":"参数错误"}');
    }
    mysqli_close($link);
}else{
    echo '{"err":-9,"msg":"参数错误"}';
}


?>
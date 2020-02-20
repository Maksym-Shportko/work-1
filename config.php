<?php
session_start();
define("HOST", "ss378577.mysql.tools");
define("USER", "ss378577_db");
define("PASSWORD", "xKhy9fcu");
define("DBNAME", "ss378577_db");
define("CHARSET", "utf8");

$pbd = "mysql:host=".HOST.";dbname=".DBNAME.";charset=".CHARSET;
    try {
        $dbConn=new PDO($pbd,USER,PASSWORD);
    }
    catch (PDOException $q){
        die("Error".$q->getMessage());
    }
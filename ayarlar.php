<?php
session_start();

$steam_api_key  = "FE6936B81934062F8F056875309EDE8A"; // Steam Dev. API key yazınız

// Veritabani ile ilgili bilgiler
$db_addr = "fi1.node.sneakyhub.com:3306"; // mysql server adresi
$db_user = "u536_6KgRkjb6PP"; // mysql kullanici adi
$db_pass = "b4YzgVfE2c62G6ed@9tc4=mh"; // mysql parolasi
$db_name = "s536_hacker"; // mysql veritabani adi
$admin_pass = "102030"; // panele giriş şifresi

// FiveM server ile ilgili bilgiler
$use_whitelist = false; // Whitelist icin LauncherStatuses tablosunu kullanacaksaniz burayi true yapin
$fivem_server  = "92.42.46.174:30120"; // fivem server url örn; cfx.re/join/o6yo6y
$discord       = "https://discord.gg/e9URnEe"; // discord sunucu adresiniz (bos birakilirsa launcherda discord butonu gizlenir)
$teamspeak3    = ""; // teamspeak3 sunucu adresiniz (bos birakilirsa launcherda teamspeak butonu gizlenir)

// Launcher icerisindeki updater ile ilgili bilgiler
$exe_version = "2020.10.3.151"; // launcher sag tiklayip ozelliklerde yazan surum numarasi exe ile bu tutmadiginda update_file indirilip kurulur
$update_file = "https://github.com/Hackerinos/Website/update.zip"; // surum numarasi tutmadiginda indirilecek dosyanin adresi

// IP tespiti
$ip = '92.42.46.174';
if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])){
	$ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
} else {
	$ip = $_SERVER['REMOTE_ADDR'];
}
?>

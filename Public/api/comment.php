<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$commentArr = Comment::fetchAll();

// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;

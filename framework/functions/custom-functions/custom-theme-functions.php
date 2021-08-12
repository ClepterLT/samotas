<?php

function get_day_month($date) {
    $parsedDate = [];

    $dateValue = strtotime($date);

    $parsedDate['day'] = date("d", $dateValue);
    $parsedDate['month'] = date("M", $dateValue);

    return $parsedDate;
}

function console_log($data) {
  $output = $data;
  if ( is_array( $output ) )
    $output = implode( ',', $output);

  echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}

function alert($data) {
  $output = $data;
  if ( is_array( $output ) )
    $output = implode( ',', $output);

  echo "<script>alert( 'Debug Objects: " . $output . "' );</script>";
}

function get_from_to_time($from, $to)
{
    $timestamp_from = strtotime($from);
    $timestamp_to = strtotime($to);
    if (date("d m", $timestamp_from) === date("d m", $timestamp_to)) {
        return date("l, F d, Y h:i A", $timestamp_from) . " to " . date("h:i A", $timestamp_to) . " Pacific Time";
    } else {
        return date("l, F d, Y h:i A", $timestamp_from) . " to " . date("l, F d, Y h:i A", $timestamp_to) . " Pacific Time";
    }
}

function slugify_text($text) {
    return strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $text));
}

function send_email() {  
  $name = $email = $phone = $text = "";

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  $name = test_input($_POST["fname"]);
  $email = test_input($_POST["email"]);
  $phone = test_input($_POST["tel"]);
  $text = test_input($_POST["textbox"]);
  $link = $_POST["link"];

  // Generating e-mail parts
  $to = 'petras.petkevicius@horiondigital.com';
  $subject = 'Gavote žinutę nuo ' . $name;
  $body = $text.'<br>'.$phone;
  $headers = array('Content-Type: text/html; charset=UTF-8', 'From: '.$name.' <' . $email . '>', 'Reply-To: '.$name.' <' . $email . '>');

  $response = wp_mail( $to, $subject, $body, $headers );

  $redirect_link = $link . "?formreturn=false";
  if ($response) {
    $redirect_link = $link . "?formreturn=true";    
  }
  wp_redirect($redirect_link);
  exit;
}

if ( isset( $_POST['fname'] ) ) {
  send_email();
}
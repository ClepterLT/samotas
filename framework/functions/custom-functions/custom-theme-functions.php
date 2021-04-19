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

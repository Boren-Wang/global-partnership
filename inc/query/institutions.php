<?php
  include("../config/DataTables.php");

  // Alias Editor classes so they are easy to use
  use
  DataTables\Editor,
  DataTables\Editor\Field,
  DataTables\Editor\Format,
  DataTables\Editor\Join,
  DataTables\Editor\Upload,
  DataTables\Editor\Validate;

  Editor::inst( $db, 'institutions', 'id' )
  ->fields(
      Field::inst( 'name' )
          ->validator('Validate::notEmpty'),
      Field::inst( 'other_name' ),
      Field::inst( 'since' )
          ->validator('Validate::numeric'),
      Field::inst( 'hei' ),
      Field::inst( 'country' )
          ->validator('Validate::notEmpty'),
      Field::inst( 'city' )
          ->validator('Validate::notEmpty'),
      Field::inst( 'latitude' )
          ->validator('Validate::notEmpty')
          ->validator('Validate::numeric'),
      Field::inst( 'longitude' )
          ->validator('Validate::notEmpty')
          ->validator('Validate::numeric'),
      Field::inst( 'hide' ),
      Field::inst( 'reason' )
    )
  ->process( $_POST )
  ->json();
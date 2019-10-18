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

  $editor = Editor::inst( $db, 'programs' )
  ->fields(
    Field::inst( 'programs.institutionID' )
      ->options( 'institutions', 'id', 'name' )
      ->validator('Validate::notEmpty'),
    Field::inst( 'institutions.name' ),
    Field::inst( 'institutions.other_name' ),
    Field::inst( 'programs.term' )
    	->validator('Validate::notEmpty'),
    Field::inst( 'programs.type' )
      ->validator('Validate::notEmpty'),
    Field::inst( 'programs.language' )
  )
  ->leftJoin( 'institutions', 'institutions.id', '=', 'programs.institutionID' )
  ->process( $_POST )
  ->json();
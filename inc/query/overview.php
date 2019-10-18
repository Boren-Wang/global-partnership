<?php

include("../config/DataTables.php");

use
    DataTables\Editor,
    DataTables\Editor\Field;

Editor::inst($db, 'institutions')
    ->fields(
        Field::inst('name'),
        Field::inst('other_name'),
        Field::inst('country'),
        Field::inst('city'),
        Field::inst('since'),
        Field::inst('hide')
    )
    ->process($_POST)
    ->json();
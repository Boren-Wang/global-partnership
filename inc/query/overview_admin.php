<?php
/**
 * Created by PhpStorm.
 * User: jeong
 * Date: 4/9/2018
 * Time: 12:54 PM
 */

include("../config/DataTables.php");

use
    DataTables\Editor,
    DataTables\Editor\Field,
    DataTables\Editor\Format,
    DataTables\Editor\Join,
    DataTables\Editor\Upload,
    DataTables\Editor\Validate;

Editor::inst($db, 'agreements')
    ->field(
        Field::inst( 'institutions.name' ),
        Field::inst( 'institutions.other_name' ),
        Field::inst( 'institutions.country' ),
        Field::inst( 'institutions.city' ),
        Field::inst( 'agreements.type' ),
        Field::inst( 'agreements.start_date' ),
        Field::inst( 'agreements.end_date' ),
        Field::inst( 'agreements.status' ),
        // Field::inst( 'agreements.code' ),
        Field::inst( 'agreements.remark' ),
        Field::inst( 'institutions.hide' ),
        Field::inst('agreements.file_1_id')
            ->setFormatter(Format::ifEmpty(null))
            ->upload(
                Upload::inst($_SERVER['DOCUMENT_ROOT'].'/uploads/__ID__.__EXTN__')
                    ->db('files_1', 'id', array(
                        'name' => Upload::DB_FILE_NAME,
                        'size' => Upload::DB_FILE_SIZE,
                        'web_path' => Upload::DB_WEB_PATH
                    ))
            ),
        Field::inst('agreements.file_2_id')
            ->setFormatter(Format::ifEmpty(null))
            ->upload(
                Upload::inst($_SERVER['DOCUMENT_ROOT'].'/uploads/__ID__.__EXTN__')
                    ->db('files_2', 'id', array(
                            'name' => Upload::DB_FILE_NAME,
                            'size' => Upload::DB_FILE_SIZE,
                            'web_path' => Upload::DB_WEB_PATH
                        )
                    )
            ),
        Field::inst('agreements.file_3_id')
            ->setFormatter(Format::ifEmpty(null))
            ->upload(
                Upload::inst($_SERVER['DOCUMENT_ROOT'].'/uploads/__ID__.__EXTN__')
                    ->db('files_3', 'id', array(
                            'name' => Upload::DB_FILE_NAME,
                            'size' => Upload::DB_FILE_SIZE,
                            'web_path' => Upload::DB_WEB_PATH
                        )
                    )
            ),
        Field::inst('files_1.id'),
        Field::inst('files_1.name'),
        Field::inst('files_1.web_path'),
        Field::inst('files_2.id'),
        Field::inst('files_2.name'),
        Field::inst('files_2.web_path'),
        Field::inst('files_3.id'),
        Field::inst('files_3.name'),
        Field::inst('files_3.web_path')
    )
    ->leftJoin( 'institutions', 'institutions.id', '=', 'agreements.ins_id' )
    ->leftJoin('files_1', 'files_1.id', '=', 'agreements.file_1_id')
    ->leftJoin('files_2', 'files_2.id', '=', 'agreements.file_2_id')
    ->leftJoin('files_3', 'files_3.id', '=', 'agreements.file_3_id')
    ->process($_POST)
    ->json();
<?php
include("../config/DataTables.php");

// Alias Editor classes so they are easy to use
use
    DataTables\Editor,
    DataTables\Editor\Field,
    DataTables\Editor\Format,
    DataTables\Editor\Join,
    DataTables\Editor\Upload,
    DataTables\Editor\Validate,
    DataTables\Editor\ValidateOptions;

Editor::inst($db, 'agreements')
    ->fields(
        Field::inst('agreements.ins_id')
            ->options('institutions', 'id', 'name')
            ->validator('Validate::notEmpty'),
        Field::inst('institutions.name'),
        Field::inst('institutions.other_name'),
        Field::inst('agreements.type')
            ->validator('Validate::notEmpty'),
        Field::inst('agreements.status'),
        Field::inst('agreements.auto_renew'),
        Field::inst('agreements.start_date'),
        Field::inst('agreements.end_date'),
        Field::inst('agreements.sbu'),
        Field::inst('agreements.sbu_department'),
        Field::inst('agreements.partner'),
        Field::inst('agreements.partner_department'),
        Field::inst('agreements.code'),
        Field::inst('agreements.remark'),
        Field::inst('agreements.updated_at'),
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
        Field::inst('files_3.web_path'),
        
    )
    ->leftJoin('institutions', 'institutions.id', '=', 'agreements.ins_id')
    ->leftJoin('files_1', 'files_1.id', '=', 'agreements.file_1_id')
    ->leftJoin('files_2', 'files_2.id', '=', 'agreements.file_2_id')
    ->leftJoin('files_3', 'files_3.id', '=', 'agreements.file_3_id')
    ->process($_POST)
    ->json();
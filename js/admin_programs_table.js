var editor;

$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "./inc/query/programs.php",
        table: "#programs_table",
        i18n: {
            create: {
                title: "Create a new program"
            },
            edit: {
                title: "Edit a new program"
            }
        },
        fields: [ {
            label: "Institution:",
            name: "programs.institutionID",
            type: "select"
        }, {
            label: "Term:",
            name: "programs.term",
            type: "select",
            options: [
                " ",
                "Fall / Spring",
                "Fall / Spring / Summer",
                "Fall / Spring / Winter",
                "Fall / Spring / Summer / Winter",
                "Winter",
                "Summer"
            ],
            default: " "
        }, {
            label: "Type:",
            name: "programs.type",
            type: "select",
            options: [
                " ",
                "Partner University",
                "Internship",
                "Faculty-Led Program",
                "Partner University / Internship"
            ],
            default: " "
        }, {
            label: "Languages:",
            name: "programs.language"
        }]
    });

    $('#programs_table').DataTable( {
        dom: 'Bfrtlp',
        ajax: {
            url: "./inc/query/programs.php",
            type: "POST"
        },
        serverSide: true,
        columns: [
            {data: "institutions.name"},
            {data: "institutions.other_name"},
            {data: "programs.term"},
            {data: "programs.type"},
            {data: "programs.language"}
        ],
        columnDefs: [
            { "visible": false, "targets": 1 }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit", editor: editor },
            { extend: "remove", editor: editor },
            'csv', 'print'
        ],
        paging: true,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]]
    });
});
var editor;
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Last Edit Time:</td>'+
            '<td>'+d.programs.updated_at+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Semester Program:</td>'+
            (d.programs.semester_link?'<td><a href="' +d.programs.semester_link+ '">' + d.programs.semester_link+ '</a></td>':"<td>None</td>")+ 
        '</tr>'+
        '<tr>'+
            '<td>Summer Program:</td>'+
            (d.programs.summer_link?'<td><a href="' +d.programs.summer_link+ '">' + d.programs.summer_link+ '</a></td>':"<td>None</td>")+ 
        '</tr>'+
        '<tr>'+
            '<td>Winter Program:</td>'+
            (d.programs.winter_link?'<td><a href="' +d.programs.winter_link+ '">' + d.programs.winter_link+ '</a></td>':"<td>None</td>")+ 
        '</tr>'+
    '</table>';
}
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
        }, 
        {
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
        }, 
        {
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
        }, {
            label: "Semester Program:",
            name: "programs.semester_link"
        }, {
            label: "Summer Program:",
            name: "programs.summer_link"
        }, {
            label: "Winter Program:",
            name: "programs.winter_link"
        }]
    });

    var table = $('#programs_table').DataTable( {
        dom: 'Bfrtlp',
        ajax: {
            url: "./inc/query/programs.php",
            type: "POST"
        },
        serverSide: true,
        columns: [
            {
                className:      'details-control',
                orderable:      false,
                data:           null,
                defaultContent: ''
            },
            {data: "institutions.name"},
            {data: "institutions.other_name"},
            {data: "programs.term"},
            {data: "programs.type"},
            {data: "programs.language"},
            // {data: "programs.semester_link"},
            // {data: "programs.summer_link"},
            // {data: "programs.winter_link"}
        ],
        columnDefs: [
            { "visible": false, "targets": 2 },
            {"searchable": false, "targets": 0}
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit", editor: editor },
            { extend: "remove", editor: editor },
            'csv', 'print'
        ],
        paging: true,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        order: [[1, 'asc']]
    });
    $('#programs_table tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
});
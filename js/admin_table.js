function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Remark:</td>'+
            '<td>'+d.agreements.remark+'</td>'+
        '</tr>'+
    '</table>';
}
var table = $(document).ready(function() {
    var table = $('#admin_table').DataTable( {
        ajax: {
            url: "./inc/query/overview_admin.php",
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
            {data: "institutions.country"},
            {data: "institutions.city"},
            {data: "agreements.type"},
            {data: "agreements.start_date"},
            {data: "agreements.end_date"},
            {data: "agreements.status"},
            // {data: "agreements.remark"},
            {data: "institutions.hide",
                render: function(val) {
                    return val == 0 ? "Public" : "Private";
            }},
            {data: "files_1.id",
                render: function (val) {
                    return val != null ?
                        "<a href='" + table.file( 'files_1', val ).web_path + "' download=" + table.file( 'files_1', val ).name + ">" + table.file( 'files_1', val ).name + "</a>" : ""
                },
                defaultContent: "No File",
                title: "Original Agreement"
            },
            {data: "files_2.id",
                render: function (val) {
                    return val != null ?
                        "<a href='" + table.file( 'files_2', val ).web_path + "' download=" + table.file( 'files_2', val ).name + ">" + table.file( 'files_2', val ).name + "</a>" : ""
                },
                defaultContent: "No File",
                title: "Document 1"
            }
            ],
        columnDefs: [
            { "searchable": false, "targets": 6 },
            { "searchable": false, "targets": 7 },
            { "searchable": false, "targets": 0 },
            { "visible": false, "targets": 2}
        ],
        selected: true,
        dom: 'Bfrtlp', 
        buttons: [
            'csv', 'print'
        ],
        paging: true,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        order: [[1, 'asc']]
    });
    $('#admin_table tbody').on('click', 'td.details-control', function () {
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
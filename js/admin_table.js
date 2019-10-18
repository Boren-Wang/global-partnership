$(document).ready(function() {
    var table = $('#admin_table').DataTable( {
        ajax: {
            url: "./inc/query/overview_admin.php",
            type: "POST"
        },
        serverSide: true,
        columns: [
            {data: "institutions.name"},
            {data: "institutions.other_name"},
            {data: "institutions.country"},
            {data: "institutions.city"},
            {data: "agreements.type"},
            {data: "agreements.start_date"},
            {data: "agreements.end_date"},
            {data: "agreements.status"},
            {data: "agreements.remark"},
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
            },
            { data: "files_3.id",
                render: function (val) {
                    return val != null ?
                        "<a href='" + table.file( 'files_3', val ).web_path + "' download=" + table.file( 'files_3', val ).name + ">" + table.file( 'files_3', val ).name + "</a>" : ""
                },
                defaultContent: "No File",
                title: "Document 2"
            }],
        columnDefs: [
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            { "visible": false, "targets": 1}
        ],
        selected: true,
        dom: 'Bfrtlp', 
        buttons: [
            'csv', 'print'
        ],
        paging: true,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]]
    });
});
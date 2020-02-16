var editor;
/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td class="child">Remark:</td>'+
            '<td class="child">'+d.agreements.remark+'</td>'+
        '</tr>'+

        '<tr>'+
            '<td class="child">Last Edit Time:</td>'+
            '<td class="child">'+d.agreements.updated_at+'</td>'+
        '</tr>'+    
    '</table>';
}

$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "./inc/query/agreements.php",
        table: "#agreements_table",
        i18n: {
            create: {
                title: "Create a new agreement"
            },
            edit: {
                title: "Edit a new agreement"
            }
        },
        fields: [ {
            label: "Institution:",
            name: "agreements.ins_id",
            type: "select"
        }, {
            label: "Agreement Type:",
            name: "agreements.type",
            type: "select",
            options: [
                { label: "MOU-Institution Wide", value: "MOU-Institution Wide" },
                { label: "MOU-Specific", value: "MOU-Specific" },
                { label: "SEA (Student Exchange Agreement)", value: "SEA" },
                { label: "VSP (Visiting Student Program)", value: "VSP" },
                { label: "SAA (Study Abroad Agreement)", value: "SAA" },
                { label: "DDP (Dual Degree Program)", value: "DDP" },
                { label: "BMP (Bachelor & Master Degree Program)", value: "BMP" },
                { label: "JGP (Joint Graduate Program)", value: "JGP" },
                { label: "GSI (Global Summer Institute)", value: "GSI" },
                { label: "GTP (Global Training Program)", value: "GTP" },
                { label: "IEC (Intensive English Program)", value: "IEC" },
                { label: "Agency (Student Recruitment Agency)", value: "Agency" },
                { label: "Joint Institute (Joint Institute Development)", value: "Joint Institute" },
                { label: "Government Application", value: "Government Application" },
                { label: "History", value: "History" }
               
            ]
        }, {
            label: "Status:",
            name: "agreements.status",
            type: "select",
            options: [
                "Active",
                "Inactive - Expired",
                "Inactive - Terminated",
            ],
        }, {
            label: "Start Date:",
            name: "agreements.start_date",
            type: "date"
        }, {
            label: "End Date:",
            name: "agreements.end_date",
            type: "date"
        }, {
            label: "Auto-Renewal:",
            name: "agreements.auto_renew",
            type: "select",
            options: [
                {label: "Yes", value: 1},
                {label: "No", value: 0},
            ],
            default: "No"
        }, {
            label: "SBU Dept:",
            name: "agreements.sbu_department"
        }, {
            label: "Partner Dept:",
            name: "agreements.partner_department"
        }, {
            label: "Remarks:",
            name: "agreements.remark"
        // },
        }, {
            label: "Agreement:",
            name: "agreements.file_1_id",
            type: "upload",
            noFileText: "No File",
            clearText: "Clear",
            display: function(id) {
                return "<a href='" + editor.file( 'files_1', id ).web_path + "' download>" + editor.file( 'files_1', id ).name + "</a>";
            }
        }, {
            label: "Addendum:",
            name: "agreements.file_2_id",
            type: "upload",
            noFileText: "No File",
            clearText: "Clear",
            display: function(id) {
                return "<a href='" + editor.file( 'files_2', id ).web_path + "' download>" + editor.file( 'files_2', id ).name + "</a>";
            }
        }, 
        {
            label: "Other Files:",
            name: "files[].file_id",
            type: "uploadMany",
            noFileText: "No File",
            clearText: "Clear",
            display: function(id, counter) {
                return "<a href='" + editor.file( 'files', id ).web_path + "' download>" + editor.file( 'files', id ).name + "</a>";
            }
        }
        // }, { 
        //     label:"Last Edit Time", 
        //     name:"agreements.updated_at",  
        //     type:'readonly', 
        //     attr:{ disabled:true } 
        // }
        ]
        
        // , {
        //     label: "SBU:",
        //     name: "agreements.sbu"
        // }
        
        
        
        // {
        //     label: "Partner:",
        //     name: "agreements.partner"
        // }, 
        
        
        
        // {
        //     label: "Agreement Code:",
        //     name: "agreements.code"
        // }, 
    });

    var table = $('#agreements_table').DataTable( {
        dom: 'Bfrtlp',
        ajax: {
            url: "./inc/query/agreements.php",
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
            { data: "institutions.name" },
            { data: "institutions.other_name" },
            { data: "agreements.type" },
            { data: "agreements.status" },
            { data: "agreements.start_date" },
            { data: "agreements.end_date" },
            { data: "agreements.auto_renew",
                render: function(val) {
                    return val == 1 ? "Yes" : "No";
                }
            },
            // { data: "agreements.sbu" },
            { data: "agreements.sbu_department" },
            // { data: "agreements.partner" },
            { data: "agreements.partner_department" },

            // { data: "agreements.code" },
            // 9
            // { data: "agreements.remark" }, 

            { data: "files_1.id",
                render: function (val) {
                    return val != null ?
                        "<a href='" + editor.file( 'files_1', val ).web_path + "' download=" + editor.file( 'files_1', val ).name + ">" + editor.file( 'files_1', val ).name + "</a>" : ""
                },
                defaultContent: "No File",
                title: "Agreement"
            },
            
            { data: "files_2.id",
                render: function (val) {
                    return val != null ?
                        "<a href='" + editor.file( 'files_2', val ).web_path + "' download=" + editor.file( 'files_2', val ).name + ">" + editor.file( 'files_2', val ).name + "</a>" : ""
                },
                defaultContent: "No File",
                title: "Addendum"
            },
            {
                data: "files",
                render: function ( d ) {
                    return d.length ?
                        d.length+' file(s)' :
                        'No file';
                },
                title: "Other Files"
            }
            // ,{ data: "agreements.updated_at" }

            // {data: "files_1.id",
            //     render: function (val, type, row) {
            //         return val != null ?
            //             "<a href='" + table.file( 'files_1', val ).web_path + "' download=" + table.file( 'files_1', val ).name + ">" + table.file( 'files_1', val ).name + "</a>" : ""
            //     },
            //     defaultContent: "No File",
            //     title: "Original Agreement"
            // },
            // {data: "files_2.id",
            //     render: function (val, type, row) {
            //         return val != null ?
            //             "<a href='" + table.file( 'files_2', val ).web_path + "' download=" + table.file( 'files_2', val ).name + ">" + table.file( 'files_2', val ).name + "</a>" : ""
            //     },
            //     defaultContent: "No File",
            //     title: "Other Documents"
            // }
        ], columnDefs: [
            { "searchable": false, "targets": 5 },
            { "searchable": false, "targets": 6 },
            {"searchable": false, "targets": [0, 12]},
            { "visible": false, "targets": [2]},
            {"orderable": false, "targets": 12} 
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
        ,order: [[1, 'asc']]
    });
    $('#agreements_table tbody').on('click', 'td.details-control', function () {
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
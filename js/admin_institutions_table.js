var editor;
$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "./inc/query/institutions.php",
        table: "#institutions_table",
        i18n: {
            create: {
                title: "Create a new institution"
            },
            edit: {
                title: "Edit a new institution"
            }
        },
        fields: [ {
            label: "Institution Name (English):",
            name: "name"
        },{
            label: "Other Name Used (if any):",
            name: "other_name"
        },{
            label: "Initial Partnership Year:",
            name: "since"
        }, {
            label: "Institution Type:",
            name: "hei",
            type: "select",
            options: [
                { label: "University", value: 1 },
                { label: "Non-University", value: 0 }
            ],
            default: 1
        }, {
            label: "Country/Region:",
            name: "country",
            type: "select",
            options: [
                " ","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
            		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
            		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
            		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
            		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
            		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
            		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
            		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
            		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
            		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
            		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
            		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
            		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
            		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
                ,"Yemen","Zambia","Zimbabwe"
            ],
            default: " "
        }, {
            label: "City:",
            name: "city"
        }, {
            label: "Latitude:",
            name: "latitude"
        }, {
            label: "Longitude:",
            name: "longitude"
        }, {
            label: "Visibility:",
            name: "hide",
            type: "select",
            options: [
                { label: "Public", value: 0 },
                { label: "Private", value: 1 }
            ],
            default: 0
        }
        
        // ,{
        //     label: "SBU Reviewed",
        //     name: "sr",
        //     type: "checkbox",
        //     options: [
        //         { label: "SBU Reveiwed", value: 0}
        //     ]
        // }, {
        //     label: "Partner Reviewed",
        //     name: "pr",
        //     type: "checkbox",
        //     options: [
        //         { label: "Partner Reveiwed", value: 0}
        //     ]
        // }, {
        //     label: "SBU Signed",
        //     name: "ss",
        //     type: "checkbox",
        //     options: [
        //         { label: "SBU Signed", value: 0}
        //     ]
        // }, {
        //     label: "Partner Signed",
        //     name: "ps",
        //     type: "checkbox",
        //     options: [
        //         { label: "Partner Signed", value: 0}
        //     ]
        // }

        ]
    });

    $('#institutions_table').DataTable( {
        dom: 'Bfrtlp',
        ajax: {
            url: "./inc/query/institutions.php",
            type: "POST"
        },
        serverSide: true,
        columns: [
            {data: "name"},
            {data: "other_name"},
            {data: "since"},
            {data: "hei",
                render: function(val, type, row) {
                    return val == 1 ? "University" : "Non-University";
                }},
            {data: "country"},
            {data: "city"},
            {data: "latitude"},
            {data: "longitude"},
            {data: "hide",
                render: function(val, type, row) {
                    return val == 0 ? "Public" : "Private";
                }
            }

            // ,{data: "sr",
            //     render: function(val, type, row) {
            //       return val == 0 ? "Yes" : "No";
            //   }
            // },
            // {data: "pr",
            //     render: function(val, type, row) {
            //       return val == 0 ? "Yes" : "No";
            //   }
            // },
            // {data: "ss",
            //     render: function(val, type, row) {
            //       return val == 0 ? "Yes" : "No";
            //   }
            // },
            // {data: "ps",
            //     render: function(val, type, row) {
            //       return val == 0 ? "Yes" : "No";
            //   }
            // }

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
        columnDefs: [
            { "visible": false, "targets": 1 }
        ],
    });
});
 


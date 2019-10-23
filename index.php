<?php
include('./inc/components/header.php');
include('./inc/components/navbar_index.php');
?>

<!-- Map START -->
<div class="jumbotron" id="map-jumbotron">
	<div class="container-full-bg" id="map-canvas"></div>
</div>
<!-- Map END-->

<!-- Table START -->
<div class="container">
    <table id="main_table" class="display table-condensed" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Institutions</th>
                <th>Other Name Used</th>
                <th>Country</th>
                <th>City</th>
                <th>Partnership Established</th>
                <th>Visibility</th>
            </tr>
        </thead>
        <!-- <tfoot>
            <tr>
                <th>Institutions</th>
                <th>Other Name Used</th>
                <th>Country</th>
                <th>City</th>
                <th>Partnership Established</th>
                <th>Visibility</th>
            </tr>
        </tfoot> -->
    </table>
</div>
<!-- Table END -->

<!-- google Maps Javascript API -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwq4XJXnJPWvhoiupZ7hcZLN_PCbxfdQ0"></script>
<script src="js/map/markerclusterer_compiled.js"></script>
<script src="js/map/map.js"></script>

<!-- Table API-->
<script>
    $(document).ready(function() {
        // Setup - add a text input to each footer cell
        // $('#main_table tfoot th').each( function () {
        //         var title = $(this).text();
        //         $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
        // } );

        var table = $('#main_table').DataTable( {
            ajax: {
                url: "./inc/query/overview.php",
                type: "POST"
            },
            serverSide: true,
            columns: [
                { data: "name" },
                { data: "other_name" },
                { data: "country" },
                { data: "city" },
                { data: "since" },
                { data: "hide",
                    render: function(val, type, row) {
                        return val == 0 ? "Public" : "Private";
                }
            }
            ],
            select: true,
            // dom: 'Bfrtip',
            // buttons: [
            //     'copy', 'csv', 'pdf', 'print'
            // ],
            paging: true,
            lengthMenu: [[-1, 50, 25], ["All", 50, 25]],
            columnDefs: [
                { "visible": false, "targets": [1, 5] }
            ],
            rowCallback: function( row, data, index ) {
                // console.log(data.hide);
                // console.log(data["hide"]);
                if (data["hide"] == "1") {
                    $(row).hide();
                }
            },

            // Apply the search
            // initComplete: function () {
            //     this.api().columns().every( function () {
            //         var column = this;

            //         $( 'input', this.footer() ).on( 'keyup change', function () {
            //             if ( column.search() !== this.value ) {
            //                 column
            //                     .search( this.value )
            //                     .draw();
            //             }
            //         } );
            //     } );
            // }
            
            initComplete: function () {
                this.api().columns(2).every( function () {
                    var column = this;
                    var select = $('<select><option value="">Country</option></select>')
                        .appendTo( $(column.header()).empty() )
                        .on( 'change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
    
                            column
                                .search( this.value )
                                .draw();
                        } );
                    // console.log(column.data());
                    column.data().sort().unique().each( function ( d, j ) {
                        select.append( '<option value="'+d+'">'+d+'</option>' )
                    } );
                    
                } );
            }

        });
    });
</script>

<?php include('./inc/components/footer.php') ?>
<?php
  include('./inc/components/header.php');
  include('./inc/components/navbar_admin.php');
?>

<div class="container">
    <h1>Institutions</h1><br/>
    <!-- table table-hover table-nowrap table-striped table-bordered -->
    <table id="institutions_table" class="display table-condensed" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>...</th>
            <th>Institution</th>
            <th>Other Name Used</th>
            <th>Initial Partnership Year</th>
            <th>Institution Type</th>
            <th>Country</th>
            <th>City</th>
            <!-- <th>Latitude</th> -->
            <!-- <th>Longitude</th> -->
            <th>Visibility</th>
            <!-- <th>SBU Reviewed</th>
            <th>Partner Reviewed</th>
            <th>SBU Signed</th>
            <th>Partner Signed</th> -->
        </tr>
        </thead>
    </table>
</div>

<script src="./js/admin_institutions_table.js"></script>
<?php include('./inc/components/footer.php') ?>

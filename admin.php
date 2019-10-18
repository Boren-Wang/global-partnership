<?php
  include('./inc/components/header.php');
  include('./inc/components/navbar_admin.php');
?>

<div class="container">
    <h1>Overview</h1><br/>
    <table id="admin_table" class="table table-condensed table-hover table-nowrap table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Institution</th>
            <th>Other Name Used</th>
            <th>Country</th>
            <th>City</th>
            <th>Agreement Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Visibility</th>
            <th>Original Agreement</th>
            <th>Document 1</th>
            <th>Document 2</th>
        </tr>
        </thead>
    </table>
</div>

<script src="./js/admin_table.js"></script
<?php include('./inc/components/footer.php') ?>
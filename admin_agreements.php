<?php
  include('./inc/components/header.php');
  include('./inc/components/navbar_admin.php');
?>

<div class="container">
    <h1>Agreements</h1><br/>
    <!-- table-condensed table-hover table-striped table-nowrap table-bordered-->
    <table id="agreements_table" class="display table-condensed" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>...</th>
            <th>Institution</th>
            <th>Other Name Used</th>
            <th>Agreement Type</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Auto-Renewal</th>
            <th>SBU Department</th>
            <th>Partner Department</th>
            <!-- <th>Agreement Code</th> -->
            <!-- <th>Remarks</th> -->
            <th>Original Agreement</th>
            <th>Document 1</th>
            <th>Files</th>
            <!-- <th>Update Time</th> -->
        </tr>
        </thead>
    </table>
</div>

<script src="./js/admin_agreements_table.js"></script>
<?php include('./inc/components/footer.php') ?>

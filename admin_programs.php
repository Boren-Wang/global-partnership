<?php
  include('./inc/components/header.php');
  include('./inc/components/navbar_admin.php');
?>

<div class="container">
    <h1>Programs</h1><br/>
    <!-- table table-hover table-nowrap table-striped table-bordered -->
    <table id="programs_table" class="display table-condensed " cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>...</th>
            <th>Institution</th>
            <th>Other Name Used</th>
            <th>Term</th>
            <th>Type</th>
            <th>Languages</th>
            <!-- <th>Semester</th>
            <th>Summer</th>
            <th>Winter</th> -->
        </tr>
        </thead>
    </table>
</div>

<script src="./js/admin_programs_table.js"></script>
<?php include('./inc/footer.php') ?>
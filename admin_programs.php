<?php
  include('./inc/components/header.php');
  include('./inc/components/navbar_admin.php');
?>

<div class="container">
    <h1>Programs</h1><br/>
    <table id="programs_table" class="table table-condensed table-hover table-nowrap table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
        <tr>
            <th>Institution</th>
            <th>Other Name Used</th>
            <th>Term</th>
            <th>Type</th>
            <th>Languages</th>
        </tr>
        </thead>
    </table>
</div>

<script src="./js/admin_programs_table.js"></script>
<?php include('./inc/footer.php') ?>
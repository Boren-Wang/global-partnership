<?php 
	session_start();

	if(isset($_SESSION['user'])){
		header("location: ./admin.php");
		exit();
	}

	include('./inc/components/header.php');
	include('./inc/components/navbar_index.php');
?>

<div class="container">
	<br>
	<br>
	<br>
	<br>
	<br>
	<form class="form-signin" method="post" action="./inc/checklogin.php">
		<h2 class="form-signin-heading">Please log in</h2>
		<label for="username" class="sr-only">User Name</label>
		<input type="text" id="username" class="form-control" name="username" placeholder="User Name" required="" autofocus="">
		<label for="password" class="sr-only">Password</label>
		<input type="password" id="password" class="form-control" name="password" placeholder="Password" required="">
		<button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
	</form>

</div>

<?php include('./inc/components/footer.php') ?>
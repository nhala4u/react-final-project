<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://bootswatch.com/cosmo/bootstrap.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://bootswatch.com/assets/css/custom.min.css">
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
	<div id="container" class="container bs-docs-container">
		<nav class="navbar navbar-default"> <div class="container-fluid">  <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">TODO</a> </div>  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9"> <ul class="nav navbar-nav"> 
			<li class="active"><a href="#">Step-1</a></li> 
			<li><a href="#">Step-1</a></li> 
			<li><a href="#">Step-1</a></li> 
		</ul> 
	</div> </div> </nav>

		<div class="bs-callout bs-callout-warning" id="callout-navs-accessibility"> 
			<h4>Bài tập React Final Project</h4> 
			<p>
				If you are using navs to provide a navigation bar, be sure to add a <code>role="navigation"</code> to the most logical parent container of the <code>&lt;ul&gt;</code>, or wrap a <code>&lt;nav&gt;</code> element around the whole navigation. Do not add the role to the <code>&lt;ul&gt;</code> itself, as this would prevent it from being announced as an actual list by assistive technologies.
			</p> 
		</div>

	    <div id="application" class="row"></div>
	</div>
	
</body>
</html>

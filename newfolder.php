<?php 

	// if (!mkdir($mypath, 0777, true)) {
	//     die('Failed to create folders...');
	// }

	// $_POST['id'];
	$id = $_POST['id'];
	$toCreate = array(
	  	(__DIR__).'/source/'.$id.'',
	  	(__DIR__).'/thumbs/'.$id.''
	);

	$permissions = 0777;

	foreach ($toCreate as $dir) {
	  	mkdir($dir, $permissions, TRUE);
		echo $dir;
	}

	// if (!file_exists('source/'.$id.'')) {
	//     mkdir('source/'.$id.'', 0777, true);
	//     mkdir('thumbs/'.$id.'', 0777, true);
	//     echo "success";
	// }
 ?>
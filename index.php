<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>CKEditor Sample</title>
	<script src="ckeditor.js"></script>
</head>
<body>

	<textarea id="editor1" >
	</textarea>

<script>
	CKEDITOR.replace( 'editor1', {
		filebrowserBrowseUrl : 'filemanager/dialog.php?type=2&editor=ckeditor&fldr=',
		filebrowserUploadUrl : 'filemanager/dialog.php?type=2&editor=ckeditor&fldr=',
		filebrowserImageBrowseUrl : 'filemanager/dialog.php?type=1&editor=ckeditor&fldr='
		} );
</script>

</body>
</html>

/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// config.autosave_messageType = "no";
	config.removePlugins = 'autosave,';
	// config.enterMode = CKEDITOR.ENTER_P;
	// config.enterMode = CKEDITOR.ENTER_BR;
	// config.shiftEnterMode = CKEDITOR.ENTER_BR;
	config.autoParagraph = false;
	config.removeButtons = 'CreateDiv,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Blockquote,Flash,Replace,Anchor,About,Source,Iframe,ShowBlocks';
};

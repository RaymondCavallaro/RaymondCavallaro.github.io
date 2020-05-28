import $ from 'jquery';

$(function() {
	let txtcode = document.createElement('textarea');
	txtcode.id = 'txtcode';
	document.body.appendChild(txtcode);
	
	let btnrun = document.createElement('input');
	btnrun.id = 'btnrun';
	btnrun.type = 'button';
	document.body.appendChild(btnrun);
	
	let $btnrun = $("#btnrun");
	let $txtcode = $("#txtcode");
	$btnrun.click(function() {
		eval('' + $txtcode.val());
	});
})

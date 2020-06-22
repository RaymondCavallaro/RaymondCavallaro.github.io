import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';
import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../projects.json';

$(function() {
	projects.forEach(project => {
		let $projAnchor = $('<a />', {
	        text: project.name,
	        id: 'btn_' + uuidv4(),
	        href: './' + project.name
	    });
		$projAnchor.addClass('btn btn btn-primary');
		$(document.body).append($projAnchor);
    });
})

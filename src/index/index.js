import './index.css';

import $ from 'jquery';

import navbarComponent from './navbar';
import projectsComponent from './projects';

$(function() {
	$(document.body).append(navbarComponent);
	$(document.body).append(projectsComponent);
});

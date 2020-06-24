import linkComponent from '../components/link/link.js';

import { projects } from '../data/projects.json';

export default projects.map(project => Object.assign({}, project, {
	text: project.name,
	href: './' + project.name,
})).map(linkData => linkComponent(linkData)).concat();
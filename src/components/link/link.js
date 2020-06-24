import linkTemplate from './link.hbs';

import { v4 as uuidv4 } from 'uuid';

export default function(linkData) {
	return linkTemplate(Object.assign({
		id: 'lnk_' + uuidv4(),
		href: '#',
		class: 'btn btn-primary',
	}, linkData));
};
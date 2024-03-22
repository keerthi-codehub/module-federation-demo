import React from 'react';

function Badge({ text }) {
	return (
		<span className="badge rounded-pill text-bg-primary">
			{text || 'default'}
		</span>
	);
}

export default Badge;

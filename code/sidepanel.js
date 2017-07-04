import React from 'react';

export default class SidePanel extends React.PureComponent {
	render() {
		return (
			<div className="sidepanel">
				<div><a href="#basic">Basic</a></div>
				<div><a href="#clicking">Click events</a></div>
				<div><a href="#animation">Animation</a></div>
				<div><a href="#easing">Custom easing</a></div>
				<div><a href="#styles">Custom styles</a></div>
			</div>);
	}
}
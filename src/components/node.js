import PropTypes from 'prop-types';
import React from 'react';
import wrapHandlers from '../wrapHandlers';
import CollapseButton from './collapse';

const propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
	offset: PropTypes.number.isRequired,
	radius: PropTypes.number.isRequired,
	circleProps: PropTypes.object.isRequired,
	gProps: PropTypes.object.isRequired,
	textProps: PropTypes.object.isRequired,
	rect: PropTypes.bool.isRequired,
	rectProps: PropTypes.object.isRequired,
	collapsible: PropTypes.bool.isRequired,
};

export default class Node extends React.PureComponent {
	getTransform() {
		return `translate(${this.props.y}, ${this.props.x})`;
	}

	render() {
		const wrappedCircleProps = wrapHandlers(
			this.props.circleProps,
			this.props[this.props.keyProp]
		);

		const wrappedRectProps = wrapHandlers(
			this.props.rectProps,
			this.props[this.props.keyProp]
		);

		const wrappedGProps = wrapHandlers(
			this.props.gProps,
			this.props[this.props.keyProp]
		);

		const wrappedTextProps = wrapHandlers(
			this.props.textProps,
			this.props[this.props.keyProp]
		);

		const isCollapsible = this.props.collapsible && (this.props.children || this.props.collapsed);

		return (
			<g {...wrappedGProps} transform={this.getTransform()}>
				{this.props.rect ? 
				  <rect {...wrappedRectProps} /> :
				  <circle {...wrappedCircleProps} r={this.props.radius}/>
				}
				{isCollapsible && 
					<CollapseButton
						id={this.props[this.props.keyProp]}
						onCollapseClick={this.props.onCollapseClick}
						collapsed={this.props.collapsed}
					/>
				}
				<text dx={this.props.radius + 0.5} dy={this.props.offset} {...wrappedTextProps}>
					{this.props[this.props.labelProp]}
				</text>
			</g>);
	}
}

Node.propTypes = propTypes;
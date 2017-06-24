import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	animated: PropTypes.bool.isRequired,
	animatedProps: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		initialValue: PropTypes.number
	})).isRequired,
	component: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
	easing: PropTypes.func.isRequired,
	steps: PropTypes.number.isRequired
};

export default class Animated extends React.PureComponent{
	constructor(props) {
		super(props);
		this.state = props.animatedProps.reduce((state, prop) => {
			state[prop.name] = prop.initialValue || props[prop.name];
			return state;
		}, {});
	}
	componentDidMount() {
		this.animate(this.props);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.animatedProps.every(prop => this.props[prop.name] === nextProps[prop.name])) {
			return;
		}

		this.animate(nextProps);
	}
	animate(props) {
		if (!props.animated) {
			return;
		}

		clearInterval(this.animation);

		let counter = 0;
		let initialState = this.state;
		this.animation = setInterval(() => {
			counter++;

			this.setState(props.animatedProps.reduce((state, prop) => {
				state[prop.name] = this.calculateNewValue(initialState[prop.name], props[prop.name], counter / props.steps);
				return state;
			}, {}));

			if (counter === props.steps) {
				clearInterval(this.animation);
				this.animation == null;
			}

		}, props.duration / props.steps);
	}
	calculateNewValue(start, end, interval) {
		return start + (end - start) * this.props.easing(interval);
	}
	render() {
		return this.props.animated
			? <this.props.component {...this.props} {...this.state}/>
			: <this.props.component {...this.props}/>;
	}
}

Animated.propTypes = propTypes;
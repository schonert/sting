import StingBase from './sting-base.class';
import st from './sting.tag';
const template = st`
	<${'tag'} class="${'className'}">
		${'message'}
	</${'tag'}>
`;

const defaults = {
	parentElement: document.body,
	className: 'sting__notification',
	duration: 0,
	template: template
};

export default class StingNotification extends StingBase {

	constructor(config) {
		super({ ...defaults, ...config });

		this.on('enter', this.render);
		this.on('leave', this.remove);

		if(this.config.duration > 0) {
			this.setTimer();
		}
	}

	enter() {
		this.broadcast('enter');
		this.broadcast('enter:post');
		return this;
	}

	leave() {
		this.broadcast('leave');
		this.broadcast('leave:post');
		return this;
	}

	private setTimer() {

		this.on('enter', () => {
			let remaining = this.config.duration;
			let start = Date.now();
			let timeout = setTimeout(() => this.leave(), this.config.duration);

			this.on('leave', () => clearTimeout(timeout));

			this.element.addEventListener('mouseenter', () => {
				this.config.duration -= Date.now() - start;
				window.clearTimeout(timeout);
			});

			this.element.addEventListener('mouseleave', () => {
				start = Date.now();
				window.clearTimeout(timeout);
				timeout = setTimeout(() => this.leave(), this.config.duration);
			});
		});

	}
}

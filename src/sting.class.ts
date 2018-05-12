import StingNotification from './sting-notification.class';
import StingBase from './sting-base.class';

const defaults = {
	duration: 3000,
	className: 'sting__notifications',
	notification: StingNotification
}

export default class Sting extends StingBase {

	constructor(config = {}) {
		super({ ...defaults, ...config });
		this.render();
	}

	notify(message) {
		let notification = new this.config.notification({
			message,
			parentElement: this.element,
			duration: this.config.duration
		});

		this.broadcast('notify');
		notification.enter();
		this.broadcast('notify:post');

		return notification;
	}
}

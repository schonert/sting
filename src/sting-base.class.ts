import st from './sting.tag';

const template = st`
	<${'tag'} class="${'className'}">
	</${'tag'}>
`;

export default class StingBase {
	public element;

	public config:any = {
		template: template,
		tag: 'div',
		className: '',
		parentElement: document.body,
	}

	public methods = [];

	constructor(config) {
		this.config = { ...this.config, ...config };

		this.on('render', this.renderMethod);
		this.on('remove', this.removeMethod);
	}

	render() {
		this.broadcast('render', this);
		this.broadcast('render:post', this);
	}

	remove() {
		this.broadcast('remove', this);
		this.broadcast('remove:post', this);
	}

	on(event, method) {
		this.methods.push({
			event,
			method
		});

		return this.off.bind(this, event, method);
	}

	off(event, method) {
		this.methods = this.methods.filter(binding => {
			return !(binding.event == event && binding.method == method);
		});
	}

	broadcast(event, ...values) {
		this.eventRunner.apply(this, [event, ...values]);
	}

	eventRunner(event, ...values) {
		this.getEventMethods(event).forEach( m => m.method.apply(this, values));
	}

	private getEventMethods(event) {
		return this.methods.filter(m => m.event == event);
	}

	private renderMethod() {
		let template = this.config.template;
		let element = document.createElement('div');
		element.innerHTML = template(this.config);

		// Render once
		this.removeMethod();

		this.element = element.children[0];
		this.config.parentElement.appendChild(this.element);
	}

	private removeMethod() {
		if(this.element && this.element.parentElement) {
			this.element.parentElement.removeChild(this.element);
		}
	}
}

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import st from './sting.tag';
var template = st(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t<", " class=\"", "\">\n\t</", ">\n"], ["\n\t<", " class=\"", "\">\n\t</", ">\n"])), 'tag', 'className', 'tag');
var StingBase = /** @class */ (function () {
    function StingBase(config) {
        this.config = {
            template: template,
            tag: 'div',
            className: '',
            parentElement: document.body,
        };
        this.methods = [];
        this.config = __assign({}, this.config, config);
        this.on('render', this.renderMethod);
        this.on('remove', this.removeMethod);
    }
    StingBase.prototype.render = function () {
        this.broadcast('render', this);
        this.broadcast('render:post', this);
    };
    StingBase.prototype.remove = function () {
        this.broadcast('remove', this);
        this.broadcast('remove:post', this);
    };
    StingBase.prototype.on = function (event, method) {
        this.methods.push({
            event: event,
            method: method
        });
        return this.off.bind(this, event, method);
    };
    StingBase.prototype.off = function (event, method) {
        this.methods = this.methods.filter(function (binding) {
            return !(binding.event == event && binding.method == method);
        });
    };
    StingBase.prototype.broadcast = function (event) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        this.eventRunner.apply(this, [event].concat(values));
    };
    StingBase.prototype.eventRunner = function (event) {
        var _this = this;
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        this.getEventMethods(event).forEach(function (m) { return m.method.apply(_this, values); });
    };
    StingBase.prototype.getEventMethods = function (event) {
        return this.methods.filter(function (m) { return m.event == event; });
    };
    StingBase.prototype.renderMethod = function () {
        var template = this.config.template;
        var element = document.createElement('div');
        element.innerHTML = template(this.config);
        // Render once
        this.removeMethod();
        this.element = element.children[0];
        this.config.parentElement.appendChild(this.element);
    };
    StingBase.prototype.removeMethod = function () {
        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
        }
    };
    return StingBase;
}());
export default StingBase;
var templateObject_1;

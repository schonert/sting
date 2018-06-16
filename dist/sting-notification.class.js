var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import StingBase from './sting-base.class';
import st from './sting.tag';
var template = st(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t<", " class=\"", "\">\n\t\t", "\n\t</", ">\n"], ["\n\t<", " class=\"", "\">\n\t\t", "\n\t</", ">\n"])), 'tag', 'className', 'message', 'tag');
var defaults = {
    parentElement: document.body,
    className: 'sting__notification',
    duration: 0,
    template: template
};
var StingNotification = /** @class */ (function (_super) {
    __extends(StingNotification, _super);
    function StingNotification(config) {
        var _this = _super.call(this, __assign({}, defaults, config)) || this;
        _this.on('enter', _this.render);
        _this.on('leave', _this.remove);
        if (_this.config.duration > 0) {
            _this.setTimer();
        }
        return _this;
    }
    StingNotification.prototype.enter = function () {
        this.broadcast('enter');
        this.broadcast('enter:post');
        return this;
    };
    StingNotification.prototype.leave = function () {
        this.broadcast('leave');
        this.broadcast('leave:post');
        return this;
    };
    StingNotification.prototype.setTimer = function () {
        var _this = this;
        this.on('enter', function () {
            var remaining = _this.config.duration;
            var start = Date.now();
            var timeout = setTimeout(function () { return _this.leave(); }, _this.config.duration);
            _this.on('leave', function () { return clearTimeout(timeout); });
            _this.element.addEventListener('mouseenter', function () {
                _this.config.duration -= Date.now() - start;
                window.clearTimeout(timeout);
            });
            _this.element.addEventListener('mouseleave', function () {
                start = Date.now();
                window.clearTimeout(timeout);
                timeout = setTimeout(function () { return _this.leave(); }, _this.config.duration);
            });
        });
    };
    return StingNotification;
}(StingBase));
export default StingNotification;
var templateObject_1;

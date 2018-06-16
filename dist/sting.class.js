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
import StingNotification from './sting-notification.class';
import StingBase from './sting-base.class';
var defaults = {
    duration: 3000,
    className: 'sting__notifications',
    notification: StingNotification
};
var Sting = /** @class */ (function (_super) {
    __extends(Sting, _super);
    function Sting(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, __assign({}, defaults, config)) || this;
        _this.render();
        return _this;
    }
    Sting.prototype.notify = function (message) {
        var notification = new this.config.notification({
            message: message,
            parentElement: this.element,
            duration: this.config.duration
        });
        this.broadcast('notify');
        notification.enter();
        this.broadcast('notify:post');
        return notification;
    };
    return Sting;
}(StingBase));
export default Sting;
window['Sting'] = Sting;

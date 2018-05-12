# Sting 1.5kb
> is a simple non-dependent, lightweight and customisable notification engine.

## Description
Notifications comes in many shapes and forms and yet they all seem to have the same requirements - or at least the most of them. ***Sting*** serves the purpos of kickstarting and streamlining your on-site notifications so that you can focus on getting the right messages out there.

Jumping into the source you'd quickly realize that there's no magic going on here. No fancy buzzword-dependencies, promises, observables or other browser-support-concerning-functionality. Just plug it in and get your message out there.

## Give me an example already
_chill dude - here you go!_
```JavaScript
// You obviusly need to include Sting
import Sting from 'sting';

// Make your first Sting notification area, with everything on default
const topNotifications = new Sting({
    className: 'sting__notifications', // Wrapper className
    duration: 3000, // 0 or false to disable disapearing notifications
    parentElement: document.body // Where should we inject the notification area?
});

// Boom guys! This is the magic
topNotifications.notify('Hey guys - Check this out!');
```

## Let's say i'd like to wrap it in a promise, for example?
_I thought you might ask that_
Here is an example of how to extend the functinallity to support promises
```JavaScript
class StingPromise extends Sting {
	constructor(config) {
		super(config);
	}

	notify(message) {
		return new Promise((resolve) => {
			let notification = super.notify(message);
			notification.on('remove:post', () => resolve(notification));
		});
	}
}

const topNotification = new StingPromise();
topNotification.notify('Sleeeeek').then((notification) => {
	console.log('awesome');
});

```


## API doc
### StingBase
The base class used to extend `Sting` and `StingNotification`. Adds eventlisteners as well as render and remove methods.

#### Configuration
|Property||Default|
|---|---|---|
|className|The DOM items className|`''`|
|tag|The DOM wrapper Node-Tag|`div`|
|parentElement|The Node to append child upon render|`document.body`
|template|Template to render|	`<${'tag'} class="${'className'}"></${'tag'}>`

#### Methods
|Method||Arguments|Return|
|---|---|---|---|
|on|Listen to event |(event, callback)|off method
|off|Remove event listener |(event, callback)||
|broadcast|Trigger event|(event, values)||
|render|Render and inject to `parentElement`|||
|remove|Remove rendered `element`|

#### Events
|Event|Description|
|---|---|
|render|Pre rendered and injected|
|render:post|Post rendered|
|remove| Pre rendered element removed|
|remove:post|Post removed|

### Sting
_Extends StingBase_
Sting is the notification area. This will act as a wrapper to all notifications.

#### Configuration
|Property||Default|
|---|---|---|
|className|The DOM items className|`'sting__notifications'`|
|duration|How long the notification is visible. `0` will make it permanent |`3000`|
|notification|Change the notification type|`StingNotification`

#### Methods
|Method||Arguments|Return|
|---|---|---|---|
|notify|Add a notificaiton to the area|(string)|StingNotification

#### Events
|Event|Description|
|---|---|
|notify|Pre adding notification|
|notify:post|Post added|

### StingNotification
_Extends StingBase_
StingNotification is the individual notification. This holds the messages and is the rendered notification shown.

#### Configuration
|Property||Default|
|---|---|---|
|className|The DOM items className|`'sting__notification'`|
|duration|How long the notification is visible. `0` will make it permanent |`0`|
|template|Template to render|	`<${'tag'} class="${'className'}">${message}</${'tag'}>`

#### Methods
|Method||Arguments|Return|
|---|---|---|---|
|enter|Render the notification||StingNotification
|leave|Remove the notification||StingNotification

#### Events
|Event|Description|
|---|---|
|enter|Pre rendering|
|enter:post|Post rendered and injected|
|leave|Pre removing|
|leave:post|Pre removing|


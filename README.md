# Please Don't Do That

**Work in progress**

A library that prevents users from functions such as printing, copy/paste, right-click, etc. And allows a site-owner easy access to an API that controls where, and what happens when these functions take place.

### Usage

Embed in HTML:

```html
<script src="/path/to/pleasedontdothat.min.js"></script>
```

Access the `pleaseDont()` method anywhere that has access to the `window` object.

Disabling just printing, or disabling print, copy, paste, and right-click all at once:
```javascript
pleaseDont(['print'])

// or...

pleaseDont(['print', 'copy', 'paste', 'rightclick']);
```

Disabling print on a page and showing an html element in its place

```html
<html>
    <head>
        ...
    </head>
    <body>
        ...
        <div class="please-dont-print-this-page" style="display: none;">
            <img src="/images/stop.jpg" /> <br />
            <h1>Stop!</h1>
            <p>Please do not print this page out.</p>
        </div>
    </body>
</html>
```

```javascript
const options = {
    print: {
        action: 'show',
        value: '.please-dont-print-this-page'
    },
};
pleaseDont(['print'], options);
```

All options have possible actions of the following:

* `show` - Hide all elements on screen and show elements with particular selector(s) defined in `value`. Multiple selectors can be added as a comma-delimited string.
* `hide` - Hide elements with particular selector(s) defined in `value`. Multiple selectors can be added as a comma-delimited string.
* `none` - Default behavior, just not allowing the action.
* `custom` - Disables default behavior, has no `value`, must accompany a `handler` property which is a function that overrides the default behavior of what the event-type would be:
```javascript
const options = {
    rightclick: {
        action: 'custom',
        handler: (event) => {
            // do something here, native event is passed in on 'event'
        },
    },
};
```
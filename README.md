# browser-has-hover
Adds a 'has-hover' class to the body if the user can hover with their device (i.e. not a touch device). Also exposes a 'hasHover' constant to be used in your JavaScript

## Install
You can install via npm or yarn.

### npm
```bash
npm install --save browser-has-hover
```

### yarn
```bash
yarn add browser-has-hover
```

## Usage

You can import using ES6 imports. You can just import the library if you only want it to add the `has-hover` class to the body.
```javascript
import 'browser-has-hover';
```

If you need to know whether the browser has hover from your JavaScript you can import the constant like so:
```javascript
import { hasHover } 'browser-has-hover';

if (hasHover) {
	// Do stuff for if the browser has hover
}
```

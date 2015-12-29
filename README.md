## What
This Angular module provides simple directive that allows element to control visibility of child element based on element mouse hover state.
It doesn't rely on Angular builtin directives so digest cycle won't be trigger at all.

![demo](https://rawgit.com/v1per/angular-show-on-hover/master/demo.gif)  
  
## Install
  
```
$ npm install --save angular-show-on-hover
```  

## Usage

```js
angular
  .module('app', [
    require('angular-show-on-hover')
  ])
```
  
```html
  <div show-on-hover="span"><span></span></div>
```

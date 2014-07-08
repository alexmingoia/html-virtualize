# html-virtualize

[![Build Status](https://secure.travis-ci.org/alexmingoia/html-virtualize.png)](http://travis-ci.org/alexmingoia/html-virtualize) 
[![NPM version](https://badge.fury.io/js/html-virtualize.png)](http://badge.fury.io/js/html-virtualize)
[![Dependency Status](https://david-dm.org/alexmingoia/html-virtualize.png)](http://david-dm.org/alexmingoia/html-virtualize)

Parse HTML into [virtual-dom](https://github.com/Matt-Esch/virtual-dom) tree.

This is for server-side use cases. If you're in the browser you can use
[`vdom-virtualize`](https://github.com/marcelklehr/vdom-virtualize).

## Installation

```sh
npm install html-virtualize
```

## API

### module.exports(html:String)

Returns virtual DOM tree.

[![Build Status](https://travis-ci.org/larsha/bolaget.io-sdk-js.svg?branch=master)](https://travis-ci.org/larsha/bolaget.io-sdk-js)

# bolaget.io-sdk-js
JS SDK for (https://bolaget.io)

## Versions
This SDK adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html). And it will follow [bolaget.io](https://github.com/larsha/bolaget.io#versions) versions.

| Version       | Linked to             |
| ------------- |:---------------------:|
| `^1.0.0`      | https://bolaget.io/v1 |

## Dependencies
Node.js >= 7.6.0

## Install
```
npm install bolaget.io
```

## Usage
```javascript
import { products, product, stores, store } from 'bolaget.io'
```

### Get products
Query params available here [bolaget.io](https://github.com/larsha/bolaget.io)

```javascript
const limit = 5
const koscher = true
try {
  const data = await products({ limit, koscher })
} catch (e) {
  // error handling
}
```

### Get product

```javascript
try {
  const data = await product("8617101")
} catch (e) {
  // error handling
}
```

### Get stores
Query params available here [bolaget.io](https://github.com/larsha/bolaget.io)

```javascript
const limit = 2
try {
  const data = await stores({ limit })
} catch (e) {
  // error handling
}
```

### Get store

```javascript
try {
  const data = await store("0146")
} catch (e) {
  // error handling
}
```

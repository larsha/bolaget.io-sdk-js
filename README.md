[![Build Status](https://travis-ci.org/larsha/bolaget.io-sdk-js.svg?branch=master)](https://travis-ci.org/larsha/bolaget.io-sdk-js)

# bolaget.io-sdk-js
JS SDK for (https://bolaget.io)
More information at https://github.com/larsha/bolaget.io

## Dependencies
Node.js >= 7.6.0

## Install
```
npm install bolaget.io
```

## Usage
```javascript
import { products, stores } from 'bolaget.io'
```

### Get products, filtered based on available params at https://github.com/larsha/bolaget.io
```javascript
const limit = 5
const koscher = true
try {
  const data = await products({ limit, koscher })
} catch (e) {
  // error handling
}
```

### Get stores, filtered based on available params at https://github.com/larsha/bolaget.io
```javascript
const limit = 2
try {
  const data = await stores({ limit })
} catch (e) {
  // error handling
}
```

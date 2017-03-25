# bolaget.io-sdk-js
JS SDK for (https://bolaget.io)

## Dependencies
Node.js >= 7.6.0

## Install
```
npm install bolaget.io
```

## Usage
```
import { products } from 'bolaget.io'
```

### Get all products
```
try {
  const data = await products()
} catch (e) {
  // error handling
}
```

### Get products, filtered based on available params at https://github.com/larsha/bolaget.io
```
const limit = 5
const koscher = true
try {
  const data = await products({ limit, koscher })
} catch (e) {
  // error handling
}
```

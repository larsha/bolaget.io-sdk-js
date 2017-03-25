import request from 'request-promise-native'

const URI = `https://bolaget.io`

async function get (options) {
  try {
    return await request(options)
      .then(JSON.parse)
  } catch (e) {
    throw e
  }
}

export async function products (qs = {}) {
  const url = `${URI}/products`
  return await get({ url, qs })
}

export async function product (nr) {
  const url = `${URI}/products/${nr}`
  return await get({ url })
}

export async function stores (qs = {}) {
  const url = `${URI}/stores`
  return await get({ url, qs })
}

export async function store (nr) {
  const url = `${URI}/stores/${nr}`
  return await get({ url })
}

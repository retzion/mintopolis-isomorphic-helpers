import cryptoJs from "crypto-js"

function test(params) {
  return {
    typeOfParams: typeof params,
    paramsLength: params?.length,
  }
}

/** cryptography */
function generateHash(str, options) {
  if (options?.nonce) str += options.nonce
  return cryptoJs.SHA3(str, options).toString()
}

function generateId() {
  // eslint-disable-next-line
  return URL.createObjectURL(new Blob()).substr(-36)
}

module.exports = {
  generateHash,
  generateId,
  test,
}

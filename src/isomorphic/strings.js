function test(params) {
  return {
    typeOfParams: typeof params,
    paramsLength: params?.length,
  }
}

/** string utilities */
const allowedChars = String("abcdefghijklmnopqrstuvwxyz 0123456789").split("")

function cleanString(str) {
  str = str
    .toLowerCase()
    .split("")
    .filter((l) => allowedChars.includes(l))
    .join("")

  return str
    .split(" ")
    .filter((l) => l !== " ")
    .filter((w) => w.length)
    .join(" ")
    .trim()
}

function obfuscateAccount(account) {
  if (!account || typeof account !== "string") return

  return `${account.slice(0, 4)}...${account.slice(
    account.length - 4,
    account.length,
  )}`
}

function truncate(str, n) {
  /** @todo refactor to show a complete word at the end of the string */
  /** @dev refactor to split(" ") and put the elipses after the last word that fits N */
  if (!str) return ""
  return str.length > n ? `${str.slice(0, n - 1)}...` : str
}

function imageDataToBase64(data, type) {
  if (!data) return

  const base64data = Buffer.from(data).toString("base64")
  return `data:${type || "image/jpeg"};base64,${base64data}` // <-- This is so we can render it on the page
}

function base64ToImageData(data) {
  if (!data || typeof data !== "string") return

  data = data?.replace("data:image/jpeg;base64,", "")
  return Buffer.from(data, "base64")
}

function ipfsProtocolToHTTPS(uri) {
  return uri.replace("ipfs://", "https://ipfs.io/ipfs/")
}

function stripUniqueTokenInfo(token = {}) {
  delete token._id
  delete token.image
  delete token.image_data
  delete token.tokenURI
  delete token.tokenId
  delete token.timestamp
  delete token.status
  delete token.minting
  delete token.reservedUntil
  delete token.owner
  delete token.parent
  delete token.parentTokenId

  return token
}

function nftMetadata(token, appUrl) {
  const metadata = {
    name: token.name,
    description: token.description,
    tokenId: token.tokenId,
    image: token.image,
    title: token.title,
    prompt: token.prompt,
    collectionKey: token.collectionKey,
    collectionName: token.collectionName,
    attributes: [
      ...token.attributes,
      { trait_type: "Collection", value: token.collectionName },
      {
        trait_type: "Authenticity",
        value: token.parent ? "Derivative" : "Original",
      },
    ],
    external_url: `${appUrl}/${token.collectionKey}/${token._id}`,
  }
  if (token.parentTokenId) metadata.parentTokenId = token.parentTokenId
  return metadata
}

function addCollectionInfoToToken(token, collection) {
  token.collectionKey = collection.key
  token.collectionName = collection.name
  token.description = `${collection.name} - ${collection.description}`

  return token
}

module.exports = {
  cleanString,
  obfuscateAccount,
  truncate,
  imageDataToBase64,
  base64ToImageData,
  ipfsProtocolToHTTPS,
  stripUniqueTokenInfo,
  addCollectionInfoToToken,
  nftMetadata,
  test,
}

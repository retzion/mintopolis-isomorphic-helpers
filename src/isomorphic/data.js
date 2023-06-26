function test(params) {
  return {
    typeOfParams: typeof params,
    paramsLength: params?.length,
  }
}

function calcTotalOriginals(collection) {
  const traits = collection?.attributes?.filter(
    (a) => a.trait_type !== "AI Model" && a.trait_type !== "Style",
  )

  let possibileOriginals = 1
  traits.forEach((t) => {
    possibileOriginals *= t.values.length
  })

  return possibileOriginals
}

/**
 * @title collectionContainsTrait
 *
 * @param {object} collection
 * @param {string} trait
 * optional @param {string} value
 *
 * @returns {boolean} Collection contains trait name (and value if provided)
 */
function collectionContainsTrait(collection, trait, value) {
  const attribute = collection?.attributes?.find(
    (a) => a.trait_type === trait && (!value || a.values.includes(value)),
  )

  return Boolean(attribute)
}

module.exports = {
  calcTotalOriginals,
  collectionContainsTrait,
  test,
}

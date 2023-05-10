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

module.exports = {
  calcTotalOriginals,
  test,
}

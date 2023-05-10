/* global it, describe */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { assert, expect } from "chai"
// eslint-disable-next-line
import "regenerator-runtime/runtime.js"
import { data } from "../dist"

const collection = {
  attributes: [
    {
      trait_type: "Wearing",
      values: ["wearing a hat", "wearing a jacket", "wearing boots"],
    },
    {
      trait_type: "Activity",
      values: ["taking a walk", "standing around", "riding a bike"],
    },
    {
      trait_type: "Style",
      values: ["digital art"],
    },
    {
      trait_type: "AI Model",
      values: ["CompVis/stable-diffusion-v1-4"],
    },
  ],
}

describe("Testing data.js...", () => {
  describe("testing data.test() function...", () => {
    it("function exists", () => {
      assert(data.test)
    })

    it("function returns a result", () => {
      const result = data.test("test")

      assert(result)
    })

    it("function returns the correct result", () => {
      const arrayResult = data.test([1, 2, 3])
      expect(arrayResult.typeOfParams).to.equal("object")
      expect(arrayResult.paramsLength).to.equal(3)

      const numberResult = data.test(9)
      expect(numberResult.typeOfParams).to.equal("number")

      const objectResult = data.test({ isObject: true })
      expect(objectResult.typeOfParams).to.equal("object")

      const stringResult = data.test("test")
      expect(stringResult.typeOfParams).to.equal("string")
    })
  })

  describe("testing data.calcTotalOriginals() function...", () => {
    it("function exists", () => {
      assert(data.calcTotalOriginals)
    })

    const result = data.calcTotalOriginals(collection)
    it("function returns a result", () => {
      assert(result)
    })

    it("function returns the correct result", () => {
      expect(result).to.equal(9)
    })
  })
})

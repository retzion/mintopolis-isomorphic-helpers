/* global it, describe */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { assert, expect } from "chai"
// eslint-disable-next-line
import "regenerator-runtime/runtime.js"
import { crypto } from "../dist"

describe("Testing crypto.js...", () => {
  describe("testing crypto.test() function...", () => {
    it("function exists", () => {
      assert(crypto.test)
    })

    it("function returns a result", () => {
      const result = crypto.test("test")

      assert(result)
    })

    it("function returns the correct result", () => {
      const arrayResult = crypto.test([1, 2, 3])
      expect(arrayResult.typeOfParams).to.equal("object")
      expect(arrayResult.paramsLength).to.equal(3)

      const numberResult = crypto.test(9)
      expect(numberResult.typeOfParams).to.equal("number")

      const objectResult = crypto.test({ isObject: true })
      expect(objectResult.typeOfParams).to.equal("object")

      const stringResult = crypto.test("test")
      expect(stringResult.typeOfParams).to.equal("string")
    })
  })
})

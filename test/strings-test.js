/* global it, describe */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { assert, expect } from "chai"
// eslint-disable-next-line
import "regenerator-runtime/runtime.js"
import { strings } from "../dist"

const testAddresses = ["0xB2Cc4d838daAA1A2C2ae3a8381A0ACA2F86b3591"]

describe("Testing strings.js...", () => {
  describe("testing strings.test() function...", () => {
    it("function exists", () => {
      assert(strings.test)
    })

    it("function returns a result", () => {
      const result = strings.test("test")

      assert(result)
    })

    it("function returns the correct result", () => {
      const arrayResult = strings.test([1, 2, 3])
      expect(arrayResult.typeOfParams).to.equal("object")
      expect(arrayResult.paramsLength).to.equal(3)

      const numberResult = strings.test(9)
      expect(numberResult.typeOfParams).to.equal("number")

      const objectResult = strings.test({ isObject: true })
      expect(objectResult.typeOfParams).to.equal("object")

      const stringResult = strings.test("test")
      expect(stringResult.typeOfParams).to.equal("string")
    })
  })

  describe("testing strings.obfuscateAccount() function...", () => {
    it("function exists", () => {
      assert(strings.obfuscateAccount, "function does not exist")
    })

    it("function returns a result", () => {
      const result = strings.obfuscateAccount(testAddresses[0])

      assert(result, "function fails to return a value")
    })

    it("function returns the correct result", () => {
      const result = strings.obfuscateAccount(testAddresses[0])

      assert(result, "function fails to return a value")
      expect(result).to.contain("...")
    })
  })
})

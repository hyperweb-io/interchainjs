import { isObjectLike, isUint8Array } from "./typechecks";

describe("typechecks", () => {
  describe("isObjectLike", () => {
    it("should recognize object-like values", () => {
      expect(isObjectLike({})).toBe(true);
      expect(isObjectLike({ key: "value" })).toBe(true);
      expect(isObjectLike([])).toBe(true);
      expect(isObjectLike(new Date())).toBe(true);
      expect(isObjectLike(/regex/)).toBe(true);
      expect(isObjectLike(new Uint8Array())).toBe(true);
      expect(isObjectLike(new class Test {})).toBe(true);
    });

    it("should reject primitives and null/undefined", () => {
      expect(isObjectLike(null)).toBe(false);
      expect(isObjectLike(undefined)).toBe(false);
      expect(isObjectLike(42)).toBe(false);
      expect(isObjectLike("string")).toBe(false);
      expect(isObjectLike(true)).toBe(false);
      expect(isObjectLike(Symbol())).toBe(false);
    });

    it("should reject functions", () => {
      expect(isObjectLike(() => {})).toBe(false);
      expect(isObjectLike(function named() {})).toBe(false);
    });
  });

  describe("isUint8Array", () => {
    const typedArrays = [
      Int8Array,
      Uint8ClampedArray,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array,
    ];

    it("should identify pure Uint8Array instances", () => {
      expect(isUint8Array(new Uint8Array())).toBe(true);
      expect(isUint8Array(new Uint8Array([1, 2, 3]))).toBe(true);
    });

    it("should reject Node.js Buffers", () => {
      expect(isUint8Array(Buffer.from("test"))).toBe(false);
      expect(isUint8Array(Buffer.alloc(10))).toBe(false);
    });

    it("should reject other TypedArray variants", () => {
      typedArrays.forEach((TypedArray) => {
        expect(isUint8Array(new TypedArray())).toBe(false);
      });
    });

    it("should reject non-typedarray objects", () => {
      expect(isUint8Array({})).toBe(false);
      expect(isUint8Array([])).toBe(false);
      expect(isUint8Array(new DataView(new ArrayBuffer(2)))).toBe(false);
      expect(isUint8Array({ constructor: { name: "Uint8Array" } })).toBe(false);
    });

    it("should reject primitive values", () => {
      expect(isUint8Array(undefined)).toBe(false);
      expect(isUint8Array(null)).toBe(false);
      expect(isUint8Array(123)).toBe(false);
      expect(isUint8Array("buffer")).toBe(false);
      expect(isUint8Array(true)).toBe(false);
    });
  });
});

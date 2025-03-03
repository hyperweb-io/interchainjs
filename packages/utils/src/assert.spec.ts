import { assert } from "./asserts";

describe("assert", () => {
  it("should not throw when condition is truthy", () => {
    expect(() => assert(true)).not.toThrow();
    expect(() => assert(1)).not.toThrow();
    expect(() => assert("test")).not.toThrow();
    expect(() => assert({})).not.toThrow();
  });

  it("should throw Error (not EmptyError) with default message when falsy", () => {
    expect(() => assert(false)).toThrow(Error);
    expect(() => assert(false)).toThrow("assertion failed");
    expect(() => assert(0)).toThrow("assertion failed");
    expect(() => assert("")).toThrow("assertion failed");
  });

  it("should throw with custom message when provided", () => {
    const messages = [
      "Custom error",
      "Validation failed",
      "Unexpected null value"
    ];

    for (const msg of messages) {
      expect(() => assert(false, msg)).toThrow(msg);
    }
  });

  it("should work with type narrowing", () => {
    // Test successful case
    const value: string | null = "test";
    assert(value !== null);
    expect(value.length).toBe(4);

    // Test failure case
    const nullValue: string | null = null;
    expect(() => assert(nullValue !== null)).toThrow("assertion failed");
  });
});

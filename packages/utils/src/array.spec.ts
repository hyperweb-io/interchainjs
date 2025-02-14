import { startsWithArray } from "./arrays";

describe("array", () => {
  describe("startsWithArray", () => {
    describe('when arrays have same length', () => {
      it('returns true for identical arrays', () => {
        expect(startsWithArray([], [])).toEqual(true);
        expect(startsWithArray([10, 20, 30], [10, 20, 30])).toEqual(true);
      });

      it('returns false for different arrays', () => {
        expect(startsWithArray([10, 20, 30], [10, 20, 99])).toEqual(false);
        expect(startsWithArray([10, 20, 30], [99, 99, 99])).toEqual(false);
      });
    });

    describe('when array A is shorter than B', () => {
      it('always returns false', () => {
        expect(startsWithArray([], [10])).toEqual(false);
        expect(startsWithArray([10], [10, 20])).toEqual(false);
        expect(startsWithArray([10, 20], [10, 20, 30])).toEqual(false);
      });
    });

    describe('when array A is longer than B', () => {
      it('returns true when initial elements match', () => {
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20, 30, 40, 50])).toEqual(true);
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20, 30, 40])).toEqual(true);
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20, 30])).toEqual(true);
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20])).toEqual(true);
        expect(startsWithArray([10, 20, 30, 40, 50], [10])).toEqual(true);
        expect(startsWithArray([10, 20, 30, 40, 50], [])).toEqual(true);
      });

      it('returns false when initial elements differ', () => {
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20, 30, 40, 99])).toEqual(false);
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20, 30, 99])).toEqual(false);
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 20, 99])).toEqual(false);
        expect(startsWithArray([10, 20, 30, 40, 50], [10, 99])).toEqual(false);
        expect(startsWithArray([10, 20, 30, 40, 50], [99])).toEqual(false);
      });
    });
  });
});

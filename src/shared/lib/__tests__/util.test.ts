import {twoSum} from '../util';

describe('twoSum', () => {
  it('finds [1,2] for input [2,7,11,15], target 9', () => {
    const input = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(input, target)).toEqual([1, 2]);
  });

  it('finds [1,3] for input [2,3,4], target 6', () => {
    const input = [2, 3, 4];
    const target = 6;
    expect(twoSum(input, target)).toEqual([1, 3]);
  });

  it('finds [1,2] for input [-1,0], target -1', () => {
    const input = [-1, 0];
    const target = -1;
    expect(twoSum(input, target)).toEqual([1, 2]);
  });

  // you can also add edge‐cases:
  it('returns [] when no pair sums to target', () => {
    const input = [1, 2, 3];
    const target = 7;
    expect(twoSum(input, target)).toEqual([]);
  });
});

import { expect } from 'chai';
import isMin from './';

describe('isMin', () => {
  it('should return true', () => {
    expect(isMin('Hello', 0)).to.be.true;
    expect(isMin('Hello World!', 6)).to.be.true;
    expect(isMin('Hi', 2)).to.be.true;
  });

  it('should return false', () => {
    expect(isMin('Hello', 10)).to.be.false;
    expect(isMin('Hi', 3)).to.be.false;
  });
});

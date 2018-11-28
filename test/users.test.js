const {describe, it, expect} = require('chai');

describe('Test', () => {
  it('first test', (done) => {
    expect([1, 2, 3]).to.have.lengthOf(3);
    done();
  });
});
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Test', () => {
  it('first test', (done) => {
    expect([1, 2, 3]).to.have.lengthOf(3);
    done();
  });
});
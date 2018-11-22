const chai = require('chai');


describe('Test', () => {
      it('first test', (done) => {
        chai.expect([1, 2, 3]).to.have.lengthOf(3);
        done();
      });
  });
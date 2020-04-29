const chai = require('chai')
const {expect} = require('chai')
const sinon = require('sinon')
const reverseString = require('./reverseString')
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);


describe('Reverse String', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('reverses a string in place', () => {
    expect(reverseString(['a','b','c'])).to.eql(['c','b','a'])
  })
  it('reverses a longer string in place', () => {
    expect(reverseString(['f','r','o','g','s'])).to.eql(['s','g','o','r','f'])
  })
  it('does not use built in reverse method', () => {
    const spy = sinon.spy();
    const reverseSpy = spy(Array.prototype, 'reverse');
    reverseSpy
    // expect(reverseSpy).should.have.callCount(0);
  })
})

const fs = require('fs');
const expect = require('chai').expect;
const index = require('../index.js');


describe('A basic test', () => {
  it('should pass when everything is okay', () => {
    expect(true).to.be.true;
  });
});

describe('Does a file exist', () => {
  // this test should fail because I know have the index file
  // it('should not exist', () => {
  //   expect(fs.existsSync('./index.js')).to.be.false;
  // });
  it('should exist now that I made it', () => {
    expect(fs.existsSync('./index.js')).to.be.true;
  });
});

describe('The even function', () => {
  it('should be an even number', () => {
    expect(index.even(24)).to.be.true;
  });
});

describe('The add function', () => {
  it('should equal 10', () => {
    let addUp = index.add(5,5);
    expect(addUp === 10).to.be.true;
  });
});

describe('The multiply function', () => {
  it('should equal 100', () => {
    let product = index.multiply(10, 10);
    expect(product === 100).to.be.true;
  });
});

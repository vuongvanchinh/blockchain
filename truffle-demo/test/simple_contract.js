const truffleAssert = require('truffle-assertions');
const SimpleContract = artifacts.require("SimpleContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleContract", function (accounts) {
  let instance;
  before('should setup the contract instance', async () => {
    instance = await SimpleContract.deployed();
  });

  it("should return list account", async function () {
    const value = await instance.getName();
    assert.equal(value, 'name');
  });


  it('It returrn change the name', async () =>{
    await instance.changeName('your name');
    const value = instance.getName();
    assert.equal(value, 'your name');
  })

  it("It should execute only by the owner", async () => {
    await truffleAssert.reverts(instance.changeName("modifier", {from: accounts[1]} ))
  });
  
});

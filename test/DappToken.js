const DappToken = artifacts.require('./DappToken.sol')

contract('DappToken', function(accounts) {
  it ('sets the toal supply upon deployment', function() {
    return DappToken.deployed().then(function(instance) {
      const tokenInstance = instance;
      return tokenInstance.totalSupply();
    })
    .then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000')
    })
  })
})
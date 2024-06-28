require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/oOKOmZhmx_akIf1s6wseaiwNWX7LBdN_",
      accounts: ["15582b9693da04f14cb47462e4e6a20dd63c0ba9d10d3347f28e4842eecc00ee"]
    }
  }
};

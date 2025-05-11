require("@nomicfoundation/hardhat-toolbox");
require("@oasisprotocol/sapphire-hardhat");


module.exports = {
  solidity: "0.8.24",
  networks: {
    sapphire: {
      url: "https://testnet.sapphire.oasis.dev",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 0x5aff,
    }
  },
};

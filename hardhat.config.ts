import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";
import "./scripts/tasks";
import "solidity-coverage";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { ethers } from "ethers";

const defaultKey =
  "0000000000000000000000000000000000000000000000000000000000000001";
const defaultRpcUrl = "https://localhost:8545";
const defaultEtherBalance = "100000000";

export default {
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./build",
    tests: "./tests"
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: false
    },
    kovan: {
      url: process.env.KOVAN_URL || defaultRpcUrl,
      accounts: [process.env.PRIVATE_KEY || defaultKey]
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || defaultRpcUrl,
      accounts: [process.env.PRIVATE_KEY || defaultKey]
    },
    mainnet: {
      url: process.env.MAINNET_URL || defaultRpcUrl,
      accounts: [process.env.PRIVATE_KEY || defaultKey]
    },
    polygonMainnet: {
      url: process.env.POLY_URL || defaultRpcUrl,
      accounts: [process.env.PRIVATE_KEY || defaultKey]
    },
    polygonMumbai: {
      url: process.env.MUMBAI_URL || defaultRpcUrl,
      accounts: [process.env.PRIVATE_KEY || defaultKey]
    },
    goerli: {
      url: process.env.GOERLI_URL || defaultRpcUrl,
      accounts: [process.env.PRIVATE_KEY || defaultKey]
    }
  },
  etherscan: {
    // Obtain etherscan API key at https://etherscan.io/
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200
          }
        }
      }
    ]
  },
  typechain: {
    outDir: "build/typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifacts/*.json"]
  }
};

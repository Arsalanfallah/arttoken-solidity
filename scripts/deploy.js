const { ethers } = require("hardhat");

async function main() {
  const ArtworkNFT = await ethers.getContractFactory("ArtworkNFT");
  const artworkNFT = await ArtworkNFT.deploy();

  const deployedContract = await artworkNFT;

  console.log("ArtworkNFT deployed to:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArtworkNFT", function () {
  it("Should mint an NFT", async function () {
    const ArtworkNFT = await ethers.getContractFactory("ArtworkNFT");
    const artworkNFT = await ArtworkNFT.deploy();
    await artworkNFT;

    const [owner] = await ethers.getSigners();

    await artworkNFT.safeMint(owner.address);

    expect(await artworkNFT.ownerOf(0)).to.equal(owner.address);
  });
});
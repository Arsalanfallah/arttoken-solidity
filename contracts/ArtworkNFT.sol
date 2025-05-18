// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ArtworkNFT is ERC721 {
    uint256 private _tokenIdCounter;

    constructor() ERC721("ArtworkNFT", "ART") {}

    function safeMint(address to) public {
        uint256 tokenId = _tokenIdCounter++;
        _safeMint(to, tokenId);
    }
}
// test/WalkToken.test.js

const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("WalkToken Contract", function () {
  // Fixture to deploy the contract and set up initial state
  async function deployWalkTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const WalkToken = await ethers.getContractFactory("WalkToken");
    const walkToken = await WalkToken.deploy();

    await walkToken.waitForDeployment(); // Ensure the contract is fully deployed

    return { walkToken, owner, addr1, addr2 };
  }

  describe("Deployment", function () {
    it("Should deploy correctly and set the right owner", async function () {
      const { walkToken, owner } = await loadFixture(deployWalkTokenFixture);

      expect(await walkToken.owner()).to.equal(owner.address);
    });

    it("Should have the correct initial total supply", async function () {
      const { walkToken } = await loadFixture(deployWalkTokenFixture);

      const totalSupply = await walkToken.totalSupply();
      expect(totalSupply).to.equal(20000); // 20 * 10^3 (custom decimals)
    });

    it("Owner should have the initial balance", async function () {
      const { walkToken, owner } = await loadFixture(deployWalkTokenFixture);

      const ownerBalance = await walkToken.balanceOf(owner.address);
      expect(ownerBalance).to.equal(20000);
    });

    it("Should set custom decimals to 3", async function () {
      const { walkToken } = await loadFixture(deployWalkTokenFixture);

      const decimals = await walkToken.decimals();
      expect(decimals).to.equal(3);
    });
  });

 describe("Minting Tokens", function () {
    it("Owner can mint tokens based on steps", async function () {
      const { walkToken, owner, addr1 } = await loadFixture(deployWalkTokenFixture);

      await walkToken.mintTokens(addr1.address, 1000); // Minting for 1000 steps
      const addr1Balance = await walkToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(1000);
    });

      it("Should not allow a non-owner to mint tokens", async function () {
        const { WalkToken, walkToken, owner, addr1 } = await loadFixture(
            deployWalkTokenFixture
        );
        await expect(walkToken.connect(owner).mintTokens(owner.address, 0)).to.be.revertedWith("Not enough steps");
      });

    });

  describe("Utility Functions", function () {
    it("stepsToTokens should convert steps correctly", async function () {
      const { walkToken } = await loadFixture(deployWalkTokenFixture);

      const tokens = await walkToken.stepsToTokens(5000);
      expect(tokens).to.equal(5000);
    });
  });
});
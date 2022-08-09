const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  const data = {
    address: marketplace.address,
    abi: JSON.parse(marketplace.interface.format('json'))
  }

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync('./src/Marketplace.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



  //API Key   45ae12320cf4ac167d2f
  //API Secret  f0779a4f5d387f0ec444b74e4f08c4d697cb71b89c67cf9b5ab2e0fee7d3a702

  //JWT (Secret access token) eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZmE1ZGZjZi04ODY5LTRhNDktODY3Mi04ODVlYzc3MWRjMmUiLCJlbWFpbCI6InNrMTkyMTk2QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0NWFlMTIzMjBjZjRhYzE2N2QyZiIsInNjb3BlZEtleVNlY3JldCI6ImYwNzc5YTRmNWQzODdmMGVjNDQ0Yjc0ZTRmMDhjNGQ2OTdjYjcxYjg5YzY3Y2Y5YjVhYjJlMGZlZTdkM2E3MDIiLCJpYXQiOjE2NTk5ODAzNjV9.Y_O7tY-cyBThd_u8S2U94-R3eFSL1_QVEVcxesIx2e4
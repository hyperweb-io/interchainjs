const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

(async () => {
  const accounts = await provider.listAccounts();
  console.log("Accounts:", accounts);

  const privateKey = "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113b37c7a2b005b3a4e7d9f3c74"; // 示例私钥
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("Wallet address:", wallet.address);
  const balance = await wallet.getBalance();
  console.log("Wallet balance:", ethers.utils.formatEther(balance), "ETH");
})()
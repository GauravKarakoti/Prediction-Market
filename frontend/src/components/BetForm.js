import { OPLGateway } from "@oasisprotocol/opl";

async function placeCrossChainBet(prediction) {
  // Connect to Ethereum (e.g., MetaMask)
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  // Send transaction via OPL Gateway
  const gateway = new OPLGateway("https://opl-gateway.oasis.io");
  const payload = ethers.AbiCoder.defaultAbiCoder().encode(["bool"], [prediction]);
  
  const tx = await gateway.sendMessage({
    sender: signer.address,
    destination: "sapphire", // Sapphire ParaTime
    payload: payload,
    feeToken: "ETH", // Gas paid in ETH
  });

  await tx.wait();
  console.log("Bet placed cross-chain!");
}
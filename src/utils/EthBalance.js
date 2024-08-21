import axios from "axios";

const ALCHEMY_API_KEY = import.meta.env.ALCHEMY_API_KEY; // apni api key daal le vai
const ALCHEMY_BASE_URL = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

export async function fetchEthBalance(address) {
  try {
    const response = await axios.post(ALCHEMY_BASE_URL, {
      jsonrpc: "2.0",
      id: 1,
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    const balanceInWei = response.data.result;
    return parseFloat(balanceInWei) / 1e18; // Convert Wei to Ether
  } catch (error) {
    console.error("Error fetching Ethereum balance:", error);
    return 0;
  }
}

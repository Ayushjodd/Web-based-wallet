import { useState } from "react";
import SeedPhrase from "./SeedPhrase";
import { SolanaWallet } from "./SolanaWallet";
import { EthWallet } from "./EthWallet";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="text-center items-center justify-center border mx-[34%] mt-20 p-4 shadow-lg rounded-lg bg-white">
        <div className="pb-5 select-none">
          <span className="text-3xl font-semibold  hover:underline">
            Web-Based Wallet
          </span>
        </div>
        <SeedPhrase setMnemonic={setMnemonic} />
        <SolanaWallet mnemonic={mnemonic} />
        <EthWallet mnemonic={mnemonic} />
      </div>
    </div>
  );
}

export default App;

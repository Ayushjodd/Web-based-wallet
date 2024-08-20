import { useState } from "react";
import PropTypes from "prop-types";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export function SolanaWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);

  return (
    <div>
      <button
        className="bg-black w-full mb-4 text-white rounded-lg  py-2 font-semibold hover:bg-[#2f2f31] transition-all"
        onClick={function () {
          const seed = mnemonicToSeed(mnemonic);
          const path = `m/44'/501'/${currentIndex}'/0'`;
          const derivedSeed = derivePath(path, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
          const keypair = Keypair.fromSecretKey(secret);
          setCurrentIndex(currentIndex + 1);
          setPublicKeys([...publicKeys, keypair.publicKey]);
        }}
      >
        Add Solana Wallet
      </button>
      <div className="border p-3 bg-[#f4f4f5] rounded-md mx-1 text-sm mb-1">
        Solana Wallet Address
        {publicKeys.map((p, index) => (
          <div className="border bg-white p-1 rounded-md" key={index}>
            {p.toBase58()}
          </div>
        ))}
      </div>
    </div>
  );
}

SolanaWallet.propTypes = {
  mnemonic: PropTypes.string.isRequired,
};

import { useState } from "react";
import PropTypes from "prop-types";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  return (
    <div>
      <button
        className="mt-4 w-full bg-black text-white rounded-lg  mb-4 py-2 font-semibold hover:bg-[#2f2f31] transition-all"
        onClick={async function () {
          const seed = await mnemonicToSeed(mnemonic);
          const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
          const hdNode = HDNodeWallet.fromSeed(seed);
          const child = hdNode.derivePath(derivationPath);
          const privateKey = child.privateKey;
          const wallet = new Wallet(privateKey);
          setCurrentIndex(currentIndex + 1);
          setAddresses([...addresses, wallet.address]);
        }}
      >
        Add ETH Wallet
      </button>
      <div className="border bg-[#f4f4f5] p-3 rounded-md text-sm">
        Ethereum Wallet Address
        {addresses.map((p, index) => (
          <div className="border rounded-md bg-white p-1" key={index}>
            Eth - {p}
          </div>
        ))}
      </div>
    </div>
  );
};

EthWallet.propTypes = {
  mnemonic: PropTypes.string.isRequired,
};

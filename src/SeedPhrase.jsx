import { useState } from "react";
import { generateMnemonic } from "bip39";

function SeedPhrase() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      <button
        className="bg-black w-full mb-4 text-white rounded-lg  py-2 font-semibold hover:bg-[#2f2f31] transition-all"
        onClick={async function () {
          const mn = await generateMnemonic();
          setMnemonic(mn);
        }}
      >
        Create Seed Phrase
      </button>
      <div className="bg-muted rounded-lg p-4 w-full border bg-[#f4f4f5] mb-4 ">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground ">Seed Phrase</p>
          <div className="bg-background rounded-md p-2 text-sm font-mono border bg-white ">
            {mnemonic}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeedPhrase;

import { useNnsName } from "@nnsprotocol/resolver-wagmi";
import { useState } from "react";
import { isAddress } from "viem/utils";

function App() {
  const [address, setAddress] = useState("0x543D53d6f6d15adB6B6c54ce2C4c28a5f2cCb036");
  const name = useNnsName({
    address: isAddress(address) ? address : undefined,
  });

  return (
    <>
      <div>
        <h2>NNS Resolver Example with Wagmi</h2>

        <input name="" value={address} style={{ width: 400 }} onChange={(e) => setAddress(e.target.value)} />

        <p>NNS NAME: {name.data || ""}</p>
      </div>
    </>
  );
}

export default App;

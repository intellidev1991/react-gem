The Hook to store state in sessionStorage with **Base64** encoder. The value of state did not wipe-out when you refresh the page.

**The value will be stored in sessionStorage just like below:**

<table>
  <tr>
    <th>Clear Input Text</th>
    <th>Base64 stored Text</th>
  </tr>
  <tr>
    <td>my clear text</td>
    <td>bXkgY2xlYXIgdGV4dA==</td>
  </tr>
</table>

**(After change refresh the page to see the result)**

```jsx
import React, { useState, useEffect } from "react";
import { useStateSessionBase64 } from "react-gem";

const SampleBase64 = () => {
  const KEY_STORE_B64 = "key_store_b64";

  const [state, setState] = useStateSessionBase64({
    key: KEY_STORE_B64,
    init: 1,
  });

  //--------------------- JUST For show the functionality of this hook, DO NOT NEED to do this in real app
  const [showEncodedData, setEncodedData] = useState("");
  useEffect(() => {
    setEncodedData(sessionStorage.getItem(KEY_STORE_B64));
  }, [state]);
  //---------------------
  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click to change session state</button>
      <button
        onClick={() => {
          sessionStorage.removeItem(KEY_STORE_B64);
          setState(1);
        }}
      >
        Remove sessionItem
      </button>
      <p>Current encoded value: {showEncodedData}</p>
      <p>Current decoded value: {state}</p>
    </div>
  );
};

<SampleBase64 />;
```

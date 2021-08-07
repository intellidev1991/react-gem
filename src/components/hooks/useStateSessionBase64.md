The Hook to store state in sessionStorage with **Base64** encoder. The value of state did not wipe-out when you refresh the page.

**The value will be stored in sessionStorage just like below:**

| Clear Input Text | Base64 stored Text in sessionStorage |
| ---------------- | ------------------------------------ |
| my clear text    | bXkgY2xlYXIgdGV4dA==                 |

**(After change refresh the page to see the result)**

```jsx
import React, { useState, useEffect } from "react";
import { useStateSessionBase64 } from "react-gem";

const SampleBase64 = () => {
  const KEY_STORE_B64 = "key_useStateSessionBase64";

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
      <button onClick={() => setState(state + 1)}>Click to change sessionStorage state</button>
      <button
        onClick={() => {
          sessionStorage.removeItem(KEY_STORE_B64);
          setState(1);
        }}
      >
        Remove sessionStorage Item
      </button>
      <p>Current encoded value: {showEncodedData}</p>
      <p>Current decoded value: {state}</p>
    </div>
  );
};

<SampleBase64 />;
```

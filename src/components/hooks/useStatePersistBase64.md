The Hook to store state in localStorage with **Base64** encoder. The value of state did not wipe-out when you refresh or close the browser.

**The value will be stored in localStorage just like below:**

| Clear Input Text | Base64 stored Text in localStorage |
| ---------------- | ---------------------------------- |
| my clear text    | bXkgY2xlYXIgdGV4dA==               |

**(After change refresh the page to see the result)**

```jsx
import React, { useState, useEffect } from "react";
import { useStatePersistBase64 } from "react-gem";

const PersistBase64 = () => {
  const KEY_STORE_B64 = "key_useStatePersistBase64";

  const [state, setState] = useStatePersistBase64({
    key: KEY_STORE_B64,
    init: 1,
  });

  //--------------------- JUST For show the functionality of this hook, DO NOT NEED to do this in real app
  const [showEncodedData, setEncodedData] = useState("");
  useEffect(() => {
    setEncodedData(localStorage.getItem(KEY_STORE_B64));
  }, [state]);
  //---------------------
  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click to change localStorage state</button>
      <button
        onClick={() => {
          localStorage.removeItem(KEY_STORE_B64);
          setState(1);
        }}
      >
        Remove localStorage Item
      </button>
      <p>Current encoded value: {showEncodedData}</p>
      <p>Current decoded value: {state}</p>
    </div>
  );
};

<PersistBase64 />;
```

The Hook to store state in localStorage **without** any encoder. The value of state did not wipe-out when you refresh or close the browser.

**(After change refresh the page to see the result)**

```jsx
import React from "react";
import { useStatePersistRaw } from "react-gem";

const PersistRaw = () => {
  const KEY_STORE_RAW = "key_useStatePersistRaw";

  const [state, setState] = useStatePersistRaw({
    key: KEY_STORE_RAW,
    init: 1,
  });

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click to change localStorage state</button>
      <button
        onClick={() => {
          localStorage.removeItem(KEY_STORE_RAW);
          setState(1);
        }}
      >
        Remove localStorage Item
      </button>
      <p>Current value: {state}</p>
    </div>
  );
};

<PersistRaw />;
```

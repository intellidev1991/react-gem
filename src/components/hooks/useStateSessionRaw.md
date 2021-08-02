The Hook to store state in sessionStorage **without** any encoder. The value of state did not wipe-out when you refresh the page.

**(After change refresh the page to see the result)**

```jsx
import React from "react";
import { useStateSessionRaw } from "react-gem";

const SessionRaw = () => {
  const KEY_STORE_RAW = "key_store_raw";

  const [state, setState] = useStateSessionRaw({
    key: KEY_STORE_RAW,
    init: 1,
  });

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click to change session state</button>
      <button
        onClick={() => {
          sessionStorage.removeItem(KEY_STORE_RAW);
          setState(1);
        }}
      >
        Remove sessionItem
      </button>
      <p>Current value: {state}</p>
    </div>
  );
};

<SessionRaw />;
```

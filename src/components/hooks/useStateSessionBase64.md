useStateSessionBase64 example:

```jsx static
import React from "react";
import { useStateSessionBase64 } from "react-gem";

const MyComponent = () => {
  const [state, setState] = useStateSessionBase64(
    "KEY_1",
    "My value saved as Base64 encoded text in the sessionStorage",
  );
  return <div>{state}</div>;
};
```

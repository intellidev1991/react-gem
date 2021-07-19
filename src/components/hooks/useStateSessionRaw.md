useStateSessionRaw example:

```jsx static
import React from "react";
import { useStateSessionRaw } from "react-gem";

const MyComponent = () => {
  const [state, setState] = useStateSessionRaw("KEY_1", "My value saved as raw text in the sessionStorage");
  return <div>{state}</div>;
};
```

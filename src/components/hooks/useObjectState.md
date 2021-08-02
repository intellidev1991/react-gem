Create a state for an object with useful manipulation methods

```jsx
import { useObjectState } from "react-gem";

const MyComponent = ({}) => {
  const [state, setState] = useObjectState({
    name: "test",
    loadSize: 20,
    flag: false,
  });

  return (
    <div>
      <button
        onClick={() => {
          //for update the specific state
          setState({ name: "Test1", flag: true });
        }}
      >
        Change state
      </button>
      <br />
      name is: {state.name}
      {state.flag && <p>Visible now</p>}
    </div>
  );
};

<MyComponent />;
```

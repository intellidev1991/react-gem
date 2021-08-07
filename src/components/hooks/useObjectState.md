use this Hook in Functional-Component to update multiple states in a single line of code, Just like Class Components

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
        className="btn btn-primary"
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

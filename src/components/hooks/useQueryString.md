Convert any Object into QueryString format. Use this method when you want to pass some parameters as query-string to the target page.

```jsx static
import { useQueryString } from "react-gem";
import { useHistory } from "react-router-dom";

const UserPage = ({}) => {
  let history = useHistory();

  const onClickHandler = () => {
    const search = useQueryString({ id: 1, type: "user", email: "test@yahoo.com" });
    history.push({
      pathname: "/user/view",
      search,
    });
  };

  return <button onClick={onClickHandler}>click me to change route</button>;
};
```

**Test the example:**

```jsx
import { useQueryString } from "react-gem";

const Sample = ({}) => {
  const onClickHandler = () => {
    const search = useQueryString({ id: 1, type: "user", email: "test@yahoo.com" });
    alert(search);
  };

  return <button onClick={onClickHandler}>click me to show the query-string inside the alert</button>;
};

<Sample />;
```

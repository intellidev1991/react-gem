This Hook will get the last position of scroll-bar.

| Parameter | Type        | Default | Description                             |
| --------- | ----------- | ------- | --------------------------------------- |
| ref       | Element ref | ---     | pass the **element ref** using useRef() |

```jsx
import React, { useRef, useReducer } from "react";
import { useGetElementScrollPosition } from "react-gem";

const ScrollBarSample = () => {
  const ref_container_scroll = useRef();
  const el_pos = useGetElementScrollPosition(ref_container_scroll);

  const goToTopHandler = () => {
    ref_container_scroll.current.scrollTo(0, 0);
  };

  const restoreHandler = () => {
    ref_container_scroll.current.scrollTo(el_pos.x, el_pos.y);
  };

  return (
    <div>
      <button onClick={goToTopHandler}>Go to top</button>
      <button onClick={restoreHandler}>restore to pos</button>
      <p>
        Current scrollbar-Position: x:{el_pos.x}, y:{el_pos.y}
      </p>
      <div
        ref={ref_container_scroll}
        style={{ overflowY: "scroll", width: "100%", height: "80px", backgroundColor: "#c5c5c5" }}
      >
        <div style={{ width: "100%", height: "1600px", backgroundColor: "#c5a5c5" }}></div>
      </div>
    </div>
  );
};

<ScrollBarSample />;
```

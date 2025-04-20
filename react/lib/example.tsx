import React, { useEffect } from "react";

export function Example(props: { text: string, callback: () => void }) {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (count > 10) {
        props.callback()
    }
  }, [count, props])
  return (
    <div>
      <div>{props.text}</div>
      <button onClick={() => setCount(count + 1)}>You clicked {count} times!</button>
    </div>
  );
}

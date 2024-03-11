import { useState } from "react";
import loadable from "@loadable/component";

const First = loadable(() => import("./components/First"), {
  resolveComponent: (components) => components.First,
});

const Second = loadable(() => import("./components/Second"), {
  resolveComponent: (components) => components.Second,
});

export function App() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFirst((prev) => !prev)}>
        Toggle First
      </button>
      <button onClick={() => setShowSecond((prev) => !prev)}>
        Toggle Second
      </button>
      {showFirst && <First />}
      {showSecond && <Second />}
    </div>
  );
}

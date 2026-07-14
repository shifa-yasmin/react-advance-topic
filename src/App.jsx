import { useRef } from "react";

function App() {
  const count = useRef(0);

  return (
    <>
      <h2>{count.current}</h2>

      <button
        onClick={() => {
          count.current++;
          console.log(count.current);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default App;
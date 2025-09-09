import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <div class="mockup-browser border-base-300 border w-full">
        <div class="mockup-browser-toolbar">
          <div class="input">http://localhost:3000/api/hello</div>
        </div>
        <div class="grid place-content-center border-t border-base-300 h-80">
          {message}
        </div>
      </div>
    </div>
  );
}

export default App;

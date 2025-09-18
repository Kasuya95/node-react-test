import React, { useEffect, useState } from "react";

export const Two = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
     
      <div class="grid place-content-center border-t border-base-300 h-80">
        {message}
        <a className="btn btn-outline btn-primary" href="/">
          Primary
        </a>
      </div>
    </div>
  );
};

// const heading = React.createElement("h1", { id: "heading" , className: "classOne" }, "Hello world using react cdn");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

import React from 'react';
import ReactDOM from 'react-dom/client';

const TitleComponent = () => (
    <h1>I"M Title </h1>
)

const FirstComponent = () => (
  <div>
    <TitleComponent />
    <h1 className="heading">Hey I'M First Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FirstComponent />);
import React from 'react';
import "./assets/css/style.css";

function App({title}) {
  return (
    <div className="bg-gray-600 text-white p-5 border">
      {title}
    </div>
  );
}

export default App;
# Create React App

```bash
npx create-react-app my-app
cd my-app
npm start
```

* Open a web browser and go to http://localhost:3000/

* Change the App.js file and Save, then you can see the changes on the browser automatically.


### Remove everything under on src folder

### Create index.js file under src folder

### to Render element on the target, import react-dom library
```javascript
import ReactDom from "react-dom";

let el = "Hello";

ReactDOM.render(el, document.getElementById("root"));
```

### To us JSX notation, import react library
```javascript
import React from "react";
import ReactDom from "react-dom";

let el = <div>Hello React</div>;

ReactDOM.render(el, document.getElementById("root"));
```

### update el to functional component
```javascript
import React from "react";
import ReactDom from "react-dom";

function App() {
  return (
    <div>
      Hello React
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```


### create app.js file under src folder and move App functional component to app.js file
* app.js file

```javascript
import React from "react";

export default function App() {
  return (
    <div>
      Hello React
    </div>
  );
}
```

* you can rewrite the code above like this
```javascript
import React from "react";

function App() {
  return (
    <div>
      Hello React
    </div>
  );
}

export default App;
```

### udpate index.js file for immporting app.js file
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));
```

* you can use require(./App) instead of import
```javascript
import React from "react";
import ReactDom from "react-dom";
const App = require("./App").default;

ReactDOM.render(<App />, document.getElementById("root"));
```

### rewrite the functional based component with class based componenet
```javascript
import React from "react";

class App extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

export default App;
```

### how to use props on class based component
```javascript
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React"}
  }
  render() {
    return <div>{this.state.title}</div>;
  }
}

export default App;
```

### rewrite the class based componenet to function based componenent
```javascript
import React from "react";

function App() {
  return (
    <div>
      Hello React
    </div>
  );
}

export default App;
```

### using props on functional based componenent
index.js
```javascript
import React from "react";
import ReactDom from "react-dom";
import App from "./app";

ReactDOM.render(<App title="React Props"/>, document.getElementById("root"));
```

app.js
```javascript
import React from "react";

function App({title}) {
  return (
    <div>
      {title}
    </div>
  );
}

export default App;
```
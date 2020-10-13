# React Lifecycle method and Hooks

### Check constructor and render.
* add console.log() to see the logs on constructor and render.
* app.js
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor"); // added
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }

  handleClick = () => {
    this.setState({isShowing: !this.state.isShowing})
  }

  render() {
    console.log("App Render"); // added
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
          </div>
          {
            this.state.isShowing ? (
              <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              ) : null
          }
        </div>
      </section>
    );
  }
}

export default App;
```

* You can see the two logs in console.
```
App Constructor
App Render
```

### First Lifecycle Hook
* Add componentDidMount and add consol.log & setState it will render once again 
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor");
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }

  componentDidMount() {
    console.log("App Mounted");
    this.setState({title: "Hello LifeCycle"});
  }

  handleClick = () => { 
    this.setState({isShowing: !this.state.isShowing});
  }

  render() {
    console.log("App Render");
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
          </div>
          {
            this.state.isShowing ? (
              <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              ) : null
          }
        </div>
      </section>
    );
  }
}

export default App;
```

### First Lifecycle Hook
* Add componentDidMount and add consol.log & setState it will render once again 
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor");
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }

  componentDidMount() {
    console.log("App Mounted");
    this.setState({title: "Hello LifeCycle"});
  }

  componentWillUnmount() {
    console.log("App Unmounted");
  }

  handleClick = () => { 
    this.setState({isShowing: !this.state.isShowing});
  }

  render() {
    console.log("App Render");
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
          </div>
          {
            this.state.isShowing ? (
              <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              ) : null
          }
        </div>
      </section>
    );
  }
}

export default App;
```

### Remove Memory leaks by using componentWillUnmount
* App.js
```javascript
import React from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor");
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }

  componentDidMount() {
    console.log("App Mounted");
    this.setState({title: "Hello LifeCycle"});
  }

  handleClick = () => { 
    this.setState({isShowing: !this.state.isShowing});
  }

  render() {
    console.log("App Render");
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
          </div>
          {
            this.state.isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
    );
  }
}

export default App;
```

* Image.js
```javascript
import React, { Component } from 'react'

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {interval: null};
  }

  componentDidMount() {
    console.log("Images Comp Mounted");
    this.setState({
      interval: setInterval(() => {
        console.log("Hello");
      }, 1000),
    });
  }

  componentWillUnmount() {
    console.log("Images Component Unmounted");
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
    )
  }
}

```


### componentDidUpdate
* App.js
```javascript
import React from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor");
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }

  componentDidMount() {
    console.log("App Mounted");
    this.setState({title: "Hello LifeCycle"});
  }

  componentDidUpdate() {
    console.log("App Updated")
  }

  handleClick = () => { 
    this.setState({isShowing: !this.state.isShowing});
  }

  render() {
    console.log("App Render");
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
          </div>
          {
            this.state.isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
    );
  }
}

export default App;
```


### Let's convert the class based component to function based component
* App.js
```javascript
import React from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = React.useState("Hello React");
  const [isShowing, setIsShowing] = React.useState(false);

  function handleClick() { 
    setIsShowing(!isShowing;);
  }

  return (
    <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
  ); 
}

export default App;
```


### you can use import {useState} from react so that you can rewrite the code above
```javascript
import React, {useState} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(false);

  function handleClick() { 
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
    {console.log('re-rendered')}
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
  ); 
}

export default App;
```

### componentDidMount
```javascript
import React, {useState, useEffect} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(false);

  // Component Did Mount only
  useEffect(() => {
    console.log("App Mounted");
  },[]);

  function handleClick() { 
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
    {console.log('re-rendered')}
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
  ); 
}

export default App;
```

### Let's convert the class based component to function based component
* Images.js
```javascript
import React from 'react';

export default function Images() {
  return (
    <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
  )
}
```


### componentDidMount & componenetWillUnmount // error
* Images.js
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  const [myInterval, setmyInterval] = useState(initialState);
  useEffect(() => {
    console.log("Images Comp Mounted");
    setmyInterval(setInterval(()=>{
      console.log("");
    }, 1000));
    return () => {
      console.log("Images Unmount");
      clearInterval(myInterval);
    }
  }, [])

  return (
    <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
  )
}

```

### To fix the code above
* Images.js
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  useEffect(() => {
    console.log("Images Comp Mounted");
    const interval = setInterval(()=>{
      console.log("Hello");
    }, 1000);
    return () => {
      console.log("Images Unmount");
      clearInterval(interval);
    }
  }, [])

  return (
    <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" />
  )
}

```

### componentDidUpdate
* App.js
```javascript
import React, {useState, useEffect} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(null);

  useEffect(() => {
    console.log("App Mounted");
  },[]);

  useEffect(() => {
    if(isShowing !== null) {
      console.log("App Updated");
    }
  },[isShowing]);

  function handleClick() { 
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      {console.log('re-rendered')}
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
  ); 
}

export default App;
```

### The other way for componentDidUpdate using didMount
* App.js
```javascript
import React, {useState, useEffect} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(false);
  const [didMount, setdidMount] = useState(false);

  useEffect(() => {
    setdidMount(true);
    console.log("App Mounted");
  },[]);

  useEffect(() => {
    if(didMount) {
      console.log("App Updated");
    } 
  },[isShowing]);

  function handleClick() { 
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      {console.log('re-rendered')}
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? (
              <Images />
              ) : null
          }
        </div>
      </section>
  ); 
}

export default App;
```


### The other way for componentDidUpdate using useRef
* App.js
```javascript
import React, {useState, useEffect, useRef} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(false);
  const [didMount, setdidMount] = useState(false);
  const mountRef = useRef(false);

  useEffect(() => {
    setdidMount(true);
    console.log("App Mounted");
  },[]);

  useEffect(() => {
    if(mountRef.current) {
      console.log("App Updated");
    } else {
      mountRef.current = true;
    }
  },[isShowing]);

  function handleClick() { 
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      {console.log('re-rendered')}
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>Toggle Image</button>
          </div>
          {
            isShowing ? <Images /> : null
          }
        </div>
      </section>
  ); 
}

export default App;
```

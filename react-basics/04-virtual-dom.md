# Virtual Dom

### Use class based components
```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2"};
  }
  render() {
    return <div>{this.state.title}</div>;
  }
}

export default App;
```

### Update app.js style
```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2"};
  }
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="my-4">{this.state.title}</div>
        </div>
      </section>
    );
  }
}

export default App;
```

### Update app.js style
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2"};
  }
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2">Toggle Image</button>
          </div>
            <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
      </section>
    );
  }
}

export default App;
```

### add this.state.isShowing
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2">Toggle Image</button>
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

### add toggle function - states are immutable
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }
  // states are immutable
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={()=> (this.state.isShowing = true)}>Toggle Image</button>
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

### add toggle function - apply setState()
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }
  // states are immutable
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={()=> (this.setState({isShowing: true}))}>Toggle Image</button>
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

### add toggle function - apply toggle effect
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }
  // states are immutable
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
          <div className="my-4">{this.state.title}</div>
            <button className="p-1 bg-blue-700 text-white my-2" onClick={()=> (this.setState({isShowing: !this.state.isShowing}))}>Toggle Image</button>
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


### take setState as function
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
  }
  // states are immutable

  handleClick = () => {
    this.setState({isShowing: !this.state.isShowing})
  }
  render() {
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


### you can rewrite the arrow function with normal function. 
* recommend to use arrow function above.
```javascript
import React from 'react';
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Hello React 2", isShowing: false};
    this.handleClick = this.handleClick.bind(this); // updated
  }

  handleClick() { // updated
    setState({isShowing: !this.state.isShowing}) // updated
  }
  render() {
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
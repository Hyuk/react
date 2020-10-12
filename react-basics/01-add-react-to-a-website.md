### Create Simple HTMl File
index.html
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### add h1 tag using javascript
index.html
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let root = document.getElementById("root");
      let el = document.createElement("h1");
      el.innerText = "React Tutorial";
      root.appendChild(el); // DOM node
      console.log(root);
    </script>
  </body>
</html>
```

### add class to h1 tag
index.html
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let root = document.getElementById("root");
      let el = document.createElement("h1");
      el.innerText = "React Tutorial";
      el.className += "red";
      root.appendChild(el); // DOM node
      console.log(root);
    </script>
  </body>
</html>
```

### Add React.js to website
```html
<!-- Load React.  -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<!-- Load our React component. -->
<script src="like_button.js"></script>
```


### Add React.js to website
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let root = document.getElementById("root");
      let el = document.createElement("h1");
      el.innerText = "React Tutorial";
      el.className += "red";
      root.appendChild(el); // DOM node
      console.log(root);
    </script>
  </body>
</html>
```

### Update script using React syntax
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let root = document.getElementById("root");
      let el = React.createElement("h1");
      console.log(el); // you can see object and bunch of properties.
      ReactDOM.appendChild(el);  // Error
    </script>
  </body>
</html>
```


### update appendchild to render in React
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let root = document.getElementById("root");
      let el = React.createElement("h1");  // createElement(type, props, children)
      console.log(el); // you can see object and bunch of properties.
      ReactDOM.render(el, root);  // render needs two parameter render(element, target)
    </script>
  </body>
</html>
```

### create element with child element
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let root = document.getElementById("root");
      let el = React.createElement("h1", null, "React Tutorial");  // createElement(type, props, children)
      console.log(el); // you can see object and bunch of properties.
      ReactDOM.render(el, root);  // render needs two parameter render(element, target)
    </script>
  </body>
</html>
```

### clean up the react code
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let el = React.createElement("h1", null, "React Tutorial");  // createElement(type, props, children)
      ReactDOM.render(el, document.getElementById("root"));  // render needs two parameter render(element, target)
    </script>
  </body>
</html>
```

### exploring react.development.js
* at the end of react.development.js file, you can see the export functions.
* You can use any of the functions in your react project.
```javascript
  exports.Children = Children;
  exports.Component = Component;
  exports.Fragment = REACT_FRAGMENT_TYPE;
  exports.Profiler = REACT_PROFILER_TYPE;
  exports.PureComponent = PureComponent;
  exports.StrictMode = REACT_STRICT_MODE_TYPE;
  exports.Suspense = REACT_SUSPENSE_TYPE;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals$1;
  exports.cloneElement = cloneElement$1;
  exports.createContext = createContext;
  exports.createElement = createElement$1;
  exports.createFactory = createFactory;
  exports.createRef = createRef;
  exports.forwardRef = forwardRef;
  exports.isValidElement = isValidElement;
  exports.lazy = lazy;
  exports.memo = memo;
  exports.useCallback = useCallback;
  exports.useContext = useContext;
  exports.useDebugValue = useDebugValue;
  exports.useEffect = useEffect;
  exports.useImperativeHandle = useImperativeHandle;
  exports.useLayoutEffect = useLayoutEffect;
  exports.useMemo = useMemo;
  exports.useReducer = useReducer;
  exports.useRef = useRef;
  exports.useState = useState;
  exports.version = ReactVersion;
```

### let's try to log out react version on console window.
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      console.log(React.version);
      let el = React.createElement("h1", null, "React Tutorial");  // createElement(type, props, children)
      ReactDOM.render(el, document.getElementById("root"));  // render needs two parameter render(element, target)
    </script>
  </body>
</html>
```

### You can use createElement like this
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      console.log(React.version);
      let el = React.createElement("h1", {children: "React Tutorial"});  // createElement(type, props, children)
      ReactDOM.render(el, document.getElementById("root"));  // render needs two parameter render(element, target)
    </script>
  </body>
</html>
```

### You can create any properties to h1 tag
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      console.log(React.version);
      let el = React.createElement("h1", {children: "React Tutorial", blablabla:"anything"});  // createElement(type, props, children)
      ReactDOM.render(el, document.getElementById("root"));  // render needs two parameter render(element, target)
      // <h1 blablabla="anything">React Tutorial</h1>
    </script>
  </body>
</html>
```

### You can add innerElement to h1 tag
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let innerSpan = React.createElement("span", null, "React Tutorial");
      let el = React.createElement("h1", {children: innerSpan});  // createElement(type, props, children)
      ReactDOM.render(el, document.getElementById("root"));  // render needs two parameter render(element, target)
      // <h1 blablabla="anything">React Tutorial</h1>
    </script>
  </body>
</html>
```

### You can add innerElement as you want, but it is not efficient.
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let spanTag = React.createElement("span", null, "React Tutorial");
      let h1Tag = React.createElement("h1", null, spanTag);
      let divTag = React.createElement("div", null, h1Tag);
      let sectionTag = React.createElement("section", null, divTag);  
      ReactDOM.render(sectionTag, document.getElementById("root"));  
    </script>
  </body>
</html>
```

### You can use JSX
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let myel = <div>Hello JSX</div>; // error
      ReactDOM.render(myel, document.getElementById("root"));  
    </script>
  </body>
</html>
```

### To fix the JSX handling error, Add babel script to your website.
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let myel = <div>Hello JSX</div>; // error
      ReactDOM.render(myel, document.getElementById("root"));  
    </script>
  </body>
</html>
```

### still getting an error eventhough we added babel script. to fix the error, please change your script tag type like this
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myel = <div>Hello JSX</div>;
      ReactDOM.render(myel, document.getElementById("root"));  
      // <div id="root">
      //   <div>Hello JSX</div>
      // </div>
    </script>
  </body>
</html>
```

### Multiline JSX notation
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myel = (
        <section>
          <div>
            <h1>
              <span>React Tutorial</span>
            </h1>
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You can use variable in JSX notation 
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      let myel = (
        <section>
          <div>
            <h1>
              <span>{myTitle}</span>
            </h1>
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You can use h1 element as a variable in JSX notation
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      let myH1 = (
        <h1>
          <span>{myTitle}</span>
        </h1>
      );
      let myel = (
        <section>
          <div>
            {myH1}
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You can use h1 element variable as html tag
* note: the variable should be pascal case format (eg.MyHomeWork)
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      let MyH1 = (
        <h1>
          <span>{myTitle}</span>
        </h1>
      );
      let myel = (
        <section>
          <div>
            <MyH1></MyH1> 
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### To fix the error, we need to define the varaiable as a function as a component
* note: the variable should be pascal case format (eg.MyHomeWork)
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      let MyH1 = function(){
        return (
        <h1>
          <span>{myTitle}</span>
        </h1>
        );
      }
      let myel = (
        <section>
          <div>
            <MyH1></MyH1> 
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You can rewrite the code above
* note: the variable should be pascal case format (eg.MyHomeWork)
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      let MyH1 = () => (
        <h1>
          <span>{myTitle}</span>
        </h1>
      );
      let myel = (
        <section>
          <div>
            <MyH1></MyH1> 
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You can rewrite the code above
* note: the variable should be pascal case format (eg.MyHomeWork)
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      function MyH1() {
        return (
        <h1>
          <span>{myTitle}</span>
        </h1>
        );
      }
      let myel = (
        <section>
          <div>
            <MyH1></MyH1> 
          </div>
        </section>
      );
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You can use selfclosing tag. Also you can check the type of self closing tag. the type is function
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
      function MyH1() {
        return (
        <h1>
          <span>{myTitle}</span>
        </h1>
        );
      }
      console.log(<MyH1 />); // type of function
      let myel = (
        <section>
          <div>
            <MyH1 />
          </div>
        </section>
      );
      console.log(myel); // type of section
      ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### You add id props to your MyH1 single closing tag.
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
    function MyH1() {
      return (
        <h1>
          <span>{myTitle}</span>
        </h1>
      );
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let myel = (
      <section>
        <div>
          <MyH1 />
        </div>
      </section>
    );
    ReactDOM.render(myel, document.getElementById("root"));
    </script>
  </body>
</html>
```

### update myel as functional component
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      let myTitle = "Hello JSX";
    function MyH1() {
      return (
        <h1>
          <span>{myTitle}</span>
        </h1>
      );
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let Myel = () => {
      return (
        <section>
          <div>
            <MyH1 />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### you can move myTitle variable inside of Myel function
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    function MyH1() {
      return (
        <h1>
          <span>{myTitle}</span>
        </h1>
      );
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let Myel = () => {
      let myTitle = "Hello JSX"; //error
      return (
        <section>
          <div>
            <MyH1 />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```


### to fixe the error above
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    function MyH1() {
      return (
        <h1>
          <span>{myTitle}</span> 
        </h1>
      ); // error
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let Myel = () => {
      let myTitle = "Hello JSX"; 
      console.log(<MyH1 data={myTitle} />);
      return (
        <section>
          <div>
            <MyH1 />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### to fixe the error above
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    function MyH1() {
      return (
        <h1>
          <span>{myTitle}</span> 
        </h1>
      ); // error
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let Myel = () => {
      let myTitle = "Hello JSX"; 
      console.log(<MyH1 data={myTitle} />);
      return (
        <section>
          <div>
            <MyH1 data={myTitle} />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### to fixe the error above
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    function MyH1(props) {
      return (
        <h1>
          <span>{props.data}</span> 
        </h1>
      ); // error
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let Myel = () => {
      let myTitle = "Hello JSX"; 
      console.log(<MyH1 data={myTitle} />);
      return (
        <section>
          <div>
            <MyH1 data={myTitle} />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### you can use your own prop names
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    function MyH1(props) {
      return (
        <h1>
          <span>{props.myTitle}</span> 
        </h1>
      ); // error
    }
    console.log(<MyH1 id="hello" />) // now it holds id props
    let Myel = () => {
      let myTitle = "Hello JSX"; 
      return (
        <section>
          <div>
            <MyH1 myTitle={myTitle} />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### you can use your own variable instead of prop
```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tutorial</title>
    <!-- Load React.  -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    function MyH1({myTitle}) {
      return (
        <h1>
          <span>{myTitle}</span> 
        </h1>
      ); // error
    }
    let Myel = () => {
      let myTitle = "Hello JSX"; 
      return (
        <section>
          <div>
            <MyH1 myTitle={myTitle} />
          </div>
        </section>
      );
    }
    ReactDOM.render(<Myel />, document.getElementById("root"));
    </script>
  </body>
</html>
```
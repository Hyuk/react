# Add style to react app

### Don't use inline style in JSX notation
app.js
```javascript
import React from 'react';

function App({title}) {
  return (
    <div>
      <div style="padding: 10rem">{title}</div>
    </div>
  );
}

export default App;
```

### Use {{}} for inline style in React apple
* one { } for javascript syntax, the other one { } for declaring an object.
```javascript
import React from 'react';

function App({title}) {
  return (
    <div>
      <div style={{padding: "2rem", border: "1px solid green", backgroundColor: "gray", color: "white"}}>{title}</div>
    </div>
  );
}

export default App;
```

### Use class based style
* create assets/css folder under src folder and create style.css file inside of the folder
```css
.box {
  padding: 2rem;
  border: 1px solid green;
  background-color: gray;
  color: white;
}
```
* update app.js file to use the style file. 
```javascript
import React from 'react';
import "./assets/css/style.css";

function App({title}) {
  return (
    <div className="box">
      {title}
    </div>
  );
}

export default App;
```

### include tailwind css library in react application
* goto public folder and open index.html file and add the tailwind css library cdn in front of the closing head tag
```html
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```
* you can install via the command below
```bash
$ npm install tailwindcss
```

### use tailwind css library in react application
* app.js
```javascript
import React from 'react';
import "./assets/css/style.css";

function App({title}) {
  return (
    <div className="bg-gray text-white p-5 border">
      {title}
    </div>
  );
}

export default App;
```


### if you install tailwindcss library using npm install, please import three things import in style.css file
```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

* Create your tailwind config file
* tailwind.config.js file is created
```bash
npx tailwindcss init
```

* Create postcss.config.js file
* postcss.config.js
```css
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

* install autoprefixer using npm
```bash
$ npm install autoprefixer
```

* install postcss-cli using npm
```bash
$ npm install postcss-cli
```

* restart the server
```bash
$ npm run start
```

* rename the style.css file with tailwind.css 

* update package.json file
```json
//...
"scripts": {
    "build:css": "postcss src/assets/css/tailwind.css -o src/assets/css/style.css", // updated
    "start": "npm run build:css && react-scripts start", // updated
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
//...
```

* restart the server using following command
```bash
$ npm run start
```

* there is a issue with autoprefixer & postcss 
* [please check](https://github.com/postcss/autoprefixer/releases/tag/10.0.0)
* [please check](https://github.com/vercel/next.js/issues/17236)
```json
{
  "name": "my-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "postcss-cli": "^8.0.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3",
    "tailwindcss": "^1.8.13"
  },
  "peerDependencies": {
    "postcss": "^8.0.0"
  },
  "scripts": {
    "build:css": "postcss src/assets/css/tailwind.css -o src/assets/css/style.css",
    "start": "npm run build:css && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.0.1",
    "postcss": "^8.1.1"
  }
}

```
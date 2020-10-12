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
```javascript
import React from 'react';

function App({title}) {
  return (
    <div>
      <div style={{padding: 10rem}}>{title}</div>
    </div>
  );
}

export default App;
```
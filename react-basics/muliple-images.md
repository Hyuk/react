# Multiple Images
* Images comes from unsplash
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]

  return (
    <section>
      <div>
        <img src={Images[0]} width="150" />
      </div>
      <div>
        <img src={Images[1]} width="150" />
      </div>
      <div>
        <img src={Images[2]} width="150" />
      </div>
      <div>
        <img src={Images[3]} width="150" />
      </div>
    </section>
  )
}
```

### Arrange images horizontally
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ];

  return (
    <section>
      <div className="flex justify-center">
      {Images.map((image) => {
        return (
          <div>
            <img src={image} width="150" />
          </div>
          );
      })}
      </div>
    </section>
  )
}
```
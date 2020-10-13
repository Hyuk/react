# Add new image input

* Images.js
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ];

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
    </section>
  );
}
```

* Add Input field
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ];

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white">Add New</button>
      </div>
    </section>
  );
}
```

* Add function on Add new image button
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  let Images = [
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ];

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    Images.push("https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    console.log("working");
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* Image is not added since there no state changes

```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {
  let Images = [
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ];

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    Images.push("https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    console.log("working");
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```


* we lost all image but we now can see new image.

```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    setimages(["https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"]);
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* now it is working
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    let tempImage = [...images];
    tempImage.push("https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    setimages(tempImage);
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* let's rewrite the code above
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    setimages([
      ...images,
      "https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    ]);
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* You can add image in front of the array
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    setimages([
      "https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      ...images,
    ]);
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* You can add image in front of the array
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    setimages([
      "https://images.unsplash.com/photo-1602429489050-943d4df59533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      ...images,
    ]);
  }

  return (
    <section>
      <div className="flex flex-wrap ustify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between">
        <input type="text" className="p-2 border border-gray-800 shadow rounded"/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```


* you can get input filed value
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const [newImageUrl, setnewImageUrl] = useState(null);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    setimages([
      newImageUrl,
      ...images,
    ]);
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <input type="text" className="p-2 border border-gray-800 shadow rounded" onChange={handleChange} />
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* empty input field
```javascript
import React, {useState, useEffect} from 'react';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const [newImageUrl, setnewImageUrl] = useState("");

  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    setimages([
      newImageUrl,
      ...images,
    ]);
    setnewImageUrl("");
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <input type="text" className="p-2 border border-gray-800 shadow rounded" onChange={handleChange} value={newImageUrl}/>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```
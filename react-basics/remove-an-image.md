# Remove an Image

* Clean up the code
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
        <div className="w-10/12">
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
* Image.js

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
        <div className="w-1/3 my-4">
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

* Disable empty input

* Image.js

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
        <div className="w-1/3 my-4">
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
        <button disabled={newImageUrl === ""} className={`p-2 text-white ${newImageUrl !== "bg-green-600" ? "bg-green-300" :}`} onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
```

* Update the input and button style

* Image.js
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
        <div className="w-1/3 my-4 flex justify-center">
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* Removing image toggle - remove isShowing method

* App.js
```javascript
import React, {useState} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello React");

  return (
    <section className="flex justify-center">
        <div className="w-10/12">
          <div className="text-center">
            <div className="my-4">{title}</div>
            <Images />
          </div>
        </div>
      </section>
  ); 
}

export default App;
```

* Add handRemove function to Image.js

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


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <img src={image} width="150" onClick={() => handleRemove(index)}/>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* you can use spread operator for the handleRemove function

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


  function handleRemove(index) {
    setimages(
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    );
  }

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <img src={image} width="150" onClick={() => handleRemove(index)}/>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* Install Fontawesome css library in public/index.html
* https://fontawesome.com/
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
```

* Add remove button on the image
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


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div class="relative">
            <i className="fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100" onClick={() => handleRemove(index)}></i>
            <img src={image} width="150"/>
          </div>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* Add remove function on the button
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


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }

  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function crossClass() {
    return `fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering ? "" : "hidden"}`;
  }  

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div class="relative">
            <i className={crossClass()} onClick={() => handleRemove(index)}></i>
            <img src={image} width="150" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          </div>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* you can direclty use the function inside of mouse event instead of declaring a function out side.
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


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }

  const [isHovering, setIsHovering] = useState(false);

  function crossClass() {
    return `fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering ? "" : "hidden"}`;
  }  

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div class="relative">
            <i className={crossClass()} onClick={() => handleRemove(index)}></i>
            <img src={image} width="150" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} />
          </div>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* display close button only on the one image when mouse over
* Images.js
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


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }

  const [isHovering, setIsHovering] = useState(false);

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div class="relative">
            <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering === index ? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
            <img src={image} width="150" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
          </div>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

* fixing the issue on the event between the image and close button.
* Since those two elements were separated, move the image event to the parent element.
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


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }

  const [isHovering, setIsHovering] = useState(false);

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div class="relative"onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} >
            <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering === index ? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
            <img src={image} width="150" />
          </div>
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```


### Refactoring showImage function
* create Image.js in the same folder
```javascript
import React, {useState} from 'react'

export default function Image({index, image, handleRemove}) {

  const [isHovering, setIsHovering] = useState(-1);

  return (
    <div className="w-1/3 my-4 flex justify-center" key={index}>
      <div class="relative" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} >
        <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering === index ? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
        <img src={image} width="150" />
      </div>
    </div>
  );
}

```
* update Images.js
```javascript
import React, {useState, useEffect} from 'react';
import Image from './Image';

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    "https://images.unsplash.com/photo-1602250698774-469b27275d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1602338038325-309fcb428972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  ]);

  const [newImageUrl, setnewImageUrl] = useState("");


  function handleRemove(index) {
    setimages(images.filter((image, i) => i !== index));
  }
  
  function ShowImage() {
    return images.map((img, index) => <Image image={img} handleRemove={handleRemove} index={index} />);
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
        <div className="w-full">
          <input type="text" className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange} value={newImageUrl}/>
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

### update useState for Image.js since it is pointing to each image
```javascript
import React, {useState} from 'react'

export default function Image({index, image, handleRemove}) {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-1/3 my-4 flex justify-center" key={index}>
      <div class="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
        <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering ? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
        <img src={image} width="150" />
      </div>
    </div>
  );
}
```
# Using Unsplash Plugin

* Sign in to Unsplash.com and go to API/DEVELOPERS and view the documentation


```javascript
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import Image from './Image';
import Axios from "axios";

export default function Images() {

  const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      "https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY"
      ).then((res) => {
      setimages(res.data);
    }); 
  }, []);

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages([
      ...images.slice(0, index),
      ...images.slice(index +1, images.length),
    ]);
  }
  
  function ShowImage() {
    return images.map((img, index) => <Image image={img.urls.regular} handleRemove={handleRemove} index={index} key={index} />);
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
          <input 
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-2 border border-gray-800 shadow rounded w-full"
            onChange={handleChange}
            value={newImageUrl}
          />
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```

### private key should use using .env file and use it as variable.
```javascript
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import Image from './Image';
import Axios from "axios";

export default function Images() {

  const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      `${process.env.REACT_APP_UNSPLASH_URL}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
      ).then((res) => {
      setimages(res.data);
    }); 
  }, []);

  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    setimages([
      ...images.slice(0, index),
      ...images.slice(index +1, images.length),
    ]);
  }
  
  function ShowImage() {
    return images.map((img, index) => <Image image={img.urls.regular} handleRemove={handleRemove} index={index} key={index} />);
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
          <input 
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-2 border border-gray-800 shadow rounded w-full"
            onChange={handleChange}
            value={newImageUrl}
          />
        </div>
        <div className="">
          <button disabled={newImageUrl === ""} className={`p-2 text-white ml-2 ${newImageUrl !== "" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
}
```
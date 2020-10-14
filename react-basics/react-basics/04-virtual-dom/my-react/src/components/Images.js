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
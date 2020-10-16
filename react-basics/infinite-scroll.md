# Infinite Scroll

* Create custom hook for scroll - useScroll

* create utils folder on the root

* create hooks folder inside of utils folder

* create useScroll.js file inside of hooks folder

* useScroll.js
```javascript
import React,  {useState} from 'react';

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(null);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener('scroll', handlescroll);
    return document.removeEventListener('scroll', handleScroll);
  }, [])

  return scrollPosition;
}
```
import { createRef, useEffect, useState } from "react";
import { searchImages } from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [images, setImages] = useState([]);
  const ref = createRef();

  async function handleChange(term) {
    const result = await searchImages(term);
    setImages(result);
  }

  // const handleObserver = (entites, observer) => {
    // console.log(entites);
  // }

  useEffect(() => {
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };

    // const observer = new IntersectionObserver(handleObserver, options);

    // if (ref && ref.current) observer.observe(ref);

    // document.addEventListener("onScroll", () => observer.observe(ref));

    // return () => {
    //   document.removeEventListener("onScroll", observer.observe(ref));
    // };
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-full gap-6">
      <SearchBar onChange={handleChange} />
      <ImageList ref={ref} images={images} />
    </div>
  );
}

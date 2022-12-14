import { useState } from "react";
import { searchImages } from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [images, setImages] = useState([]);

  async function handleChange(term) {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className="flex items-center justify-center flex-col w-full gap-6">
      <SearchBar onChange={handleChange} />
      <ImageList images={images} />
    </div>
  );
}

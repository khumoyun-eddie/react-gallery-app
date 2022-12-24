import React, { useState, useEffect } from "react";

import ImageGallery from "./components/ImageGallery";
import ImageSearch from "./components/ImageSearch";
import { Pagination } from "./components/Pagination";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res =
          await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=100
        `);
        const data = await res.json();
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [term]);

  // Get current Images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />
      <p className='font-semibold text-gray-700 mb-2'>
        Looking for:
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm ml-2'>{term ? term : "all"}</span>
      </p>
      <ImageGallery
        images={currentImages}
        isLoading={isLoading}
        setTerm={setTerm}
      />
      <Pagination
        imagesPerPage={imagesPerPage}
        totalImages={images.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;

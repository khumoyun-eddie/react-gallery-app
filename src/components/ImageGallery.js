import React from "react";
import ImageCard from "./ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGallery = ({ isLoading, images, setTerm }) => {
  return (
    <>
      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>}
      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading</h1>
      ) : (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='20px'>
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                tagClick={(tag) => setTerm(tag)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
};

export default ImageGallery;

import React, {useState} from 'react';
import ImageViewer from "react-simple-image-viewer";

//components
import PhotosCollection from '../../components/restaurant/PhotosCollection';

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/9/65279/ab7dc239625ef34124d8a38b57a22e3a.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/65279/0e79614ea14113b8b3d4b48574293d00.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/65279/d915945d19e0fc3df78fe65a82c7ef83.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/65279/a6f9d24581cae5f83a6ea282ca018f62.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/65279/99ef15aa42501a40de7753f503a116ce.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/65279/c27072d6bef4cbb894ffd7ddbbf263f0.jpg"  
  ]);

  const [isMenuOpen, setIsMenuOpen]  = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const openViewer = () => setIsMenuOpen(true);
  const closeViewer = () => setIsMenuOpen(false);

  return (
    <>
        {isMenuOpen && (
          <ImageViewer
            src={ photos }
            currentIndex={ currentImg }
            disableScroll={ false }
            onClose={ closeViewer }
          />
        )}

        <div className="flex flex-wrap gap-4">
          {photos.map((photo) => (
            <PhotosCollection image={photo} openViewer={openViewer} />
          ))}
        </div>
    </>
  )
}

export default Photos;


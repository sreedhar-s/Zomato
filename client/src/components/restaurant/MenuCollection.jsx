import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen]  = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const openViewer = () => setIsMenuOpen(true);
    const closeViewer = () => setIsMenuOpen(false);

  return (
    <>
        {isMenuOpen && (
          <ImageViewer
            src={ props.image }
            currentIndex={ currentImg }
            disableScroll={ false }
            onClose={ closeViewer }
          />
        )}
        <div
            className="w-32 h-32 md:w-48 flex flex-col md:h-48"
            onClick={openViewer}
        >
            <div className="w-full h-full overflow-hidden rounded-lg">
            <img
                src={props.image[0]}
                alt="menu"
                className="w-full h-full transform transiton duration-500 rounded-lg hover:scale-110"
            />
            </div>
            <div>
            <strong>{props.menuTitle}</strong>
            <p>{props.pages} pages</p>
            </div>
      </div>
    </>
  );
};

export default MenuCollection;

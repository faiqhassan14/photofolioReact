import React from 'react';

const GalleryItem = ({ item, onItemClick }) => {
    return (
        <div className="gallery-item" onClick={() => onItemClick(item)}>
            <img src={item.image} alt={item.title} className="gallery-img" />
            <div className="gallery-overlay">
                <h3 className="gallery-title">{item.title}</h3>
                <span className="gallery-category">{item.category}</span>
            </div>
        </div>
    );
};

export default GalleryItem;

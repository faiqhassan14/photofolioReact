import React from 'react';

const Lightbox = ({ isOpen, currentItem, onClose, onNext, onPrev }) => {
    if (!isOpen || !currentItem) return null;

    return (
        <div className={`lightbox ${isOpen ? 'active' : ''}`}>
            <div className="lightbox-content">
                <button className="lightbox-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="lightbox-nav">
                    <button className="lightbox-prev" onClick={onPrev}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="lightbox-next" onClick={onNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <img src={currentItem.image} alt={currentItem.title} className="lightbox-img" />
                <div className="lightbox-info">
                    <h3>{currentItem.title}</h3>
                    <p>{currentItem.category}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;

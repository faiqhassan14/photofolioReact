import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryItem from './components/GalleryItem';
import FilterButtons from './components/FilterButtons';
import Lightbox from './components/Lightbox';
import { galleryData, filterButtons } from './data/galleryData';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryData);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeFilter === 'all') setFilteredItems(galleryData);
    else setFilteredItems(galleryData.filter(item => item.category === activeFilter));
  }, [activeFilter]);

  const handleFilterChange = (filter) => setActiveFilter(filter);

  const handleItemClick = (item) => {
    const index = galleryData.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
    setCurrentItem(item);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setCurrentIndex(nextIndex);
    setCurrentItem(galleryData[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentIndex(prevIndex);
    setCurrentItem(galleryData[prevIndex]);
  };

  return (
    <div className="photofolio">
      <header className="photofolio-header">
        <h1 className="photofolio-title">PhotoFolio</h1>
        <p className="photofolio-subtitle">
          A showcase of my photography work across different genres and styles
        </p>
      </header>

      <FilterButtons
        filters={filterButtons}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <GalleryItem key={item.id} item={item} onItemClick={handleItemClick} />
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        currentItem={currentItem}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <footer className="photofolio-footer">
        <div className="social-links">
          <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-link"><i className="fab fa-pinterest"></i></a>
        </div>
        <p>&copy; 2023 PhotoFolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

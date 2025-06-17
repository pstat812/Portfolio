import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FullScreenImageModal from "./FullScreenImageModal";
import "./ImageGallery.css";

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const openFullScreen = () => {
    setIsFullScreenOpen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreenOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-t-2xl bg-neutral-900 h-64 sm:h-80">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={openFullScreen}
          />
        </AnimatePresence>

        {/* Click to expand hint */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer" onClick={openFullScreen}>
          <div className="bg-black/70 text-white px-3 py-2 rounded-full text-sm">
            Click to expand
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="p-4 bg-gradient-to-r from-midnight to-navy">
          <div className="flex gap-2 overflow-x-auto pb-3 custom-scrollbar">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? "border-blue-500 ring-2 ring-blue-500/30"
                    : "border-transparent hover:border-neutral-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-200 ${
                    index === currentIndex ? "bg-blue-500/20" : "bg-black/20 hover:bg-black/10"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Full Screen Modal */}
      <FullScreenImageModal
        isOpen={isFullScreenOpen}
        onClose={closeFullScreen}
        images={images}
        currentIndex={currentIndex}
        onPrevious={prevImage}
        onNext={nextImage}
        title={title}
      />
    </div>
  );
};

export default ImageGallery; 
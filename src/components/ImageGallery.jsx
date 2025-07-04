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
      <div className="relative overflow-hidden rounded-t-2xl bg-neutral-900 h-48 xs:h-56 sm:h-64 md:h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full overflow-hidden rounded-t-2xl"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 }
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={openFullScreen}
            />
          </motion.div>
        </AnimatePresence>

        {/* Click to expand hint */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer" onClick={openFullScreen}>
          <div className="bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm">
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
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="p-3 sm:p-4 bg-gradient-to-r from-midnight to-navy">
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 custom-scrollbar">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
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
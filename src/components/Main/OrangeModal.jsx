import { useState, useEffect, useRef } from "react";
import styles from "./OrangeModal.module.css";

export default function OrangeModal({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);
  const progressInterval = useRef(null);
  const SLIDE_DURATION = 5000;

  const elements = [
    {
      type: "video",
      src: "https://cdn.shopify.com/videos/c/o/v/a0ddd031abec478f8bf1dc03ee383205.mp4",
      text: "NNN",
      textColor: "#000000",
    },
    {
      type: "image",
      src: "//six5six2025.myshopify.com/cdn/shop/files/Horizontal_Banner_jpg.jpg?v=1772101388",
      text: "BUDWEISER",
      textColor: "#ffffff",
    },
    {
      type: "image",
      src: "//six5six2025.myshopify.com/cdn/shop/files/KBFC-3-Desktop-Banner.webp?v=1772776949",
      text: "SIX5IX",
      textColor: "#ffffff",
    },
  ];

  const handleClose = () => {
    setCurrentIndex(0);
    setProgress(0);
    setIsPaused(false);
    onClose();
  };

  const handleNext = () => {
    if (currentIndex < elements.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(0);
      setIsPaused(false);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress(0);
      setIsPaused(false);
    } else {
      handleClose();
    }
  };

  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
      if (elements[currentIndex].type === "video" && videoRef.current) {
        videoRef.current.play();
      }
    } else {
      setIsPaused(true);
      if (elements[currentIndex].type === "video" && videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (!isOpen || isPaused) {
      clearInterval(progressInterval.current);
      return;
    }

    const startTime = Date.now() - (progress / 100) * SLIDE_DURATION;

    progressInterval.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = (elapsedTime / SLIDE_DURATION) * 100;

      if (currentProgress >= 100) {
        clearInterval(progressInterval.current);
        setProgress(100);
        handleNext();
      } else {
        setProgress(currentProgress);
      }
    }, 30);

    return () => clearInterval(progressInterval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isPaused, currentIndex, progress, elements.length]);

  if (!isOpen) return null;

  return (
    <div className={styles.storyOverlay} onClick={handleClose}>
      <div
        className={styles.storyContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.progressTrack}>
          {elements.map((_, index) => (
            <div key={index} className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width:
                    index < currentIndex
                      ? "100%"
                      : index === currentIndex
                      ? `${progress}%`
                      : "0%",
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className={styles.controlsRight}>
          <button
            className={styles.pauseBtn}
            onClick={(e) => {
              e.stopPropagation();
              togglePause();
            }}
          >
            <svg viewBox="0 0 24 24" fill="white">
              {isPaused ? (
                <path d="M8 5v14l11-7z" />
              ) : (
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              )}
            </svg>
          </button>
          <button
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            ✕
          </button>
        </div>

        {currentIndex > 0 && (
          <button className={styles.navArrowLeft} onClick={handlePrev}>
            ‹
          </button>
        )}
        {currentIndex < elements.length - 1 && (
          <button className={styles.navArrowRight} onClick={handleNext}>
            ›
          </button>
        )}

        <div className={styles.whitePopupCard}>
          <div className={styles.cardContent}>
            {elements[currentIndex].type === "video" ? (
              <video
                ref={videoRef}
                key={currentIndex}
                src={elements[currentIndex].src}
                autoPlay
                playsInline
                muted
                loop
                className={styles.cardVideo}
              />
            ) : (
              <img
                key={currentIndex}
                src={elements[currentIndex].src}
                alt="story-img"
                className={styles.cardImg}
              />
            )}

            <div
              className={styles.cardHeaderOverlay}
              style={{ color: elements[currentIndex].textColor }}
            >
              <span>{elements[currentIndex].text}</span>
            </div>

            <div className={styles.touchNavigation}>
              <div
                className={styles.touchLeft}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              ></div>
              <div
                className={styles.touchRight}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./ImageSlider.module.css"; // ← Nu används modulen korrekt

const ImageSlider = ({ images }) => {
  const [sliderSize, setSliderSize] = useState({ width: 320, height: 200 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setSliderSize({ width: 900, height: 500 });
      else if (w >= 768) setSliderSize({ width: 700, height: 400 });
      else if (w >= 640) setSliderSize({ width: 600, height: 375 });
      else setSliderSize({ width: 320, height: 200 });
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderBox}>
        <SimpleImageSlider
          width={sliderSize.width}
          height={sliderSize.height}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default ImageSlider;

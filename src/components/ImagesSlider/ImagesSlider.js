import s from './ImagesSlider.module.css'

import React, {useState} from "react";


function ImageSlide(props) {
    const [isZoomed, setIsZoomed] = useState(false);
    const handleImageClick = () => {
        setIsZoomed(true);
    };
    const handleModalClose = () => {
        setIsZoomed(false);
    };
    const handleClose = () => {
        setIsZoomed(false);
    };

    return (
        <div className={s['zoomable-modal-image']}>


            <img className={s.zoomableImage}
                 onClick={handleImageClick}
                 src={props.url} alt="none"/>
            {isZoomed && (
                <div onClick={handleClose} className={s['modal']}>

          <span className={s['close-button']} onClick={handleModalClose}>
            &times;
          </span>
                    <img className={s['modal-image']} src={props.url} alt='none'/>
                </div>
            )}
        </div>
    );
}

function ImageSlider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === props.imgUrls.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? props.imgUrls.length - 1 : currentSlide - 1);
    };

    return (
        <div className={s.content}>
            <div className={s.imagesSliderWrapper}>
                {props.imgUrls.map((url, index) => (
                    <ImageSlide key={index} url={url}/>
                ))[currentSlide]}

            </div>
            <p className={s.zoomText}>(click on image to zoom)</p>
            <div className={s.buttonsWrapper}>
                <button className={s.sliderButton} onClick={prevSlide}>Prev</button>
                <button className={s.sliderButton} onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
}

export default ImageSlider
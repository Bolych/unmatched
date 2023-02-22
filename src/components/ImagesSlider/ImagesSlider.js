import s from './ImagesSlider.module.css'

import {useState} from "react";


function ImageSlide({url}) {
    return (
        <div>
            <img src={url} alt="none"/>
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
        <div>
            <div className={s.imagesSliderWrapper}>
            {props.imgUrls.map((url, index) => (
                <ImageSlide key={index} url={url}/>
            ))[currentSlide]}
            </div>
<div className={s.buttonsWrapper}>
            <button className={s.sliderButton} onClick={prevSlide}>Prev</button>
            <button className={s.sliderButton} onClick={nextSlide}>Next</button>
</div>
        </div>
    );
}

export default ImageSlider
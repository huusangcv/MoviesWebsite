import movieData from "./Sliders";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const SliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeRunning, setTimeRunning] = useState(3000);
    const [timeAutoNext, setTimeAutoNext] = useState(10000);

    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);
    const runNextAutoRef = useRef(null);
    const navigate = useNavigate();

    const handleNext = () => {
        showSlider("next");
    };

    const handlePrev = () => {
        showSlider("prev");
    };

    const showSlider = (type) => {
        const sliderItemsDom = sliderRef.current.querySelectorAll(
            ".carousel .list .item"
        );
        const thumbnailItemsDom = thumbnailBorderRef.current.querySelectorAll(
            ".carousel .thumbnail .item"
        );

        if (type === "next") {
            sliderRef.current.appendChild(sliderItemsDom[0]);
            thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
            carouselRef.current.classList.add("next");
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % sliderItemsDom.length
            );
        } else {
            sliderRef.current.prepend(
                sliderItemsDom[sliderItemsDom.length - 1]
            );
            thumbnailBorderRef.current.prepend(
                thumbnailItemsDom[thumbnailItemsDom.length - 1]
            );
            carouselRef.current.classList.add("prev");
            setCurrentIndex(
                (prevIndex) =>
                    (prevIndex - 1 + sliderItemsDom.length) %
                    sliderItemsDom.length
            );
        }

        clearTimeout(timeRef.current);
        timeRef.current = setTimeout(() => {
            carouselRef?.current?.classList?.remove("next");
            carouselRef?.current?.classList?.remove("prev");
        }, timeRunning);

        clearTimeout(runNextAutoRef.current);
        runNextAutoRef.current = setTimeout(() => {
            handleNext();
        }, timeAutoNext);
    };

    useEffect(() => {
        runNextAutoRef.current = setTimeout(() => {
            handleNext();
        }, timeAutoNext);

        return () => {
            clearTimeout(runNextAutoRef.current);
        };
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list" ref={sliderRef}>
                {movieData.map((movie) => {
                    return (
                        <div className="item" key={movie.id}>
                            <img src={movie.poster} />
                            <div className="content">
                                <div className="author">MOVIE</div>
                                <div className="title">{movie.title}</div>
                                <div className="topic">{movie.topic}</div>
                                <div className="des">{movie.description}</div>
                                <div className="buttons">
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/MoviesWebsite/movie/${movie.slug}`
                                            )
                                        }
                                    >
                                        XEM NGAY
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="thumbnail" ref={thumbnailBorderRef}>
                {movieData.map((movie) => {
                    return (
                        <div className="item" key={movie.id}>
                            <img src={movie.thumbnailImage} />
                            <div className="content">
                                <div className="title">
                                    {movie.thumbnailTitle}
                                </div>
                                <div className="description">
                                    {movie.thumbnailDescription}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="arrows">
                <button
                    className="btn-switch-page"
                    id="prev"
                    onClick={handlePrev}
                >
                    <GrFormPrevious />
                </button>
                <button
                    className="btn-switch-page"
                    id="next"
                    onClick={handleNext}
                >
                    <MdOutlineNavigateNext />
                </button>
            </div>
            <div className="time" ref={timeRef}></div>
        </div>
    );
};

export default SliderComponent;

import img1 from "../../assets/images/thumb-1.jpg";
import img2 from "../../assets/images/thumb-2.jpg";
import img3 from "../../assets/images/thumb-3.jpg";
import img4 from "../../assets/images/thumb-4.jpg";
// import img4 from "../../assets/images/thumb-4.jpg";
import poster1 from "../../assets/images/poster1.jpg";
import poster2 from "../../assets/images/poster2.jpg";
import poster3 from "../../assets/images/poster3.jpg";
import poster4 from "../../assets/images/poster4.jpg";

import React, { useState, useEffect, useRef } from "react";

const SliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeRunning, setTimeRunning] = useState(3000);
    const [timeAutoNext, setTimeAutoNext] = useState(7000);

    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);
    const runNextAutoRef = useRef(null);

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
            carouselRef.current.classList.remove("next");
            carouselRef.current.classList.remove("prev");
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
                <div className="item">
                    <img src={poster1} />
                    {/* <video autoPlay muted loop className="">
                        <source src={video1} type="video/mp4" />
                    </video> */}
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">Deadpool & Wolverine</div>
                        <div className="topic">
                            Deadpool và Wolverine (2024)
                        </div>
                        <div className="des">
                            Đôi bạn "thân" lần đầu tiên kết hợp trên màn ảnh!
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={poster2} />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">Despicable Me 4</div>
                        <div className="topic">Kẻ trộm mặt trăng 4 (2024)</div>
                        <div className="des">
                            Gru phải đối mặt với kẻ thù mới là Maxime Le Mal và
                            Valentina đang lên kế hoạch trả thù anh, buộc gia
                            đình anh phải lẩn trốn đi nơi khác. Bên cạnh việc
                            đấu tranh bảo vệ gia đình, Gru đồng thời còn phải
                            tìm ra điểm chung với thành viên mới nhất trong nhà
                            đó là Gru Jr.
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={poster3} />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">A Quiet Place: Day One</div>
                        <div className="topic">
                            Vùng đất câm lặng: Ngày một (2024)
                        </div>
                        <div className="des">
                            Chứng kiến ngày mà cả thể giới bỗng im lặng
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={poster4} />
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">House of the Dragon</div>
                        <div className="topic">Gia Tộc Rồng (2022)</div>
                        <div className="des">
                            Lấy bối cảnh ở vương triều Targaryen, thế hệ được
                            trị vì bởi cha ông Daenerys Targaryen. Khi này, ông
                            tổ Daenerys là Aegon người đã ra lệnh cho rồng xâm
                            lăng rồi thống nhất Bảy Vương Quốc. Nhưng cuộc chiến
                            bỗng trở nên khốc liệt hơn khi mà Vũ điệu của bầy
                            Rồng xảy ra, lợi dụng vào tình thế đó hai chị em
                            Targaryen đã lên kế hoạch tranh giành ngôi báu mà
                            Aegon để lại.
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thumbnail" ref={thumbnailBorderRef}>
                <div className="item">
                    <img src={img1} />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img2} />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img3} />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                <div className="item">
                    <img src={img4} />
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button id="prev" onClick={handlePrev}>
                    Prev
                </button>
                <button id="next" onClick={handleNext}>
                    Next
                </button>
            </div>
            <div className="time" ref={timeRef}></div>
        </div>
    );
};

export default SliderComponent;

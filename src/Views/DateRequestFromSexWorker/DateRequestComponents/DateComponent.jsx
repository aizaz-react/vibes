import React, { useEffect, useState, useRef } from "react";
import calanderImage from "../../../assets/images/calanderImage.svg";
import moment from "moment";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const DateComponent = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  let ref = useRef();

  let getDateArray = () => {
    let dateArray = [];
    for (let i = 0; i < 6; i++) {
      if (i === 0) {
        dateArray.push(moment().format("[Today] DD.MM.yyyy"));
      } else {
        dateArray.push(moment().add(i, "d").format("dddd DD.MM.yyyy"));
      }
    }
    return dateArray;
  };

  let handelDatePickerShow = () => {
    setShowDatePicker(true);
  };

  let handelDatePickerHide = () => {
    setShowDatePicker(false);
  };

  useOnClickOutside(ref, handelDatePickerHide);

  return (
    <div className="date-picker-container">
      <div className="date-icon">
        <img src={calanderImage} alt="calander" />
      </div>
      <div className="date-string-container" onClick={handelDatePickerShow}>
        <p className="date-string">27/08/2021</p>

        <div
          style={{
            background: "#FDFDFD",
            display: "flex",
            visibility: showDatePicker ? "" : "hidden",
            position: "absolute",
            border: "2px solid darkgray",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
            width: "130px",
          }}
          ref={ref}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              borderTop: "1px solid lightGray",
              borderBottom: "1px solid lightGray",
              position: "absolute",
              height: "30px",
            }}
          ></div>
          <Swiper
            slidesPerView={5}
            freeMode={true}
            freeModeSticky={true}
            freeModeMomentumRatio={0.25}
            freeModeMinimumVelocity={0.1}
            loop={true}
            direction={"vertical"}
            slideToClickedSlide={true}
            centeredSlides={true}
          >
            {getDateArray().map((item, index) => {
              return (
                <SwiperSlide className="swiper-item" key={index}>
                  {item}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DateComponent;

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

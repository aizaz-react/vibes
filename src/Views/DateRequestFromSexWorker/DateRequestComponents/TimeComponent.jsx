import React, { useState, useRef, useEffect } from "react";

import timeImage from "../../../assets/images/timeLogo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./dateRequestComponents.css";

const TimeComponent = () => {
  let ref = useRef();
  let refDuration = useRef();
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);

  const [time, setTime] = useState({
    hour: "00",
    minutes: "00",
  });

  let handelTimePickerShow = () => {
    setShowTimePicker(true);
  };

  let handelDurationPickerShow = () => {
    setShowDurationPicker(true);
  };

  let handelSlideChange = (e, name) => {
    console.log(e.activeIndex);
    if (showTimePicker) {
      // if (name === "hour") {
      //   setTime({ ...time, hour: e.slides[e.activeIndex].innerHTML });
      // } else {
      //   setTime({ ...time, minutes: e.slides[e.activeIndex].innerHTML });
      // }
    }
  };
  let handelTimePickerHide = () => {
    if (showTimePicker) setShowTimePicker(false);
  };
  let handelDurationPickerHide = () => {
    if (showDurationPicker) setShowDurationPicker(false);
  };

  useOnClickOutside(ref, handelTimePickerHide);
  useOnClickOutside(refDuration, handelDurationPickerHide);

  return (
    <>
      <div className="time-hour-picker-container">
        <div className="time-icon">
          <img src={timeImage} alt="time" />
        </div>
        <div className="time-section" onClick={handelTimePickerShow}>
          <p>18:00</p>

          <div
            style={{
              background: "#FDFDFD",
              display: "flex",
              visibility: showTimePicker ? "" : "hidden",
              position: "absolute",
              border: "2px solid darkgray",
              borderRadius: "15px",
              justifyContent: "center",
              alignItems: "center",
              width: "130px",
            }}
            ref={ref}
          >
            <p
              style={{
                fontSize: "1.2rem",
                position: "absolute",
                fontWeight: "bold",
              }}
            >
              :
            </p>
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
              onSlideChange={(e) => handelSlideChange(e, "hour")}
            >
              <SwiperSlide className="swiper-item">00</SwiperSlide>
              <SwiperSlide className="swiper-item">01</SwiperSlide>
              <SwiperSlide className="swiper-item">02</SwiperSlide>
              <SwiperSlide className="swiper-item">03</SwiperSlide>
              <SwiperSlide className="swiper-item">04</SwiperSlide>
              <SwiperSlide className="swiper-item">05</SwiperSlide>
              <SwiperSlide className="swiper-item">06</SwiperSlide>
              <SwiperSlide className="swiper-item">07</SwiperSlide>
              <SwiperSlide className="swiper-item">08</SwiperSlide>
              <SwiperSlide className="swiper-item">09</SwiperSlide>
              <SwiperSlide className="swiper-item">10</SwiperSlide>
              <SwiperSlide className="swiper-item">11</SwiperSlide>
              <SwiperSlide className="swiper-item">12</SwiperSlide>
              <SwiperSlide className="swiper-item">13</SwiperSlide>
              <SwiperSlide className="swiper-item">14</SwiperSlide>
              <SwiperSlide className="swiper-item">15</SwiperSlide>
              <SwiperSlide className="swiper-item">16</SwiperSlide>
              <SwiperSlide className="swiper-item">17</SwiperSlide>
              <SwiperSlide className="swiper-item">18</SwiperSlide>
              <SwiperSlide className="swiper-item">19</SwiperSlide>
              <SwiperSlide className="swiper-item">20</SwiperSlide>
              <SwiperSlide className="swiper-item">21</SwiperSlide>
              <SwiperSlide className="swiper-item">22</SwiperSlide>
              <SwiperSlide className="swiper-item">23</SwiperSlide>
            </Swiper>
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
              onSlideChange={(e) => handelSlideChange(e, "minites")}
            >
              <SwiperSlide className="swiper-item">00</SwiperSlide>
              <SwiperSlide className="swiper-item">01</SwiperSlide>
              <SwiperSlide className="swiper-item">02</SwiperSlide>
              <SwiperSlide className="swiper-item">03</SwiperSlide>
              <SwiperSlide className="swiper-item">04</SwiperSlide>
              <SwiperSlide className="swiper-item">05</SwiperSlide>
              <SwiperSlide className="swiper-item">06</SwiperSlide>
              <SwiperSlide className="swiper-item">07</SwiperSlide>
              <SwiperSlide className="swiper-item">08</SwiperSlide>
              <SwiperSlide className="swiper-item">09</SwiperSlide>
              <SwiperSlide className="swiper-item">10</SwiperSlide>
              <SwiperSlide className="swiper-item">11</SwiperSlide>
              <SwiperSlide className="swiper-item">12</SwiperSlide>
              <SwiperSlide className="swiper-item">13</SwiperSlide>
              <SwiperSlide className="swiper-item">14</SwiperSlide>
              <SwiperSlide className="swiper-item">15</SwiperSlide>
              <SwiperSlide className="swiper-item">16</SwiperSlide>
              <SwiperSlide className="swiper-item">17</SwiperSlide>
              <SwiperSlide className="swiper-item">18</SwiperSlide>
              <SwiperSlide className="swiper-item">19</SwiperSlide>
              <SwiperSlide className="swiper-item">20</SwiperSlide>
              <SwiperSlide className="swiper-item">21</SwiperSlide>
              <SwiperSlide className="swiper-item">22</SwiperSlide>
              <SwiperSlide className="swiper-item">23</SwiperSlide>
              <SwiperSlide className="swiper-item">24</SwiperSlide>
              <SwiperSlide className="swiper-item">25</SwiperSlide>
              <SwiperSlide className="swiper-item">26</SwiperSlide>
              <SwiperSlide className="swiper-item">27</SwiperSlide>
              <SwiperSlide className="swiper-item">28</SwiperSlide>
              <SwiperSlide className="swiper-item">29</SwiperSlide>
              <SwiperSlide className="swiper-item">30</SwiperSlide>
              <SwiperSlide className="swiper-item">31</SwiperSlide>
              <SwiperSlide className="swiper-item">32</SwiperSlide>
              <SwiperSlide className="swiper-item">33</SwiperSlide>
              <SwiperSlide className="swiper-item">34</SwiperSlide>
              <SwiperSlide className="swiper-item">35</SwiperSlide>
              <SwiperSlide className="swiper-item">36</SwiperSlide>
              <SwiperSlide className="swiper-item">37</SwiperSlide>
              <SwiperSlide className="swiper-item">38</SwiperSlide>
              <SwiperSlide className="swiper-item">39</SwiperSlide>
              <SwiperSlide className="swiper-item">40</SwiperSlide>
              <SwiperSlide className="swiper-item">41</SwiperSlide>
              <SwiperSlide className="swiper-item">42</SwiperSlide>
              <SwiperSlide className="swiper-item">43</SwiperSlide>
              <SwiperSlide className="swiper-item">44</SwiperSlide>
              <SwiperSlide className="swiper-item">45</SwiperSlide>
              <SwiperSlide className="swiper-item">46</SwiperSlide>
              <SwiperSlide className="swiper-item">47</SwiperSlide>
              <SwiperSlide className="swiper-item">48</SwiperSlide>
              <SwiperSlide className="swiper-item">49</SwiperSlide>
              <SwiperSlide className="swiper-item">50</SwiperSlide>
              <SwiperSlide className="swiper-item">51</SwiperSlide>
              <SwiperSlide className="swiper-item">52</SwiperSlide>
              <SwiperSlide className="swiper-item">53</SwiperSlide>
              <SwiperSlide className="swiper-item">54</SwiperSlide>
              <SwiperSlide className="swiper-item">55</SwiperSlide>
              <SwiperSlide className="swiper-item">56</SwiperSlide>
              <SwiperSlide className="swiper-item">57</SwiperSlide>
              <SwiperSlide className="swiper-item">58</SwiperSlide>
              <SwiperSlide className="swiper-item">59</SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="hour-section" onClick={handelDurationPickerShow}>
          <p>2 Hours</p>
          <div
            style={{
              background: "#FDFDFD",
              display: "flex",
              visibility: showDurationPicker ? "" : "hidden",

              position: "absolute",
              border: "2px solid darkgray",
              borderRadius: "15px",
              justifyContent: "center",
              alignItems: "center",
              width: "120px",
            }}
            ref={refDuration}
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
              className="swiper-container-duration "
            >
              <SwiperSlide className="swiper-item-duration">1 hour</SwiperSlide>
              <SwiperSlide className="swiper-item-duration">2 hour</SwiperSlide>
              <SwiperSlide className="swiper-item-duration">3 hour</SwiperSlide>
              <SwiperSlide className="swiper-item-duration">4 hour</SwiperSlide>
              <SwiperSlide className="swiper-item-duration">5 hour</SwiperSlide>
              <SwiperSlide className="swiper-item-duration">6 hour</SwiperSlide>
              <SwiperSlide className="swiper-item-duration">
                overnigh
              </SwiperSlide>
              <SwiperSlide className="swiper-item-duration">30 min</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeComponent;

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

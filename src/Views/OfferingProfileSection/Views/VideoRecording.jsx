import React, { useState, useRef, useEffect } from "react";
import NavigationView from "../Components/NavigationView";
import RecordButton from "../Components/RecordButton";
import RecordButtonScheme from "../Components/RecordButtonScheme";
import { useHistory } from "react-router";
import LogoSection from "../Components/LogoSection";
import playVideoIcon from "../../../assets/images/playButton.svg";
import reloadAgain from "../../../assets/images/reloadVideo.svg";
import { uploadFile, updateVideoUrl } from "../../../Utlity/FirebaseFunction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useLocation } from "react-router-dom";

let timerInterval;
let sourceStream;
let media_recorder = null;
let blobs_recorded = [];
let videoReference;

const VideoRecording = () => {
  const videoRef = useRef();
  let history = useHistory();

  let location = useLocation();

  const [startRecording, setstartRecording] = useState(false);
  const [showRecordingScreen, setShowRecordingScreen] = useState(false);
  const [cameraText, setCameraText] = useState(["Look in the camera"]);
  const [playingVideo, setPlayingVideo] = useState(false);
  const [playingVideoControls, setPlayingVideoControls] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCameraText((pre) => [...pre, "Push Button for Record"]);
    }, 3000);

    setTimeout(() => {
      setCameraText((pre) => [...pre, "Read the color"]);
    }, 6000);
    setTimeout(() => {
      setShowRecordingScreen(true);
    }, 9000);
  }, []);

  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (location.state) {
      setShowRecordingScreen(true);
      setPlayingVideoControls(true);
      setPlayingVideo(true);
      videoReference = videoRef.current;
      videoReference.src = location.state.imageUrl;
      handelRecordedVideoPlay();
    }
  }, []);

  useEffect(() => {
    if (timer < 1) {
      stopRecording();
    }
  }, [timer]);

  function handelRecording() {
    if (showRecordingScreen) {
      setstartRecording(true);

      media_recorder = new MediaRecorder(sourceStream, {
        mimeType: "video/webm",
      });

      // event : new recorded video blob available
      media_recorder.addEventListener("dataavailable", function (e) {
        blobs_recorded.push(e.data);
      });
      media_recorder.start(1000);

      timerInterval = setInterval(() => {
        setTimer((pre) => pre - 1);
      }, 1000);
    }
  }

  function stopRecording() {
    setstartRecording(false);

    let video_local = URL.createObjectURL(
      new Blob(blobs_recorded, { type: "video/webm" })
    );

    clearInterval(timerInterval);
    setTimer(15);
    // videoReference.srcObject = null;
    handelStop();
    setPlayingVideo(true);
    setPlayingVideoControls(true);
    videoReference.src = video_local;
  }

  let getVideo = async () => {
    blobs_recorded = [];
    try {
      sourceStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoReference = videoRef.current;

      videoReference.srcObject = sourceStream;
      videoReference.muted = true;
      videoReference.play();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!location.state) {
      getVideo();
    }
  }, [videoRef]);

  let handelStop = () => {
    const stream = videoReference.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });

      videoReference.srcObject = null;
    }
  };

  let handelRecordedVideoPlay = () => {
    videoReference.play();
    videoReference.muted = false;
    setPlayingVideoControls(false);

    videoReference.onended = () => {
      setPlayingVideoControls(true);
    };
  };
  let handelRecordedVideoSave = async () => {
    // let video_local = URL.createObjectURL(
    //   new Blob(blobs_recorded, { type: "video/webm" })
    // );
    // const a = document.createElement("a");
    // a.href = video_local;
    // a.download = "Video Recorded";
    // a.click();

    let userId = sessionStorage.getItem("userId");
    setLoading(true);
    let blobData = new Blob(blobs_recorded, { type: "video/webm" });
    let result = await uploadFile(
      blobData,
      "video/mp4",
      userId + "Video",
      "video/"
    );
    setLoading(false);

    updateVideoUrl(userId, result);

    setTimeout(() => {
      handelStop();
      history.push("/escort-section");
    }, 1000);
  };
  let handelRecordAgain = () => {
    getVideo();
    setPlayingVideoControls(false);
    setPlayingVideo(false);
    setstartRecording(false);
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div
        className="bank-model"
        style={{ height: "80vh", position: "relative", padding: "0" }}
      >
        <LogoSection padding={true} closeCamera={handelStop} />

        <div className="record-video-heading">
          <p>You can record a video up to 15 seconds</p>
        </div>
        {/* recording frame */}
        <div className="video-container">
          <video ref={videoRef} className="videoInsert"></video>
          <div
            className="record-button-position"
            style={{ display: playingVideo ? "none" : "" }}
          >
            <RecordButton
              onClick={handelRecording}
              onStop={stopRecording}
              recordStatus={showRecordingScreen}
              recordStart={startRecording}
            />
          </div>

          <div
            className="recorded-video-container"
            style={{
              display: playingVideo && playingVideoControls ? "flex" : "none",
            }}
          >
            <div
              className="recorded-video-play"
              onClick={handelRecordedVideoPlay}
            >
              <img src={playVideoIcon} alt="play" />
            </div>
            <div className="recorded-video-reload" onClick={handelRecordAgain}>
              <img src={reloadAgain} alt="reload" />
            </div>
            <div
              className="recorded-video-save"
              onClick={handelRecordedVideoSave}
            >
              <div>
                <CircularProgress
                  disableShrink
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                    color: "#577954",
                    display: loading ? "flex" : "none",
                  }}
                />
              </div>
              <p>Save</p>
            </div>
          </div>

          <div
            className="record-scheme-container"
            style={{ display: playingVideo ? "none" : "" }}
          >
            <RecordButtonScheme
              title="Red"
              color={startRecording ? "#FF0000" : ""}
            />
            <RecordButtonScheme
              title="Green"
              color={startRecording ? "green" : ""}
            />
            <RecordButtonScheme
              title="Blue"
              color={startRecording ? "blue" : ""}
            />
            <RecordButtonScheme
              title="Orange"
              color={startRecording ? "orange" : ""}
            />
          </div>
          <div
            className="look-camera-text"
            style={{ display: startRecording || playingVideo ? "none" : "" }}
          >
            {cameraText.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div
            className={showRecordingScreen ? "" : "transperent-background"}
          ></div>
          <div className={startRecording ? "recording-timer" : "recording-off"}>
            <p>00:{timer}</p>
          </div>
        </div>

        <div
          style={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            boxSizing: "border-box",
          }}
        >
          <NavigationView active="3" />
        </div>
      </div>
    </div>
  );
};

export default VideoRecording;

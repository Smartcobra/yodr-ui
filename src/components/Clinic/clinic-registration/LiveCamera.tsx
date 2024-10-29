import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  facingMode: "environment",
};

const LiveCamera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const capturePhoto = useCallback(() => {
    setShowCamera(true);
    if (webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      setUrl(imgSrc);
    } else {
      console.error("Webcam is not ready");
    }
  }, [webcamRef]);

  const onUserMedia = (e: any) => {
    console.log(e);
  };

  return (
    <div className="p-4 mx-2">
      <div className="text-3xl font-semibold pt-8">
        Business Unit Live Images
      </div>

      <p className="text-sm">Please Turn On Your Camera To Upload Front Photo</p>
     <div className="pt-4">

      <button onClick={capturePhoto} className="bg-[#38ada7] p-2 px-5 font-semibold text-sm m-2 border text-white rounded-lg">
        Capture
      </button>
      <button onClick={() => setUrl(null)} className="bg-gray-300 p-2 px-5 font-semibold text-sm m-2 rounded-lg">Refresh</button>
     </div>
      {showCamera ? (
        <div>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMedia={onUserMedia}
          />

          {url && (
            <div className="pt-2">
              <img src={url} alt="Screenshot" />
            </div>
          )}
        </div>
      ) : (
        <div >
          <img src="https://dev.yodr.live/assets/icons/noimage.jpg" alt="no-image" />
        </div>
      )}
    </div>
  );
};

export default LiveCamera;

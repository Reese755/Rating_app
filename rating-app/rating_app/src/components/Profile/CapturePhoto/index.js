import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Modal from '../../Modal'; // Import the modal

function CapturePhoto({ onCapture }) {
  const [isCameraOpen, setIsCameraOpen] = useState(false); // For modal
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    onCapture(imageSrc);
    setIsCameraOpen(false); // Close modal after capture
  };

  return (
    // Button for the camera
    <div>
      {/* <button onClick={() => setIsCameraOpen(true)}>Take New Picture</button> */}

      {/* Modal for the camera */}
      <Modal isOpen={isCameraOpen} onClose={() => setIsCameraOpen(false)}>
        <div>
          {!capturedImage ? (
            <div>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={640}  // Larger webcam view
                height={480}
              />
              <button onClick={capture}>Capture Photo</button>
            </div>
          ) : (
            <img src={capturedImage} alt="Captured" />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default CapturePhoto;
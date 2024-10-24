import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const getCroppedImg = (image, crop) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg');
  });
};

function CropImage({ capturedImage, onCropComplete }) {
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const handleCropComplete = async (crop) => {
    const image = document.querySelector('#capturedImage');
    if (image && crop.width && crop.height) {
      const croppedUrl = await getCroppedImg(image, crop);
      setCroppedImageUrl(croppedUrl);
      onCropComplete(croppedUrl);
    }
  };

  return (
    <div>
      {capturedImage && (
        <>
          <ReactCrop
            src={capturedImage}
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            onComplete={handleCropComplete}
          />
          <img
            id="capturedImage"
            src={capturedImage}
            alt="Captured"
            style={{ display: 'none' }}
          />
        </>
      )}
      {croppedImageUrl && (
        <div>
          <h3>Cropped Image:</h3>
          <img src={croppedImageUrl} alt="Cropped" />
        </div>
      )}
    </div>
  );
}

export default CropImage;
import React from 'react';
import QrCode from 'react-qr-code';

const QRCode = ({ value, size, bg }) => {
  return (
    <div>
      <QrCode value={value} size={size} bgColor={bg} />
    </div>
  );
};

export default QRCode;

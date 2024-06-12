import React, { useState, Suspense, lazy } from 'react';

// Import the QRCode component correctly
const QRCode = lazy(() => import('./QRCode'));

function QRCodeGenerator() {
  const [input, setInput] = useState('');
  const [qrcode, setQrcode] = useState('');

  function handleGenerateQRCode() {
    setQrcode(input);
  }

  return (
    <div className='container'>
      <h2>QR Code Generator</h2>
      <div>
        <input onChange={(e) => setInput(e.target.value)} type='text' name='qr-code' placeholder="Enter QR code" />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQRCode}>Generate</button>
      </div>
      <div>
        {qrcode && (
          <Suspense fallback={<div>Loading QR code...</div>}>
            <QRCode value={qrcode} size={400} bg='#fff' />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default QRCodeGenerator;

import { useState } from "react";
export const Qrcode = () => {
    const [img,setImg]=useState("")
    const [loading,setLoading]=useState(false);
    const [qrData,setQrData]=useState("")
    const [qrSize,setQrSize]=useState("")
    async function generateQR()
    {
      setLoading(true);
      try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url)
      }catch(errror)
      {
        console.error("Error generating in QR code",errror);
      }
      finally{
        setLoading(false)
      }
    }
  
    return (
     <div>
      <div className="app-container">
        <h1>QrCode Generator</h1>
      {img &&<img src={img} className='qr-code-image'/>}
      {loading && <p>Please wait....</p>}
    <div>
      <label htmlFor="dataInput" className="input-label">
        Data for QR code:
      </label>
      <input type="text" value={qrData}id="dataInput" placeholder="Enter link for QR code" onChange={(e)=>setQrData(e.target.value)}/>
      <label htmlFor="sizeInput" className="input-label">
        Image size (e.g., 150):
      </label>
      <input type="text"  value={qrSize} id="sizeInput" placeholder="Enter Image size" onChange={(e)=>setQrSize(e.target.value)}/>
      <button className='generate-button' onClick={generateQR} disabled={loading}>Generate QR Code</button>
     
    </div>
  </div>
  
     </div>
    )
};


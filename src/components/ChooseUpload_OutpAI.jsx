
import { useState } from 'react';

function ChooseUploadOutpAI({ count, setCount, setSuccessfulUploads }) { 
    const [file, setFile] = useState(null);
    const [aiOutput, setAiOutput] = useState(null);
    
    const handleChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
    };

//   const handleFileChange = (event) => {
//       const file = event.target.files[0];
//       const reader = new FileReader();

//       reader.onloadend = () => {
//             // The result is in base64 format: "data:image/png;base64,iVBORw..."
//             const base64String = reader.result.split(',')[1];
        
//             // Send base64String to Python backend
//             uploadFile(base64String, file.name);
//   };
  
//   reader.readAsDataURL(file);
// };

const handleFileUpload = async () => {
    console.log("button clicked");

    try {
        if (!file) {
            console.error("No file selected");
            return;
        }

        // Convert file to base64
        const base64 = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result.split(',')[1]); // remove metadata prefix
            reader.onerror = error => reject(error);
        });

        const payload = {
            filename: file.name,
            image: base64
        };

        const response = await fetch("http://localhost:8000/upload/upload-image", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log("File uploaded successfully:", data);

    } catch (error) {
        console.error("Error uploading file:", error);
    }
};

    console.log(file); // This will log the selected file to the console for testing purposes.
    return (
        <div id="PickUploadAI">

            {/* Choose-File button */}
            <input onChange={(e) => { handleChange(e) }} name="file-upload" id="file-upload" type="file" accept="image/*"  />

            {/* Upload button */}
            <button id="upload-button" type="button" onClick={() => handleFileUpload()}>Upload</button>
            <p id="upload-message">Thanks for sharing your photo! Wait for info from AI or upload another photo.</p> 
            <p>Please come back in less than a week.</p>
            
            {/* AI-output placeholder */}
            <section id="ai-output">
                <h3>AI Analysis</h3>
                <p>Your photo is being analyzed. Please wait for info about your photo.</p>
                <div id="ai-description"></div>
            </section> 
            
        </div>
    );
};

export default ChooseUploadOutpAI;
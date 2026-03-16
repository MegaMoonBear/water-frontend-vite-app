
import { useState } from 'react';

function ChooseUploadOutpAI({ count, setCount, setSuccessfulUploads }) { 
    const [file, setFile] = useState(null);
    const [aiOutput, setAiOutput] = useState(null);
    
    const handleChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        handleFileUpload(uploadedFile); // Call handleFileUpload - function called directly within handleChange after file selected
    };

    const handleFileUpload = async (file) => {
        try {
            const requestOptions = {
                method: "POST",
                 headers: {
                     'Content-Type': "multipart/form-data",
                    'Access-Control-Allow-Origin': '*'
                 },
                body: file
             };
            const response = await fetch('/upload-image', requestOptions);
            // const data = await response.json();
            // console.log('File uploaded successfully:', data);
            // setAiOutput(data); // Update AI output state with the response data

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    console.log(file); // This will log the selected file to the console for testing purposes.
    return (
        <div id="PickUploadAI">

            {/* Choose-File button */}
            <input onChange={(e) => { handleChange(e) }} name="file-upload" id="file-upload" type="file" accept="image/*"  />

            {/* Upload button */}
            <button id="upload-button" type="button" onClick={() => handleFileUpload(file)}>Upload</button>
            <p id="upload-message">Thanks for sharing your photo! Wait for info from AI, upload another photo, or come back in 1-7 days.</p> 
            
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
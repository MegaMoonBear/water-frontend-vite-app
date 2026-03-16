import './ChooseUpload_OutpAI.css';
import { useState } from 'react';
import { post } from '../apiService'; // Adjust the path as needed

// Div to "Choose File", then Upload Photo file and trigger AI analysis of the photo, with output of AI-generated description.
    // First button to "Choose File"
        // Section with placeholder for output of AI-generated description, after upload and analysis.
    // Second button to trigger upload process, then AI analysis of photo. 
        // Message to indicate successful upload and options for next steps. 
    // Placeholder for AI output with guiding "paragraph". 
function ChooseUploadOutpAI({ count, setCount, setSuccessfulUploads }) { 
    const [file, setFile] = useState(null);
    
    const handleChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        // Here you can add code to handle the file, such as uploading it to a server or displaying a preview.
    }

    const handleUpload = async () => {
        setCount(count + 1); // Increment button click count

        // Simulate a successful upload (replace this with actual upload logic)
        const isSuccess = Math.random() > 0.2; // 80% chance of success
        if (isSuccess) {
            setSuccessfulUploads((prev) => prev + 1); // Increment successful uploads
        }
    }

    const handleFileUpload = async (file) => {
        try {
            const response = await post('/upload-image', file);
            console.log('File uploaded successfully:', response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    handleChange(e) => handleFileUpload(e.target.files[0])

    console.log(file); // This will log the selected file to the console for testing purposes.
    return (
        <div id="PickUploadAI">

            {/* Choose-File button */}
            {/* <img src="your-image-source.png" alt="Choose File" style={{ cursor: 'pointer' }} /> */}
            <label htmlFor="file-upload">
                Choose File
            </label>
            <input onChange={(e) => { handleChange(e) }} name="file-upload" id="file-upload" type="file" accept="image/*" style={{ display: 'none' }} />

            {/* Upload button */}
            <button id="upload-button" type="button" onClick={handleUpload}>Upload</button>
            <p id="upload-message">Thanks for sharing your photo! Wait for AI, upload another, or come back to do or learn more in 1-7 days.</p> 
            
            {/* AI-output placeholder */}
            <section id="ai-output">
                <h3>AI Analysis</h3>
                <p>Your photo is being analyzed. Please wait for a description.</p>
                <div id="ai-description"></div>
            </section> 
            
        </div>
    );
};

export default ChooseUploadOutpAI;
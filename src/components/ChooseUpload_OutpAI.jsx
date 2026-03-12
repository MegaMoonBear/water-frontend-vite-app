        import React from 'react';
        import './ChooseUpload_OutpAI.css';

// Div to "Choose File", then Upload Photo file and trigger AI analysis of the photo, with output of AI-generated description.
    // First button to "Choose File"
    // Section with placeholder for output of AI-generated description, after upload and analysis.
        // Second button to trigger upload process, then AI analysis of photo. 
            // First paragraph to indicate successful upload. 
                // Last paragraph as placeholder for AI output. 
function ChooseUploadOutpAI() { 
    return (
        <div id="PickUploadAI">

            {/* Choose-File button */}
            <label htmlFor="file-upload">
                <img src="your-image-source.png" alt="Choose File" style={{ cursor: 'pointer' }} />
            </label>
            <input id="file-upload" type="file" accept="image/*" style={{ display: 'none' }} />

            {/* Upload button */}
            <button id="upload-button" type="button">Upload</button>
            <p id="upload-message">Thanks for sharing your photo! Wait for AI, upload another, or come back to do or learn more in a week.</p> 
            
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
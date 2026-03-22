import { useState } from 'react';

function ChooseUploadOutpAI() { 
    const [file, setFile] = useState(null);
    const [aiResponse, setAiResponse] = useState(""); // <-- New state for AI output
    const [showMessage, setShowMessage] = useState(false); // <-- New state to control message visibility

    const handleChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
    };

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

            // Update AI response state
            if (data.ai_response) {
                setAiResponse(data.ai_response);
            } else {
                setAiResponse("No AI response returned.");
            }

            // Show the message after upload
            setShowMessage(true);

        } catch (error) {
            console.error("Error uploading file:", error);
            setAiResponse("Error uploading file. Please try again.");
        }
    };

    return (
        <div id="PickUploadAI">

            {/* Choose-File button */}
            <input onChange={handleChange} name="file-upload" id="file-upload" type="file" accept="image/*" />

            {/* Upload button */}
            <button id="upload-button" type="button" onClick={handleFileUpload}>Upload</button>
            
            {/* Conditional message display */}
            {showMessage && (
                <p id="upload-message">Thanks for sharing your photo! Wait for info from AI (below) or upload another photo.</p>
            )}
            
            {/* AI-output placeholder */}
            <p><strong>AI Analysis:</strong> <span id="ai-description">{aiResponse || "Once you upload a photo, please wait for info about your photo."}</span></p>
            
        </div>
    );
};

export default ChooseUploadOutpAI;
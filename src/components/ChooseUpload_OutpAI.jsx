import { useState } from 'react';

function ChooseUploadOutpAI() { 
    const [file, setFile] = useState(null);
    const [aiResponse, setAiResponse] = useState(""); // <-- New state for AI output
    
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
            
            <p id="upload-message">Thanks for sharing your photo! Wait for info from AI or upload another photo.</p> 
            
            {/* AI-output placeholder */}
            <section id="ai-output">
                <h3>AI Analysis</h3>
                <div id="ai-description">{aiResponse || "Please wait for info about your photo."}</div>
            </section> 
            
        </div>
    );
};

export default ChooseUploadOutpAI;
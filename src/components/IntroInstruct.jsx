import './IntroInstruct.css';

// Introductory paragraph and instructions for how to use the site,...
    // ...including a call-to-action to share a photo of water or a wetland. 
        // Re-add SOFTER Call-To-Action (CTA): Take a quick look, See how it works, Try one photo
function IntroInstr() { 
    return (
        <div id="Intro_Instruct">
          <p>Many of us see water sitting or flowing in our neighborhoods. Even small streams and ponds help clean our water and reduce flooding. Share a photo to support vital water resources.</p>
          <p>Easily share a photo of water or a wetland through this site - takes less than a minute.</p> 
          {/* Re-add "button" to "Choose File", once that is visually implemented for UI in CSS */}
            <ol>
              <li>Click <strong>"Choose File"</strong>, then select your photo. </li> 
              <li>Click <strong>"Upload"</strong> button to submit. </li>
              <li>Scroll down and wait a moment for the AI to describe your photo. </li>
            </ol>
            <p>Your photo will teach us about vital water resources.</p>
        </div>
    );
};

export default IntroInstr;
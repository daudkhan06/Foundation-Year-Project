function changeTextSize(factor) {
    if (factor === "" || factor == null) {
        // If input is empty or null, reset to default font size
        localStorage.removeItem("fontSizeFactor"); // Remove the stored factor
        
        // Reset font size to default for all text elements
        document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, .text, a").forEach((element) => {
            element.style.fontSize = ""; // Remove the inline style, revert to original size
        });
        return;
    }

    // Store the factor in localStorage so it persists across pages
    localStorage.setItem("fontSizeFactor", factor);

    // Apply the size change to elements on the current page
    document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, .text, a").forEach((element) => {
        let currentSize = window.getComputedStyle(element).fontSize; 
        let currentSizeValue = parseFloat(currentSize); // Get numerical value
        if (!isNaN(currentSizeValue)) {
            let newSize = currentSizeValue * factor;
            element.style.fontSize = newSize + "px"; // Apply new size in px
        }
    });
}

// Function to apply the stored font size factor when the page loads
function applyStoredFontSize() {
    let storedFactor = localStorage.getItem("fontSizeFactor");

    if (storedFactor) {
        storedFactor = parseFloat(storedFactor);
        if (storedFactor > 0) {
            // Apply stored factor to all text elements on this page
            document.querySelectorAll("*").forEach((element) => {
                let currentSize = window.getComputedStyle(element).fontSize;
                let currentSizeValue = parseFloat(currentSize);
                if (!isNaN(currentSizeValue)) {
                    let newSize = currentSizeValue * storedFactor;
                    element.style.fontSize = newSize + "px";
                }
            });
        }
    }
}

function toggleBoldText() {
    document.body.classList.toggle("bold-text"); //Turns on and off bold text

    const isBold = document.body.classList.contains("bold-text"); //Store the preference in localStorage of whether bold is active
    localStorage.setItem("isBoldText", isBold)
}

// Function to apply the stored bold text preference when the page loads
function applyStoredBoldText() {
    // Retrieve the stored preference from localStorage
    const isBold = localStorage.getItem("isBoldText");

    // If there is a stored preference, apply it to the body
    if (isBold === "true") {
        document.body.classList.add("bold-text");
    } else {
        document.body.classList.remove("bold-text");
    }
}

// Call applyStoredFontSize when the page loads
document.addEventListener("DOMContentLoaded", applyStoredFontSize);
// Apply stored preference when the page loads
document.addEventListener("DOMContentLoaded", applyStoredBoldText);


  
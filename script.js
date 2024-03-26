const languageSelect = document.getElementById("language-select");
const codeEditor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,
    theme: "default"
});

const outputContainer = document.getElementById("output");

function executeCode() {
    outputContainer.innerHTML = ""; // Clear previous output
    const code = codeEditor.getValue();
    const selectedLanguage = languageSelect.value;
    try {
        let result;
        if (selectedLanguage === "javascript") {
            result = eval(code);
        } else if (selectedLanguage === "python") {
            // Implement code execution for Python using an API or backend service
            // Example: send code to a Python interpreter running on the server
            // and receive the output
            // This part needs backend implementation
            result = "Python execution not supported in this demo.";
        } else {
            result = "Language not supported.";
        }
        outputContainer.textContent = result;
    } catch (error) {
        outputContainer.textContent = "Error: " + error.message;
    }
}

Minimum Edit Distance Calculator
This is a simple, client-side web application that calculates the Levenshtein distance (also known as Edit Distance) between two input strings. The Levenshtein distance is the minimum number of single-character edits (insertions, deletions, or substitutions) required to transform one string into another.

The entire application runs directly in the user's browser, built with standard web technologies: HTML for structure, Tailwind CSS for styling, and JavaScript for the core logic.

✨ Features
Calculate Levenshtein Distance: Efficiently computes the minimum edit distance between any two strings you provide.

User-Friendly Interface: Clean and intuitive design for easy input and result display.

Client-Side Operation: No server-side dependencies; everything runs directly in your web browser.

Responsive Design: Adapts seamlessly to different screen sizes for a consistent experience on desktop and mobile devices.

Custom Modals: Utilizes custom modal dialogs for messages instead of native browser alerts, providing a smoother and more integrated user experience.

🚀 How to Use
Save the File: Download or copy the index.html content and save it as index.html on your computer.
(Note: This project is designed as a single HTML file for easy deployment and preview compatibility.)

Open in Browser: Double-click the index.html file or drag it into your web browser (e.g., Chrome, Firefox, Edge).

Enter Strings:

Type your first string into the "First String" input field.

Type your second string into the "Second String" input field.

Get Result: Click the "Calculate Edit Distance" button. The calculated minimum edit distance will be displayed clearly below the input fields.

🛠️ Technical Details
This project leverages the following technologies:

HTML5: Provides the foundational structure and content of the web page.

CSS (Tailwind CSS): Used for rapid and responsive styling, ensuring a clean, modern, and mobile-first design. The Tailwind CSS CDN is directly included for simplicity.

JavaScript: Powers the interactive elements and implements the core algorithm.

Levenshtein Distance Algorithm
The heart of this application is the levenshteinDistance(s1, s2) JavaScript function. It employs a dynamic programming approach to compute the distance, following these steps:

Initialization: A 2D array (matrix) dp is created. dp[i][j] will store the Levenshtein distance between the first i characters of s1 and the first j characters of s2.

Base Cases: The first row (dp[i][0]) and first column (dp[0][j]) are initialized. dp[i][0] represents the cost of transforming the first i characters of s1 into an empty string (requiring i deletions). Similarly, dp[0][j] represents the cost of transforming an empty string into the first j characters of s2 (requiring j insertions).

Matrix Filling: The algorithm iterates through the rest of the matrix, calculating dp[i][j] based on the minimum of three possibilities:

Deletion: dp[i-1][j] + 1 (cost of deleting the character s1[i-1])

Insertion: dp[i][j-1] + 1 (cost of inserting the character s2[j-1])

Substitution: dp[i-1][j-1] + cost (cost of substituting s1[i-1] with s2[j-1]). The cost is 0 if the characters are the same, and 1 if they are different.

Final Result: The minimum edit distance between the entire s1 and s2 is found at dp[m][n], where m and n are the respective lengths of the input strings.

📁 Project Structure
.
└── index.html



Due to compatibility considerations with certain preview environments, all HTML, CSS, and JavaScript are bundled into a single index.html file for straightforward deployment and execution.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please feel free to:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature/your-feature-name).

Open a Pull Request.

📄 License
This project is open-source and available under the MIT License.

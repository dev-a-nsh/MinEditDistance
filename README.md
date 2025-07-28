Minimum Edit Distance Calculator
This is a simple, client-side web application that calculates the Levenshtein distance (also known as Edit Distance) between two input strings. The Levenshtein distance is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.

The entire application runs in the user's browser, built with HTML, Tailwind CSS for styling, and JavaScript for the core logic.

Features
Calculate Levenshtein Distance: Efficiently computes the minimum edit distance between any two strings you provide.

User-Friendly Interface: Clean and intuitive design for easy input and result display.

Client-Side Operation: No server-side dependencies; everything runs directly in your web browser.

Responsive Design: Adapts to different screen sizes for a consistent experience on desktop and mobile.

Custom Modals: Uses custom modal dialogs for messages instead of native browser alerts for a smoother user experience.
Technical Details
HTML: Provides the structure and content of the web page.

CSS (Tailwind CSS): Used for rapid and responsive styling, ensuring a clean and modern look.

JavaScript: Implements the Levenshtein distance algorithm and handles all user interactions (input, button clicks, result display, and modal management).

Levenshtein Distance Algorithm
The core logic resides in the levenshteinDistance(s1, s2) JavaScript function. It uses dynamic programming to compute the distance, following these steps:

Initializes a 2D array (matrix) dp where dp[i][j] will store the Levenshtein distance between the first i characters of s1 and the first j characters of s2.

The first row and column are initialized to represent the cost of transforming an empty string into a string of length i or j (which is simply i or j insertions/deletions).

It iterates through the rest of the matrix, calculating dp[i][j] based on the minimum of three possibilities:

Deletion: dp[i-1][j] + 1

Insertion: dp[i][j-1] + 1

Substitution: dp[i-1][j-1] + cost (where cost is 0 if characters are the same, 1 if different).

The final result is found at dp[m][n], where m and n are the lengths of the input strings.


function showMessage(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('messageModal').classList.remove('hidden');
}

document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('messageModal').classList.add('hidden');
});

function levenshteinDistance(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = (s1[i - 1] === s2[j - 1]) ? 0 : 1;

            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,        // Deletion
                dp[i][j - 1] + 1,        // Insertion
                dp[i - 1][j - 1] + cost  // Substitution
            );
        }
    }

    // The bottom-right cell of the matrix contains the Levenshtein distance
    // between the entire s1 and s2.
    return dp[m][n];
}

const string1Input = document.getElementById('string1');
const string2Input = document.getElementById('string2');
const calculateButton = document.getElementById('calculateBtn');
const resultDisplay = document.getElementById('editDistanceResult');


calculateButton.addEventListener('click', () => {
    const str1 = string1Input.value.trim(); 
    const str2 = string2Input.value.trim(); 

    if (str1 === '' || str2 === '') {
        showMessage('Input Error', 'Please enter both strings to calculate the edit distance.');
        resultDisplay.textContent = '-'; 
        return; 
    }
    const distance = levenshteinDistance(str1, str2);

    resultDisplay.textContent = distance;
});

string1Input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculateButton.click();
    }
});

string2Input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculateButton.click();
    }
});

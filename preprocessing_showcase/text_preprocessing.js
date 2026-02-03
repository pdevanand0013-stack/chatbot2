/**
 * TEXT PREPROCESSING MODULE
 * -------------------------
 * This file contains the logic used to clean, normalize, and understand user text input.
 * It uses two main techniques:
 * 1. NLP (Natural Language Processing) for intent detection.
 * 2. Levenshtein Distance for fuzzy matching (typo tolerance).
 */

// 1. INPUT NORMALIZATION & TOKENIZATION
// -------------------------------------
function preprocessText(input) {
    // Convert to lowercase to ensure case-insensitivity
    // Example: "Fees" -> "fees"
    const lowerText = input.toLowerCase();

    // Split into individual tokens (words) for detailed analysis
    // Example: "fees for btech" -> ["fees", "for", "btech"]
    const tokens = lowerText.split(/\s+/);

    return { lowerText, tokens };
}

// 2. FUZZY MATCHING ALGORITHM (Levenshtein Distance)
// --------------------------------------------------
// This function calculates how different two strings are.
// It is used to handle typos (e.g., user types "cost" as "csot").

function getSimilarity(s1, s2) {
    let longer = s1.toLowerCase();
    let shorter = s2.toLowerCase();
    if (longer.length < shorter.length) {
        let tmp = longer;
        longer = shorter;
        shorter = tmp;
    }
    let longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) costs[j] = j;
            else if (j > 0) {
                let newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// 3. INTENT RECOGNITION (Logic Flow)
// ----------------------------------
function findBestMatch(tokens, categories) {
    let bestMatch = { category: 'default', score: 0 };

    for (const [category, keywords] of Object.entries(categories)) {
        for (const keyword of keywords) {
            for (const word of tokens) {
                // Calculate similarity score (0.0 to 1.0)
                const score = getSimilarity(word, keyword);

                // Threshold: If > 80% match, consider it a hit
                if (score > 0.8 && score > bestMatch.score) {
                    bestMatch = { category, score };
                }
            }
        }
    }
    return bestMatch;
}

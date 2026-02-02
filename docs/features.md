# 🤖 Sreepathy Institute Admission Chatbot - Feature Overview

This document provides a comprehensive list of all the features currently implemented in the Admission Chatbot.

## 🎓 Core Admission Features

### 1. **Multi-Course Support**
The bot handles inquiries for a wide range of academic programs:
-   **Undergraduate (B.Tech)**: Computer Science, AI & DS, VLSI, EEE, Civil, Mechanical.
-   **Undergraduate (BCA)**: Computer Applications.
-   **Undergraduate (B.Sc)**: Computer Science, Mathematics, Physics, Chemistry.
-   **Postgraduate (MBA)**: Finance, HR, Marketing.

### 2. **Intelligent Fee Inquiry (New!)** 🧠
-   **Context Awareness**: If a user asks "What are the fees?", the bot intelligently asks *"Which course?"* instead of dumping all data.
-   **Specific Responses**: Provides tailored fee tables based on the user's selection (B.Tech, BCA, etc.).

### 3. **Smart Eligibility Check** ✅
-   **Interactive Flow**: Guides students through checking their eligibility (PCM marks, KEAM rank).
-   **Instant Feedback**: Immediately tells the student if they qualify or suggests alternatives (e.g., *suggets BCA if B.Tech eligibility fails*).

### 4. **Dynamic Scholarship Calculator** 💰
-   **Merit-Based**: automatically applies discounts for high PCM marks (up to 50%).
-   **Rank-Based**: Adds bonuses for good KEAM ranks.
-   **Category-Based**: Manual selection for SC/ST, OBC, EWS, and Sports Quota.
-   **Total Calculation**: Sums up all discounts and shows the final percentage.

---

## 🛠️ Advanced Technical Features

### 5. **OCR Document Verification** 📄
-   **Technology**: Integrated **Tesseract.js** for optical character recognition.
-   **Function**: Users can upload images of their +2 Marksheets or Certificates.
-   **Verification**: The bot reads the text from the image, detects percentages, and verifies if they match the user's claimed marks.

### 6. **Natural Language Processing (NLP)** 🗣️
-   **Fuzzy Matching**: Understands typos (e.g., "fee structure" vs "fee stucture").
-   **Intent Recognition**: Maps various phrases to core intents (e.g., "cost", "price", "money" -> Fees).
-   **Small Talk**: Handles greetings and general questions ("Who are you?", "How are you?").

### 7. **Voice Interaction** 🎤
-   **Speech-to-Text**: Users can click the microphone icon to speak their queries.
-   **Visual Feedback**: A pulsing recording indicator shows when the bot is listening.

---

## 🎨 UI/UX Features

### 8. **Authentic Visual Experience** 🏫
-   **Campus Showcase**: Displays real photos of the Sreepathy Campus when asked.
-   **Location Cards**: Shows the full address and a visual map/location card.
-   **Dynamic Backgrounds**: The website background subtly changes every 15 seconds to keep the interface lively.

### 9. **Responsive Design** 📱
-   **Mobile-First**: Fully optimized for smartphones and tablets.
-   **Chat Interface**: Modern, bubble-based chat UI with timestamps and avatar icons.

### 10. **Application Confirmation Email** 📧
-   **Simulation**: Generates a realistic "Email Sent" preview after a successful application.
-   **Summary**: Displays a generated "Admission Form" with all the verified details.

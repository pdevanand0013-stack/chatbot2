const chatBox = document.getElementById('chat-view');
const greetingView = document.getElementById('greeting-view');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// College Data (Same as before)
const collegeData = {
    admission: `
        <strong>We'd be honored to have you join our college family! 🎓</strong><br>
        Admissions for the 2026-2027 academic year are officially open. We aim to make this process as simple as possible for you.<br><br>
        <strong>📅 Important Deadlines:</strong>
        <ul>
            <li><strong>Undergraduate (B.Tech/BCA/B.Sc):</strong> Apply by <strong>May 30th, 2026</strong>.</li>
            <li><strong>Postgraduate (MBA):</strong> Applications close on <strong>June 15th, 2026</strong>.</li>
        </ul>
        <br>
        <strong>📝 Admission Procedure:</strong>
        1. Select your desired course.<br>
        2. Verify your eligibility (I can help with that!).<br>
        3. Fill out the application form (just type <strong>"Apply Now"</strong>).<br>
        4. Upload your documents for instant verification.<br>
        <br>Don't worry, I'll be with you every step of the way! Just type <strong>"Apply Now"</strong> to begin.
    `,
    fees: `
        <strong>Here's the Investment for Your Future: 💰</strong>
        <div class="table-container">
            <table class="bot-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Stream/Specialization</th>
                        <th>Fee</th>
                        <th>Duration</th>
                        <th>Total Est. Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- B.Tech Courses -->
                    <tr>
                        <td rowspan="7"><strong>B.Tech</strong></td>
                        <td>Computer Science (CSE)</td>
                        <td>₹50,000 / sem</td>
                        <td rowspan="7">8 Sems</td>
                        <td>₹4,00,000</td>
                    </tr>
                    <tr>
                        <td>AI & Data Science</td>
                        <td>₹45,000 / sem</td>
                        <td>₹3,60,000</td>
                    </tr>
                    <tr>
                        <td>VLSI Design & Technology</td>
                        <td>₹40,000 / sem</td>
                        <td>₹3,20,000</td>
                    </tr>
                    <tr>
                        <td>Advanced Communication</td>
                        <td>₹40,000 / sem</td>
                        <td>₹3,20,000</td>
                    </tr>
                    <tr>
                        <td>Electrical & Electronics (EEE)</td>
                        <td>₹30,000 / sem</td>
                        <td>₹2,40,000</td>
                    </tr>
                    <tr>
                        <td>Civil Engineering</td>
                        <td>₹25,000 / sem</td>
                        <td>₹2,00,000</td>
                    </tr>
                    <tr>
                        <td>Mechanical Engineering</td>
                        <td>₹25,000 / sem</td>
                        <td>₹2,00,000</td>
                    </tr>
                    
                    <!-- BCA -->
                    <tr>
                        <td><strong>BCA</strong></td>
                        <td>Computer Applications</td>
                        <td>₹25,000 / sem</td>
                        <td>6 Sems</td>
                        <td>₹1,50,000</td>
                    </tr>

                    <!-- B.Sc Courses -->
                    <tr>
                        <td rowspan="6"><strong>B.Sc</strong></td>
                        <td>Computer Science</td>
                        <td rowspan="6">₹20,000 / year</td>
                        <td rowspan="6">3 Years</td>
                        <td rowspan="6">₹60,000</td>
                    </tr>
                    <tr><td>Mathematics</td></tr>
                    <tr><td>Physics</td></tr>
                    <tr><td>Chemistry</td></tr>
                    <tr><td>English</td></tr>
                    <tr><td>Malayalam</td></tr>
                </tbody>
            </table>
        </div>
        <br><small><i>Note: Hostel and transport fees are separate. Don't worry, we offer installment options too!</i></small>
    `,
    eligibility: `
        <strong>Let's find the perfect fit for you! ✅</strong><br>
        We value merit and potential. Here is what we look for in our future students:<br>
        <ul>
            <li><strong>B.Tech:</strong>
                <ul>
                    <li>Minimum 75% in PCM (Physics, Chemistry, Maths) in your +2 exams.</li>
                    <li><strong>Required Documentation:</strong>
                        <ul>
                            <li>+2 Certificate & Marksheet</li>
                            <li>A valid KEAM or JEE Rank List</li>
                        </ul>
                    </li>
                </ul>
                <i>We know you've worked hard—let's make it count! 💪</i>
            </li>
            <li><strong>MBA:</strong> Graduation (50%+) and a valid CAT/MAT score.</li>
            <li><strong>BCA & B.Sc:</strong> A minimum of 60% in your qualifying subjects.</li>
        </ul>
        Our team is always here to support you if you have unique circumstances!
    `,
    staff: `
        <strong>Meet Our Mentors & Leaders: 👨‍🏫</strong>
        <ul class="bot-list">
            <li><strong>Principal:</strong> Prof. (Dr.) S.P. Subramanian (M.Tech., PhD) - <i>Leading with vision!</i></li>
            <li><strong>Dr. A. Sharma:</strong> Dean of Engineering</li>
            <li><strong>Prof. S. Gupta:</strong> HOD Computer Science</li>
            <li><strong>Dr. R. Verma:</strong> Head of Management Studies</li>
        </ul>
        Our faculty is super distinct and always ready to help you out!
    `,
    bus: `
        <strong>Need a Ride? We've Got You Covered! 🚌</strong><br>
        Our college buses run all across the city (up to a 30km radius). It's safe, comfortable, and always on time.<br>
        <strong>Fee:</strong> ₹500/year (super affordable!).<br>
        <strong>Routes:</strong> North Campus, City Center, South End, and many more stops.
    `,
    hostel: `
        <strong>Your Home Away From Home! 🏠</strong>
        <ul class="bot-list">
            <li><strong>Modern Hostel:</strong> Separate facilities for boys and girls with safe, comfortable rooms.</li>
            <li><strong>Digital Library:</strong> Access to 10,000+ books and indexed journals (8 AM - 6 PM).</li>
            <li><strong>Smart Campus:</strong> 52 Mbps high-speed internet and advanced computer labs.</li>
            <li><strong>Modern Amenities:</strong> 1200-seat auditorium, air-conditioned seminar halls, and a subsidized cafeteria.</li>
        </ul>
        <br>We strive to provide an environment where you can focus entirely on your growth!
    `,
    location: `
        <strong>Where to Find Us: 📍</strong><br>
        Sreepathy Institute of Management and Technology (SIMAT) is located in a serene, academic-friendly environment.<br><br>
        <strong>Address:</strong><br>
        Vavanoor P.O, Koottanad (Via),<br>
        Pattambi, Palakkad District,<br>
        Kerala, India - 679533.<br><br>
        We're easily accessible via our college bus network from various main centers!
    `,
    default: `
        Oops! I didn't quite catch that. 🤔<br>
        But hey, I can tell you about:
        <ul class="bot-list">
            <li>Admission (or type "Apply Now")</li>
            <li>Fee Structures</li>
            <li>Eligibility Criteria</li>
            <li>Our Awesome Faculty</li>
            <li>Bus / Transport</li>
            <li>Hostel Life</li>
        </ul>
        <br>
        <strong>Need to talk to a human?</strong><br>
        📞 Phone: 8944552211<br>
        📧 Email: srpt@gmail.com
    `,
    location: `
        <strong>Where to Find Us: 📍</strong><br>
        Sreepathy Institute of Management and Technology (SIMAT) is located in a serene, academic-friendly environment.<br><br>
        <strong>Address:</strong><br>
        Vavanoor P.O, Koottanad (Via),<br>
        Pattambi, Palakkad District,<br>
        Kerala, India - 679533.<br><br>
        We're easily accessible via our college bus network from various main centers!
    `,
    greetings: ["hi", "hello", "hey", "hola", "greetings", "sup", "yo"],
    greetingResponse: "Welcome to SREEPATHY! 👋 I'm your dedicated Admission Assistant. Whether you're a curious student or a supporting parent, I'm here to ensure your journey to our campus is smooth and exciting. How can I help you navigate your future today?",

    // Application Flow Messages
    askName: "Awesome choice! Let's get things rolling. What's your <strong>Full Name</strong>?",
    askCourse: (name) => `Great to meet you, ${name}! 🌟 Which course are you dreaming of?<br>(e.g., B.Tech, MBA, B.Sc)`,
    askEmail: "Got it! Almost done. Just drop your <strong>Email Address</strong> so we can send you the details.",
    confirmApp: (name, course, email) => `
        <strong>🎉 Application Successful!</strong><br>
        We've sent a confirmation email to <strong>${email}</strong>.<br><br>
        
        <div class="email-simulation">
            <div class="email-header">
                <strong>From:</strong> srpt@gmail.com<br>
                <strong>Subject:</strong> Admission Confirmation - ${name} 🎓
            </div>
            <div class="email-body">
                <p>Dear ${name},</p>
                <p>Congratulations! We have received your admission request for the <strong>${course}</strong> program.</p>
                <p>You are now provisionally admitted. You can start attending classes once the semester begins! 🏫</p>
                
                <div class="admission-form">
                    <div class="form-header">📝 Admission Form</div>
                    <table class="form-table">
                        <tr><td><strong>Student Name:</strong></td><td>${name}</td></tr>
                        <tr><td><strong>Course Applied:</strong></td><td>${course}</td></tr>
                        <tr><td><strong>Registered Email:</strong></td><td>${email}</td></tr>
                        <tr><td><strong>Status:</strong></td><td><span class="status-approved">Provisional Admission Granted</span></td></tr>
                    </table>
                </div>
                
                <p>See you on campus!</p>
                <p>Best Regards,<br><strong>SRPT Admissions Team</strong></p>
            </div>
        </div>
    `
};

// State Management
let chatState = "IDLE";
let applicantDetails = { name: "", phone: "", course: "", pcmPercent: "", keamRank: "", scholarship: "", email: "", documentsUploaded: false };
let hasStartedChat = false;

// Application Flow Messages
const flowMessages = {
    askName: "That's wonderful! I'm so happy to help you start your application. 📝<br>To begin this exciting journey, may I please have your <strong>Full Name</strong>?",
    askPhone: (name) => `It's truly a pleasure to meet you, ${name}! 😊<br>Could you please provide your <strong>Phone Number</strong>? This helps our counselors reach out if you need any extra support.`,
    askCourse: "Fantastic! Which program are you most passionate about?<br>(e.g., <strong>B.Tech CSE</strong>, <strong>BCA</strong>, <strong>B.Sc Physics</strong>)",
    askPCM: "Great choice! For the B.Tech program, we just need to quickly verify your academic eligibility. 📊<br>What was your <strong>PCM Percentage</strong> in +2? (e.g., 78)",
    askKEAM: "Excellent! And what was your <strong>KEAM/JEE Rank</strong>?<br>(e.g., 15000)<br><small>We welcomes students with ranks up to 50,000!</small>",
    askScholarship: `
        Do you have any existing <strong>Scholarship</strong>? 🎓<br>
        <ul>
            <li>Type <strong>"SC/ST"</strong> for SC/ST Category (Additional 25%)</li>
            <li>Type <strong>"OBC"</strong> for OBC Category (Additional 15%)</li>
            <li>Type <strong>"EWS"</strong> for Economically Weaker Section (Additional 20%)</li>
            <li>Type <strong>"Sports"</strong> for Sports Quota (Additional 15%)</li>
            <li>Type <strong>"None"</strong> if no additional scholarship</li>
        </ul>
    `,
    askEmail: "Almost there! Please provide your <strong>Email Address</strong>.",
    askDocuments: `
        <strong>Great news! You are eligible! 🎉</strong><br><br>
        Please upload the following documents using the <strong>📤 Upload button</strong> on the left:<br>
        <ul>
            <li>+2 Certificate</li>
            <li>+2 Marksheet</li>
            <li>KEAM or JEE Rank List</li>
        </ul>
        <br>Once uploaded, type <strong>"done"</strong> to proceed.
    `,
    notEligible: (percent) => `
        <strong>Sorry! 😔</strong><br>
        With ${percent}% in PCM, you don't meet the 75% requirement for B.Tech.<br>
        But don't worry! You can explore <strong>BCA</strong> or <strong>B.Sc</strong> courses.<br>
        Type <strong>"Apply Now"</strong> to try a different course!
    `,
    confirmApp: (details) => `
        <strong>🎉 Application Successful!</strong><br>
        We've sent a confirmation email to <strong>${details.email}</strong>.<br><br>
        
        <div class="email-simulation">
            <div class="email-header">
                <strong>From:</strong> srpt@gmail.com<br>
                <strong>Subject:</strong> Admission Confirmation - ${details.name} 🎓
            </div>
            <div class="email-body">
                <p>Dear ${details.name},</p>
                <p>Congratulations! Your admission request for <strong>${details.course}</strong> has been processed.</p>
                <p>You are now provisionally admitted. Classes begin soon! 🏫</p>
                
                <div class="admission-form">
                    <div class="form-header">📝 Admission Form</div>
                    <table class="form-table">
                        <tr><td><strong>Student Name:</strong></td><td>${details.name}</td></tr>
                        <tr><td><strong>Phone:</strong></td><td>${details.phone}</td></tr>
                        <tr><td><strong>Course Applied:</strong></td><td>${details.course}</td></tr>
                        <tr><td><strong>PCM %:</strong></td><td>${details.pcmPercent}%</td></tr>
                        <tr><td><strong>KEAM/JEE Rank:</strong></td><td>${details.keamRank || 'N/A'}</td></tr>
                        <tr><td><strong>Email:</strong></td><td>${details.email}</td></tr>
                        <tr><td><strong>Documents:</strong></td><td><span class="status-approved">Uploaded ✅</span></td></tr>
                        <tr><td><strong>Fee Discount:</strong></td><td><span class="status-approved">${details.feeDiscount ? details.feeDiscount.percentage + '%' : '0%'}</span></td></tr>
                        <tr><td><strong>Status:</strong></td><td><span class="status-approved">Provisional Admission Granted</span></td></tr>
                    </table>
                </div>
                
                <p>See you on campus!</p>
                <p>Best Regards,<br><strong>SRPT Admissions Team</strong></p>
            </div>
        </div>
    `
};

// Fee Discount Calculator based on PCM% and KEAM Rank
function calculateFeeDiscount(pcmPercent, keamRank) {
    let discount = { percentage: 0, reason: "Standard Fees" };

    // PCM-based discount
    if (pcmPercent >= 95) {
        discount = { percentage: 50, reason: "🏆 Merit Scholarship - Exceptional Academic Performance (95%+)" };
    } else if (pcmPercent >= 90) {
        discount = { percentage: 35, reason: "🥇 High Achiever Discount (90-94%)" };
    } else if (pcmPercent >= 85) {
        discount = { percentage: 25, reason: "🥈 Academic Excellence Discount (85-89%)" };
    } else if (pcmPercent >= 80) {
        discount = { percentage: 15, reason: "🥉 Good Performance Discount (80-84%)" };
    } else if (pcmPercent >= 75) {
        discount = { percentage: 10, reason: "📚 Eligibility Discount (75-79%)" };
    }

    // Additional KEAM rank bonus
    if (keamRank <= 1000) {
        discount.percentage += 25;
        discount.reason += " + Top 1000 KEAM Bonus!";
    } else if (keamRank <= 5000) {
        discount.percentage += 15;
        discount.reason += " + Top 5000 KEAM Bonus!";
    } else if (keamRank <= 10000) {
        discount.percentage += 10;
        discount.reason += " + Top 10000 KEAM Bonus!";
    } else if (keamRank <= 20000) {
        discount.percentage += 5;
        discount.reason += " + KEAM Qualifier Bonus!";
    }

    // Cap at 75%
    if (discount.percentage > 75) {
        discount.percentage = 75;
        discount.reason = "🌟 Maximum Scholarship Applied (75%)";
    }

    return discount;
}

function setInput(text) {
    userInput.value = text;
    processMessage();
}

function processMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    // Switch View on first message
    if (!hasStartedChat) {
        greetingView.style.display = 'none';
        chatBox.classList.add('active');
        hasStartedChat = true;
    }

    // Add User Message
    addMessage(text, 'user');
    userInput.value = '';

    // Simulate Bot Typing
    setTimeout(() => {
        handleResponse(text);
    }, 600);
}

function handleResponse(text) {
    const lowerText = text.toLowerCase();

    // Cancel Flow
    if (lowerText === 'cancel' || lowerText === 'stop') {
        chatState = "IDLE";
        applicantDetails = { name: "", phone: "", course: "", pcmPercent: "", email: "", documentsUploaded: false };
        addMessage("Application process cancelled. How else can I help you?", 'bot');
        return;
    }

    // State Machine
    if (chatState === "IDLE") {
        const response = getBotResponse(lowerText);
        addMessage(response, 'bot');

        // Trigger Admission Flow
        if (/\b(apply|enroll|registration|form|admission procedure|procedure)\b/.test(lowerText)) {
            chatState = "AWAITING_NAME";
            setTimeout(() => addMessage(flowMessages.askName, 'bot'), 500);
        }
    }
    else if (chatState === "AWAITING_NAME") {
        applicantDetails.name = text;
        chatState = "AWAITING_PHONE";
        addMessage(flowMessages.askPhone(applicantDetails.name), 'bot');
    }
    else if (chatState === "AWAITING_PHONE") {
        applicantDetails.phone = text;
        chatState = "AWAITING_COURSE";
        addMessage(flowMessages.askCourse, 'bot');
    }
    else if (chatState === "AWAITING_COURSE") {
        applicantDetails.course = text;
        // Check if B.Tech - need PCM validation
        if (/btech|b\.tech/i.test(text)) {
            chatState = "AWAITING_PCM";
            addMessage(flowMessages.askPCM, 'bot');
        } else {
            // Skip PCM for non-B.Tech courses
            applicantDetails.pcmPercent = "N/A";
            chatState = "AWAITING_EMAIL";
            addMessage(flowMessages.askEmail, 'bot');
        }
    }
    else if (chatState === "AWAITING_PCM") {
        const pcm = parseFloat(text);
        if (isNaN(pcm)) {
            addMessage("Please enter a valid number for your PCM percentage (e.g., 78).", 'bot');
            return;
        }
        applicantDetails.pcmPercent = pcm;

        // Validate eligibility
        if (pcm >= 75) {
            chatState = "AWAITING_KEAM";
            addMessage(flowMessages.askKEAM, 'bot');
        } else {
            chatState = "IDLE";
            addMessage(flowMessages.notEligible(pcm), 'bot');
            applicantDetails = { name: "", phone: "", course: "", pcmPercent: "", keamRank: "", email: "", documentsUploaded: false };
        }
    }
    else if (chatState === "AWAITING_KEAM") {
        const rank = parseInt(text);
        if (isNaN(rank) || rank <= 0) {
            addMessage("Please enter a valid KEAM/JEE rank number (e.g., 15000).", 'bot');
            return;
        }
        applicantDetails.keamRank = rank;

        // Validate KEAM rank (accept up to 50,000)
        if (rank <= 50000) {
            // Calculate fee discount based on marks and rank
            const discount = calculateFeeDiscount(applicantDetails.pcmPercent, rank);
            applicantDetails.feeDiscount = discount;

            addMessage(`
                <strong>✅ KEAM Rank Verified!</strong><br>
                Based on your marks and rank, you qualify for:<br>
                <div class="discount-box">
                    <strong>🎁 ${discount.percentage}% Fee Discount!</strong><br>
                    <small>${discount.reason}</small>
                </div>
            `, 'bot');

            setTimeout(() => {
                chatState = "AWAITING_SCHOLARSHIP";
                addMessage(flowMessages.askScholarship, 'bot');
            }, 1000);
        } else {
            chatState = "IDLE";
            addMessage(`
                <strong>Sorry! 😔</strong><br>
                With rank ${rank}, you exceed our cutoff of 50,000.<br>
                Try other courses like <strong>BCA</strong> or <strong>B.Sc</strong>!
            `, 'bot');
            applicantDetails = { name: "", phone: "", course: "", pcmPercent: "", keamRank: "", scholarship: "", email: "", documentsUploaded: false };
        }
    }
    else if (chatState === "AWAITING_SCHOLARSHIP") {
        const scholarshipInput = lowerText;
        let additionalDiscount = { percentage: 0, type: "None" };

        if (scholarshipInput.includes("sc") || scholarshipInput.includes("st")) {
            additionalDiscount = { percentage: 25, type: "SC/ST Category" };
        } else if (scholarshipInput.includes("obc")) {
            additionalDiscount = { percentage: 15, type: "OBC Category" };
        } else if (scholarshipInput.includes("ews")) {
            additionalDiscount = { percentage: 20, type: "EWS (Economically Weaker Section)" };
        } else if (scholarshipInput.includes("sports")) {
            additionalDiscount = { percentage: 15, type: "Sports Quota" };
        }

        applicantDetails.scholarship = additionalDiscount.type;

        // Add scholarship discount to existing discount
        if (applicantDetails.feeDiscount) {
            applicantDetails.feeDiscount.percentage += additionalDiscount.percentage;
            if (additionalDiscount.percentage > 0) {
                applicantDetails.feeDiscount.reason += ` + ${additionalDiscount.type} (+${additionalDiscount.percentage}%)`;
            }
            // Cap at 90%
            if (applicantDetails.feeDiscount.percentage > 90) {
                applicantDetails.feeDiscount.percentage = 90;
            }
        }

        if (additionalDiscount.percentage > 0) {
            addMessage(`
                <strong>🎓 Scholarship Applied!</strong><br>
                ${additionalDiscount.type}: <strong>+${additionalDiscount.percentage}%</strong><br>
                <div class="discount-box">
                    <strong>Total Discount: ${applicantDetails.feeDiscount.percentage}%</strong>
                </div>
            `, 'bot');
        } else {
            addMessage("No additional scholarship applied. Proceeding with current discount.", 'bot');
        }

        setTimeout(() => {
            chatState = "AWAITING_DOCUMENTS";
            addMessage(flowMessages.askDocuments, 'bot');
        }, 1000);
    }
    else if (chatState === "AWAITING_DOCUMENTS") {
        if (lowerText === "done" || lowerText === "uploaded" || lowerText === "yes") {
            applicantDetails.documentsUploaded = true;
            addMessage("📄 Documents received! <strong>Verifying with OCR...</strong>", 'bot');

            // Simulate verification delay (OCR already happened during upload)
            setTimeout(() => {
                const verification = verifyDocumentsWithOCR();

                addMessage(`
                    <strong>✅ Document Verification Complete!</strong><br><br>
                    <table class="form-table">
                        <tr><td>+2 Certificate:</td><td><span class="status-approved">${verification.certificate}</span></td></tr>
                        <tr><td>+2 Marksheet:</td><td><span class="status-approved">${verification.marksheet}</span></td></tr>
                        <tr><td>PCM Marks:</td><td><span class="${verification.pcmMatch.includes('Mismatch') ? 'status-warning' : 'status-approved'}">${verification.pcmMatch}</span></td></tr>
                        <tr><td>KEAM/JEE Rank:</td><td><span class="status-approved">${verification.rankList}</span></td></tr>
                    </table>
                    <br>All documents processed and verified!
                `, 'bot');

                // Clear OCR results for next application
                uploadedDocuments = [];
                ocrResults = { extractedText: "", detectedPCM: null };

                setTimeout(() => {
                    chatState = "AWAITING_EMAIL";
                    addMessage(flowMessages.askEmail, 'bot');
                }, 1000);
            }, 1500);
        } else {
            addMessage("Please upload your documents using the 📤 button, then type <strong>\"done\"</strong>.", 'bot');
        }
    }
    else if (chatState === "AWAITING_EMAIL") {
        applicantDetails.email = text;
        chatState = "IDLE";
        addMessage(flowMessages.confirmApp(applicantDetails), 'bot');
        applicantDetails = { name: "", phone: "", course: "", pcmPercent: "", email: "", documentsUploaded: false };
    }
}

// String Similarity (Levenshtein Distance) for Fuzzy Matching
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

function getBotResponse(input) {
    const doc = nlp(input.toLowerCase());

    // Check for Greetings/Small Talk with NLP
    if (doc.has('~greeting~') || doc.has('(hi|hello|hey|hola|yo|sup)')) {
        return collegeData.greetingResponse;
    }

    if (doc.has('(how are you|hows it going|how r u)')) {
        return "I'm doing great, thank you for asking! 😊 I'm always excited to help families find their home at SREEPATHY. How can I assist you today?";
    }

    if (doc.has('(who are you|what are you|your name)')) {
        return "I'm your intelligent virtual assistant for SREEPATHY Admissions! 🤖 I'm here 24/7 to provide instant and accurate information about our college.";
    }

    // Keyword categories for mapping
    const categories = {
        admission: ['admission', 'apply', 'enroll', 'process', 'procedure', 'deadline', 'date'],
        fees: ['fee', 'cost', 'price', 'payment', 'money', 'scholarship'],
        courses: ['course', 'program', 'degree', 'btech', 'bca', 'bsc', 'mba', 'science', 'engineering'],
        eligibility: ['eligible', 'marks', 'percentage', 'criteria', 'rank', 'cutoff'],
        staff: ['staff', 'faculty', 'teacher', 'professor', 'hod', 'dean', 'principal'],
        transport: ['bus', 'transport', 'route', 'travel', 'commute', 'vehicle'],
        hostel: ['hostel', 'room', 'stay', 'accommodation', 'auditorium', 'library', 'internet'],
        location: ['location', 'address', 'where', 'pattambi', 'palakkad', 'vavanoor']
    };

    // Calculate best match score across all categories
    let bestMatch = { category: 'default', score: 0 };
    const words = input.toLowerCase().split(/\s+/);

    for (const [category, keywords] of Object.entries(categories)) {
        for (const keyword of keywords) {
            // Direct NLP check
            if (doc.has(keyword)) {
                return collegeData[category];
            }

            // Fuzzy match check for each word in input
            for (const word of words) {
                const score = getSimilarity(word, keyword);
                if (score > 0.8 && score > bestMatch.score) {
                    bestMatch = { category, score };
                }
            }
        }
    }

    if (bestMatch.score > 0.8) {
        return collegeData[bestMatch.category];
    }

    return collegeData.default;
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', `${sender}-message`);

    // Bot Avatar
    if (sender === 'bot') {
        const avatar = document.createElement('div');
        avatar.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" class="bot-icon"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V11a2 2 0 0 1-2 2v-.27A2 2 0 0 1 11 11V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z" fill="#4285f4"/><path d="M4.268 14.732a8 8 0 0 1 15.464 0" stroke="#4285f4" stroke-width="2"/><path d="M4 14v2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-2" stroke="#4285f4" stroke-width="2"/></svg>`;
        msgDiv.appendChild(avatar);
    }

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.innerHTML = text;

    msgDiv.appendChild(contentDiv);
    chatBox.appendChild(msgDiv);

    // Scroll to bottom
    const mainContainer = document.querySelector('.main-container'); // Scroll main container if needed, or chatBox
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event Listeners
sendBtn.addEventListener('click', processMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processMessage();
    }
});

// ============================================
// Tesseract.js OCR Integration
// ============================================

let uploadedDocuments = [];
let ocrResults = { extractedText: "", detectedPCM: null };

// File Upload Handler
const fileUploadInput = document.getElementById('file-upload');
if (fileUploadInput) {
    fileUploadInput.addEventListener('change', async (e) => {
        const files = e.target.files;
        if (files.length === 0) return;

        // Switch to chat view if not already
        if (!hasStartedChat) {
            greetingView.style.display = 'none';
            chatBox.classList.add('active');
            hasStartedChat = true;
        }

        for (const file of files) {
            uploadedDocuments.push(file);
            addMessage(`📄 Uploaded: <strong>${file.name}</strong>`, 'user');

            // Only process images for OCR
            if (file.type.startsWith('image/')) {
                addMessage(`🔍 Processing <strong>${file.name}</strong> with OCR...`, 'bot');

                try {
                    const result = await processDocumentOCR(file);
                    ocrResults.extractedText += result.text + "\n";

                    // Try to extract percentage from OCR text
                    const percentMatch = result.text.match(/(\d{2,3})\s*%/g);
                    const marksMatch = result.text.match(/total.*?(\d{2,3})/i);

                    if (percentMatch) {
                        const percents = percentMatch.map(p => parseInt(p.replace('%', '')));
                        const validPercent = percents.find(p => p >= 50 && p <= 100);
                        if (validPercent) {
                            ocrResults.detectedPCM = validPercent;
                        }
                    }

                    addMessage(`
                        ✅ <strong>OCR Complete for ${file.name}</strong><br>
                        <small>Extracted text sample: "${result.text.substring(0, 150)}..."</small>
                        ${ocrResults.detectedPCM ? `<br><strong>Detected Percentage: ${ocrResults.detectedPCM}%</strong>` : ''}
                    `, 'bot');

                } catch (error) {
                    addMessage(`⚠️ Could not read ${file.name}: ${error.message}`, 'bot');
                }
            } else {
                addMessage(`📎 ${file.name} saved. (PDF OCR requires backend)`, 'bot');
            }
        }

        // Clear input for next upload
        fileUploadInput.value = '';

        // Remind user to type 'done'
        if (chatState === "AWAITING_DOCUMENTS") {
            addMessage(`Type <strong>"done"</strong> when you've uploaded all documents.`, 'bot');
        }
    });
}

// OCR Processing Function using Tesseract.js
async function processDocumentOCR(imageFile) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const worker = await Tesseract.createWorker('eng');
                const { data } = await worker.recognize(e.target.result);
                await worker.terminate();
                resolve({ text: data.text, confidence: data.confidence });
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
    });
}

// Enhanced verification with OCR results
function verifyDocumentsWithOCR() {
    const claimedPCM = parseFloat(applicantDetails.pcmPercent);
    const detectedPCM = ocrResults.detectedPCM;

    let verificationStatus = {
        certificate: uploadedDocuments.some(f => f.name.toLowerCase().includes('cert')) ? 'Verified ✅' : 'Uploaded ✅',
        marksheet: uploadedDocuments.some(f => f.name.toLowerCase().includes('mark')) ? 'Verified ✅' : 'Uploaded ✅',
        pcmMatch: 'Pending',
        rankList: uploadedDocuments.some(f => f.name.toLowerCase().includes('rank') || f.name.toLowerCase().includes('keam') || f.name.toLowerCase().includes('jee')) ? 'Verified ✅' : 'Uploaded ✅'
    };

    // Compare OCR-detected marks with claimed marks
    if (detectedPCM) {
        const tolerance = 5; // Allow 5% tolerance for OCR errors
        if (Math.abs(detectedPCM - claimedPCM) <= tolerance) {
            verificationStatus.pcmMatch = `${detectedPCM}% - Matches ✅`;
        } else {
            verificationStatus.pcmMatch = `⚠️ Mismatch! Claimed: ${claimedPCM}%, Detected: ${detectedPCM}%`;
        }
    } else {
        verificationStatus.pcmMatch = `${claimedPCM}% - Claimed (OCR couldn't verify)`;
    }

    return verificationStatus;
}

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
    feesBTech: `
        <strong>B.Tech Fee Structure (Per Semester): 🎓</strong>
        <div class="table-container">
            <table class="bot-table">
                <thead>
                    <tr><th>Specialization</th><th>Fee</th><th>Total (8 Sem)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Computer Science (CSE)</td><td>₹50,000</td><td>₹4,00,000</td></tr>
                    <tr><td>AI & Data Science</td><td>₹45,000</td><td>₹3,60,000</td></tr>
                    <tr><td>VLSI Design</td><td>₹40,000</td><td>₹3,20,000</td></tr>
                    <tr><td>Adv. Communication</td><td>₹40,000</td><td>₹3,20,000</td></tr>
                    <tr><td>EEE</td><td>₹30,000</td><td>₹2,40,000</td></tr>
                    <tr><td>Civil / Mechanical</td><td>₹25,000</td><td>₹2,00,000</td></tr>
                </tbody>
            </table>
        </div>
        <br><small><i>Scholarships available for high achievers!</i></small>
    `,
    feesBCA: `
        <strong>BCA Fee Structure: 💻</strong>
        <div class="table-container">
            <table class="bot-table">
                <thead>
                    <tr><th>Course</th><th>Fee / Sem</th><th>Duration</th><th>Total Cost</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>BCA</strong><br><small>Computer Applications</small></td>
                        <td>₹25,000</td>
                        <td>6 Sems</td>
                        <td>₹1,50,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    feesBSc: `
        <strong>B.Sc Fee Structure: 🔬</strong>
        <div class="table-container">
            <table class="bot-table">
                <thead>
                    <tr><th>Specializations</th><th>Fee / Year</th><th>Duration</th><th>Total Cost</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>comp. Sci, Maths,<br>Physics, Chemistry,<br>English, Malayalam</td>
                        <td>₹20,000</td>
                        <td>3 Years</td>
                        <td>₹60,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    feesMBA: `
        <strong>MBA Fee Structure: 📈</strong>
        <div class="table-container">
            <table class="bot-table">
                <thead>
                    <tr><th>Course</th><th>Fee / Sem</th><th>Duration</th><th>Total Cost</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>MBA</strong><br><small>Finance, HR, Marketing</small></td>
                        <td>₹40,000</td>
                        <td>4 Sems</td>
                        <td>₹1,60,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
        <strong>Our Leadership: 👨‍🏫</strong>
        <ul class="bot-list">
            <li><strong>Principal:</strong> Prof. (Dr.) S.P. Subramanian (M.Tech., PhD) - <i>Leading with vision!</i></li>
        </ul>
        Our leadership is dedicated to excellence in engineering education!
    `,
    bus: `
        <strong>Need a Ride? We've Got You Covered! 🚌</strong><br>
        Our college buses from major towns to the campus. It's safe, comfortable, and always on time.<br>
        <strong>Fee:</strong> ₹500/year (super affordable!).<br><br>
        <strong>🚌 Our Main Bus Routes:</strong>
        <ul class="bot-list">
            <li><strong>Route 1:</strong> Sreekrishnapuram – Cherpulassery – Pattambi - College</li>
            <li><strong>Route 2:</strong> Perinthalmanna – Pattambi – College</li>
            <li><strong>Route 3:</strong> Kuttipuram – Ponnani – Koottanad – College</li>
            <li><strong>Route 4:</strong> Eramangalam – Edappal – Thrithala – College</li>
            <li><strong>Route 5:</strong> Ottapalam – Kulappuly – Cheruthurthy – College</li>
            <li><strong>Route 6:</strong> Thrissur – Kecheri - Pannithadam – College</li>
            <li><strong>Route 7:</strong> Guruvayoor – Kunnamkulam - College</li>
        </ul>
    `,
    hostel: `
        <strong>Your Home Away From Home! 🏠</strong><br>
        Current Fee: <strong>₹40,000 / Semester</strong> (Includes Food & Accommodation).<br><br>
        
        <strong>About Our Campus & Stay:</strong>
        Sreepathy Institute offers a serene, academic-friendly environment perfect for growth. Our hostels provide:
        <ul class="bot-list">
            <li><strong>Comfortable Stay:</strong> Separate, safe facilities for boys and girls.</li>
            <li><strong>All-Inclusive:</strong> Nutritious food and modern amenities included in the fee.</li>
            <li><strong>Smart Campus:</strong> High-speed internet (52 Mbps) and access to our Digital Library (10,000+ books).</li>
            <li><strong>Facilities:</strong> 1200-seat auditorium, AC seminar halls, and a subsidized cafeteria.</li>
        </ul>
    `,
    location: `
        <strong>Where to Find Us: 📍</strong><br>
        Sreepathy Institute of Management and Technology (SIMAT) is located in a serene, academic-friendly environment.<br><br>
        <strong>Address:</strong><br>
        Vavanoor P.O, Koottanad (Via),<br>
        Pattambi, Palakkad District,<br>
        Kerala, India - 679533.<br><br>
        <div class="visual-gallery">
            <div class="visual-card">
                <span class="visual-label">Our Campus Location</span>
                <img src="college_campus.png" alt="Sreepathy Institute Location">
            </div>
        </div>
        <br>We're easily accessible via our college bus network from various main centers!
    `,
    photos: `
        <strong>Behold Our Beautiful Campus! 📸✨</strong><br>
        Take an authentic look at the Sreepathy Institute infrastructure:<br><br>
        <div class="visual-gallery">
            <div class="visual-card">
                <span class="visual-label">Main Building & Greenery</span>
                <img src="college_campus.png" alt="Sreepathy Main Campus Building">
            </div>
        </div>
        <br><i>Is there any specific facility you'd like to know more about?</i>
    `,
    default: `
        <strong>Hmm, I'm not sure about that specific query! 🤔</strong><br>
        But I can instantly answer questions about:<br>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;">
            <span>🎓 Admission Process</span>
            <span>💰 Fee Structures</span>
            <span>📚 Courses & Programs</span>
            <span>✅ Eligibility Criteria</span>
            <span>🚌 Bus Routes</span>
            <span>🏠 Hostel & Facilities</span>
            <span>📍 Location & Map</span>
            <span>📞 Contact & Support</span>
            <span>🏆 Placements</span>
            <span>🔬 Labs & Infrastructure</span>
        </div>
        <br>
        <strong>Reach a human directly:</strong><br>
        📞 <strong>8944552211</strong> &nbsp;|&nbsp; 📧 <strong>srpt@gmail.com</strong>
    `,
    contact: `
        <strong>📞 Get in Touch with Us!</strong><br><br>
        <table class="bot-table">
            <tr><td><strong>📞 Phone</strong></td><td>8944552211</td></tr>
            <tr><td><strong>📧 Email</strong></td><td>srpt@gmail.com</td></tr>
            <tr><td><strong>🌐 Website</strong></td><td>www.sreepathy.ac.in</td></tr>
            <tr><td><strong>📍 Address</strong></td><td>Vavanoor P.O, Koottanad, Pattambi, Palakkad, Kerala - 679533</td></tr>
            <tr><td><strong>🕐 Office Hours</strong></td><td>Mon–Sat: 9:00 AM – 5:00 PM</td></tr>
        </table><br>
        <small>Our admissions office is always happy to assist you in person!</small>
    `,
    placements: `
        <strong>🏆 Placement & Career Support at SIMAT</strong><br><br>
        Sreepathy has a dedicated Training & Placement Cell that works year-round to connect students with top employers.<br><br>
        <strong>🌟 Key Highlights:</strong>
        <ul class="bot-list">
            <li><strong>Active Alumni Network</strong> across government, IT, and public sector organizations.</li>
            <li><strong>Career Guidance:</strong> Resume building, mock interviews, and aptitude training workshops.</li>
            <li><strong>Industry Tie-ups:</strong> Regular industrial visits and collaboration with Kerala-based firms.</li>
            <li><strong>Higher Studies Support:</strong> Guidance for GATE, CAT, and other competitive exams.</li>
        </ul>
        <br><small>📧 Contact the placement cell at <strong>srpt@gmail.com</strong> for details.</small>
    `,
    naac: `
        <strong>🏅 Accreditation & Recognition</strong><br><br>
        Sreepathy Institute of Management and Technology is recognized by leading bodies ensuring quality education:<br>
        <ul class="bot-list">
            <li>✅ <strong>AICTE Approved</strong> — All India Council for Technical Education</li>
            <li>✅ <strong>Affiliated to University of Calicut</strong></li>
            <li>✅ <strong>Recognized by Govt. of Kerala</strong></li>
            <li>✅ <strong>NBA Accreditation</strong> process followed for technical programs</li>
        </ul>
        <br><i>Our commitment to quality education is backed by national recognition! 🎖️</i>
    `,
    labs: `
        <strong>🔬 World-Class Labs & Infrastructure</strong><br><br>
        SIMAT provides state-of-the-art facilities to ensure hands-on, practical learning:
        <ul class="bot-list">
            <li>💻 <strong>Computer Labs</strong> — 200+ high-spec computers with 24/7 internet access (52 Mbps)</li>
            <li>⚡ <strong>Electronics & Circuits Lab</strong> — Fully equipped for B.Tech EEE & ECE</li>
            <li>🧪 <strong>Physics & Chemistry Lab</strong> — Well maintained for B.Sc programs</li>
            <li>📡 <strong>Networking Lab</strong> — Cisco-certified equipment for CSE students</li>
            <li>📚 <strong>Digital Library</strong> — 10,000+ books and online journals</li>
            <li>🎤 <strong>Auditorium</strong> — 1200-seat capacity for events and seminars</li>
        </ul>
    `,
    events: `
        <strong>🎉 College Events & Student Life</strong><br><br>
        Life at SIMAT is vibrant and full of opportunities beyond the classroom!
        <ul class="bot-list">
            <li>🏆 <strong>TECHNOLEAD</strong> — Annual Technical Fest with competitions, hackathons & workshops</li>
            <li>🎭 <strong>Cultural Fest</strong> — Music, dance, drama & art competitions every year</li>
            <li>⚽ <strong>Sports Meet</strong> — Inter-college sports events on our large campus grounds</li>
            <li>📊 <strong>Industry Expert Talks</strong> — Monthly guest lectures from industry professionals</li>
            <li>🌿 <strong>NSS & NCC</strong> — Active social service and discipline programs</li>
        </ul>
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
                
                <p>Our college representatives will call you if necessary.</p>
                <p>Thank you for spending your valuable time here.</p>
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
        const lowerText = text.toLowerCase();

        // INTERCEPT: Check for "Fee" queries to enforce multi-turn conversation
        // This runs before the NLP matching to ensure we catch vague "fees" requests
        if (/\b(fee|fees|cost|structure|payment|price|money)\b/.test(lowerText)) {
            // Check if specific course is already mentioned
            if (/\b(b\.?tech|engineering|cse|civil|mech|eee|vlsi|ai)\b/.test(lowerText)) {
                addMessage(collegeData.feesBTech, 'bot');
                return;
            } else if (/\b(bca)\b/.test(lowerText)) {
                addMessage(collegeData.feesBCA, 'bot');
                return;
            } else if (/\b(bsc|science)\b/.test(lowerText)) {
                addMessage(collegeData.feesBSc, 'bot');
                return;
            } else if (/\b(mba|management|pg)\b/.test(lowerText)) {
                addMessage(collegeData.feesMBA, 'bot');
                return;
            } else {
                // Vague Query -> Ask Follow-up
                chatState = "AWAITING_COURSE_FOR_FEES";
                addMessage("Which course are you asking about — <strong>B.Tech</strong>, <strong>BCA</strong>, <strong>B.Sc</strong>, or <strong>MBA</strong>?", 'bot');
                return;
            }
        }

        const response = getBotResponse(lowerText);
        addMessage(response, 'bot');

        // Trigger Admission Flow
        if (/\b(apply|enroll|registration|form|admission procedure|procedure)\b/.test(lowerText)) {
            chatState = "AWAITING_NAME";
            setTimeout(() => addMessage(flowMessages.askName, 'bot'), 500);
        }
    }
    else if (chatState === "AWAITING_COURSE_FOR_FEES") {
        const lowerText = text.toLowerCase();

        if (/\b(b\.?tech|engineering|cse|civil|mech|eee|vlsi|ai)\b/.test(lowerText)) {
            addMessage(collegeData.feesBTech, 'bot');
            chatState = "IDLE";
        } else if (/\b(bca)\b/.test(lowerText)) {
            addMessage(collegeData.feesBCA, 'bot');
            chatState = "IDLE";
        } else if (/\b(bsc|science)\b/.test(lowerText)) {
            addMessage(collegeData.feesBSc, 'bot');
            chatState = "IDLE";
        } else if (/\b(mba|management|pg)\b/.test(lowerText)) {
            addMessage(collegeData.feesMBA, 'bot');
            chatState = "IDLE";
        } else {
            // Fallback if they type something unrelated, but we'll try to steer them back
            // OR we can just reset to IDLE and process it as a new message if it doesn't match a course.
            // But let's try one more re-prompt or treat it as specific content.

            // Let's assume if it's not a course, they matched nothing.
            // But maybe they said "cancel" - handled at top of handleResponse.

            chatState = "IDLE";
            // Process as normal message in case they changed topic
            const response = getBotResponse(lowerText);
            addMessage(response, 'bot');
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
                        ${verification.subjectBreakdown ? `<tr><td>Subjects Found:</td><td><span class="status-approved">${verification.subjectBreakdown}</span></td></tr>` : ''}
                        <tr><td>PCM Marks:</td><td><span class="${verification.pcmMatch.includes('Mismatch') ? 'status-warning' : 'status-approved'}">${verification.pcmMatch}</span></td></tr>
                        <tr><td>KEAM/JEE Rank:</td><td><span class="status-approved">${verification.rankList}</span></td></tr>
                    </table>
                    <br>All documents processed and verified!
                `, 'bot');

                // Clear OCR results for next application
                uploadedDocuments = [];
                ocrResults = { extractedText: "", detectedPCM: null, subjectMarks: {} };

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
        
        // Save to Supabase and email
        const savedDetails = { ...applicantDetails }; // snapshot before reset
        
        addMessage(flowMessages.confirmApp(savedDetails), 'bot');
        
        // Save to Supabase and send email after showing confirmation
        setTimeout(async () => {
            addMessage("⏳ <strong>Saving application & sending confirmation email...</strong>", 'bot');
            
            // Run both backend processes simultaneously
            const [supabaseResult, emailResult] = await Promise.all([
                saveApplicationToSupabase(savedDetails, ocrResults),
                sendConfirmationEmail(savedDetails)
            ]);

            let finalMessage = "✅ <strong>Application saved!</strong> Our admissions team will reach out to you soon. 🎓";
            
            if (!supabaseResult.success) {
                finalMessage = "⚠️ We could not save your application online. Please contact us at <strong>8944552211</strong> or <strong>srpt@gmail.com</strong>.";
            } else if (emailResult.success) {
                finalMessage += `<br><small>✉️ An admission confirmation email was successfully sent to ${savedDetails.email}.</small>`;
            }

            addMessage(finalMessage, 'bot');
        }, 1000);
        
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
        admission:    ['admission', 'apply', 'enroll', 'process', 'procedure', 'deadline', 'date', 'application', 'registration'],
        fees:         ['fee', 'cost', 'price', 'payment', 'money', 'structure', 'tuition', 'semester'],
        courses:      ['course', 'program', 'degree', 'btech', 'bca', 'bsc', 'mba', 'science', 'engineering', 'branch', 'specialization'],
        eligibility:  ['eligible', 'eligibility', 'marks', 'percentage', 'criteria', 'rank', 'cutoff', 'qualification', 'requirement', 'pcm', 'keam'],
        staff:        ['principal', 'leadership', 'head', 'subramanian', 'director', 'faculty', 'professor', 'teacher', 'staff', 'hod'],
        transport:    ['bus', 'transport', 'transportation', 'route', 'travel', 'commute', 'vehicle', 'shuttle'],
        hostel:       ['hostel', 'room', 'stay', 'accommodation', 'dormitory', 'mess', 'food', 'canteen', 'cafeteria'],
        location:     ['location', 'address', 'where', 'pattambi', 'palakkad', 'vavanoor', 'koottanad', 'map', 'distance', 'how to reach'],
        photos:       ['photo', 'image', 'picture', 'campus', 'look', 'gallery', 'see', 'view', 'infrastructure'],
        contact:      ['contact', 'phone', 'email', 'helpline', 'call', 'number', 'reach', 'support', 'website'],
        placements:   ['placement', 'job', 'career', 'company', 'recruit', 'hire', 'salary', 'package', 'opportunity', 'campus drive'],
        naac:         ['naac', 'nba', 'aicte', 'accredit', 'recognized', 'affiliation', 'calicut university', 'approved', 'certification'],
        labs:         ['lab', 'laboratory', 'computer', 'network', 'equipment', 'workshop', 'practical', 'library', 'auditorium', 'infrastructure'],
        events:       ['event', 'fest', 'cultural', 'sports', 'competition', 'nss', 'ncc', 'club', 'activity', 'technolead', 'festival']
    };

    // Calculate best match score across all categories
    let bestMatch = { category: 'default', score: 0 };
    const words = input.toLowerCase().split(/\s+/);

    for (const [category, keywords] of Object.entries(categories)) {
        for (const keyword of keywords) {
            // Direct NLP check
            if (doc.has(keyword)) {
                // Map category to correct data key
                let dataKey = category;
                if (category === 'courses') dataKey = 'fees';
                if (category === 'transport') dataKey = 'bus';
                // All new categories (contact, placements, naac, labs, events) use same key as category name

                return collegeData[dataKey] || collegeData.default;
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
        let dataKey = bestMatch.category;
        if (dataKey === 'courses') dataKey = 'fees';
        if (dataKey === 'transport') dataKey = 'bus';

        return collegeData[dataKey] || collegeData.default;
    }

    // Smart Fallback / Closest Match Logic
    if (bestMatch.score > 0.4) {
        let dataKey = bestMatch.category;
        if (dataKey === 'courses') dataKey = 'fees';
        if (dataKey === 'transport') dataKey = 'bus';

        return `
            <strong>I think I know what you're looking for! 😊</strong><br>
            Are you asking about our <strong>${bestMatch.category.charAt(0).toUpperCase() + bestMatch.category.slice(1)}</strong>?<br><br>
            ${collegeData[dataKey]}
            <br><i>Is there something more specific I can help with?</i>
        `;
    }

    // Final Stage Escalatio: Direct Help
    return `
        <strong>I apologize, I want to make sure you get the most accurate information! 🙏</strong><br>
        While I'm still learning, I couldn't find a perfect match for that query. <br><br>
        <strong>Please connect with our Admission Experts directly:</strong><br>
        📞 <strong>Helpline:</strong> 8944552211<br>
        📧 <strong>Official Email:</strong> srpt@gmail.com<br><br>
        <i>They are available to assist you and your family 24/7.</i>
    `;
}

// ============================================
// Background Cycling Manager
// ============================================
const bgStates = ['bg-state-1', 'bg-state-2', 'bg-state-3', 'bg-state-4'];
let currentBgIndex = 0;

function cycleBackground() {
    document.body.classList.remove(...bgStates);
    currentBgIndex = (currentBgIndex + 1) % bgStates.length;
    document.body.classList.add(bgStates[currentBgIndex]);
}

// Start cycling every 15 seconds
setInterval(cycleBackground, 15000);
// Apply initial state
document.body.classList.add(bgStates[0]);

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
let ocrResults = { extractedText: "", detectedPCM: null, subjectMarks: {} };

// Helper: Extract subject marks from OCR text
// Handles Kerala DHSE marksheet format:
//   - Each subject row has many columns (CE, TE, GM x2 years + totals)
//   - The "Total" (Grand Total column) is a 3-digit number out of 200
//   - We look for the last 3-digit value >= 50 and <= 200 as it's the final score
function extractSubjectMarks(text) {
    const subjects = {
        physics:   ['physics', 'phy', 'phys'],
        chemistry: ['chemistry', 'chem'],
        maths:     ['mathematics', 'maths', 'math', 'mathematics-sci'],
        english:   ['english', 'eng']
    };
    
    const marks = {};
    const lines = text.split('\n');
    
    for (const line of lines) {
        const lowerLine = line.toLowerCase();
        for (const [subject, keywords] of Object.entries(subjects)) {
            if (marks[subject]) continue; // already found
            if (keywords.some(kw => lowerLine.includes(kw))) {
                // Extract all numbers from this line
                const numbers = (line.match(/\b(\d+)\b/g) || []).map(Number);
                
                // Priority 1: Look for a total score out of 200 (3-digit, 50-200)
                const totalsOut200 = numbers.filter(n => n >= 50 && n <= 200);
                if (totalsOut200.length > 0) {
                    // The Grand Total column is typically the last large 3-digit number
                    // Filter to only 3-digit numbers for Kerala board
                    const threeDigit = totalsOut200.filter(n => n >= 100 && n <= 200);
                    if (threeDigit.length > 0) {
                        // Take the last 3-digit number in the row (the Grand Total column)
                        const rawTotal = threeDigit[threeDigit.length - 1];
                        // Convert from /200 scale to percentage
                        marks[subject] = Math.round((rawTotal / 200) * 100);
                        marks[`${subject}_raw`] = rawTotal; // store raw too
                        continue;
                    }

                    // Priority 2: 2-digit marks (out of 100 scale like CBSE)
                    const twoDigit = totalsOut200.filter(n => n >= 30 && n < 100);
                    if (twoDigit.length > 0) {
                        marks[subject] = twoDigit[twoDigit.length - 1];
                    }
                }
            }
        }
    }
    
    // Also try to find percentage directly (e.g., "85%")
    const percentMatch = text.match(/(\d{2,3})\s*%/g);
    if (percentMatch) {
        const percents = percentMatch.map(p => parseInt(p));
        const validPercent = percents.find(p => p >= 30 && p <= 100);
        if (validPercent) marks._directPercent = validPercent;
    }
    
    return marks;
}

// Helper: Calculate PCM percentage from extracted marks
function calculatePCMPercent(marks) {
    const pcmSubjects = ['physics', 'chemistry', 'maths'];
    const found = pcmSubjects.filter(s => marks[s] !== undefined);
    
    if (found.length >= 2) {
        const total = found.reduce((sum, s) => sum + marks[s], 0);
        return Math.round(total / found.length);
    }
    
    // Fallback: use direct percentage if found
    if (marks._directPercent) return marks._directPercent;
    
    return null;
}

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

                    // Extract individual subject marks
                    const marks = extractSubjectMarks(result.text);
                    Object.assign(ocrResults.subjectMarks, marks);
                    
                    // Calculate PCM percentage
                    const calculatedPCM = calculatePCMPercent(ocrResults.subjectMarks);
                    if (calculatedPCM) ocrResults.detectedPCM = calculatedPCM;

                    // Build marks display - always shown after any marksheet upload
                    let marksDisplay = '';
                    const sm = ocrResults.subjectMarks;
                    if (sm.physics)   marksDisplay += `<br>📘 Physics: <strong>${sm.physics}%</strong>${sm.physics_raw ? ` (${sm.physics_raw}/200)` : ''}`;
                    if (sm.chemistry) marksDisplay += `<br>📗 Chemistry: <strong>${sm.chemistry}%</strong>${sm.chemistry_raw ? ` (${sm.chemistry_raw}/200)` : ''}`;
                    if (sm.maths)     marksDisplay += `<br>📕 Maths: <strong>${sm.maths}%</strong>${sm.maths_raw ? ` (${sm.maths_raw}/200)` : ''}`;
                    if (sm.english)   marksDisplay += `<br>📙 English: <strong>${sm.english}%</strong>${sm.english_raw ? ` (${sm.english_raw}/200)` : ''}`;

                    const noMarksFound = !sm.physics && !sm.chemistry && !sm.maths && !sm.english;
                    if (noMarksFound) {
                        marksDisplay = `<br><small>⚠️ Could not auto-detect subject marks. Please ensure the image is clear and well-lit.</small>`;
                    }

                    const pcmLine = ocrResults.detectedPCM
                        ? `<br><br>📊 <strong>Calculated PCM Average: ${ocrResults.detectedPCM}%</strong>`
                        : (noMarksFound ? '' : `<br><br>📊 <em>PCM Average: Not enough subjects found to calculate.</em>`);

                    addMessage(`
                        ✅ <strong>OCR Complete for ${file.name}</strong>
                        ${marksDisplay}
                        ${pcmLine}
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
// OCR Processing Function using Tesseract.js
async function processDocumentOCR(imageFile) {
    try {
        // Preprocess image (Grayscale + Contrast) for better accuracy
        const processedImage = await preprocessImage(imageFile);

        const worker = await Tesseract.createWorker('eng');
        // Configure for better accuracy
        await worker.setParameters({
            tessedit_char_whitelist: '0123456789%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.:,-/ ',
        });

        const { data } = await worker.recognize(processedImage);
        await worker.terminate();
        return { text: data.text, confidence: data.confidence };
    } catch (error) {
        console.error("OCR Error:", error);
        throw error;
    }
}

// Helper: Preprocess image for better OCR results
function preprocessImage(file) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Resize for better OCR (Upscale if small)
            let width = img.width;
            let height = img.height;
            const minWidth = 1000;
            if (width < minWidth) {
                const scaleFactor = minWidth / width;
                width = width * scaleFactor;
                height = height * scaleFactor;
            }

            canvas.width = width;
            canvas.height = height;

            // Draw original image
            ctx.drawImage(img, 0, 0, width, height);

            // Get pixel data
            const imgData = ctx.getImageData(0, 0, width, height);
            const data = imgData.data;

            // Apply Filters: Grayscale + Binarization (Thresholding)
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Grayscale
                const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;

                // Simple Binarization (Boost contrast for text)
                // Threshold set to 128 (midpoint)
                const val = gray > 140 ? 255 : 0; // Slightly higher threshold to clear gray backgrounds

                data[i] = val;
                data[i + 1] = val;
                data[i + 2] = val;
            }

            ctx.putImageData(imgData, 0, 0);
            resolve(canvas.toDataURL('image/jpeg'));
        };
        img.src = URL.createObjectURL(file);
    });
}

// Enhanced verification with OCR results
function verifyDocumentsWithOCR() {
    const claimedPCM = parseFloat(applicantDetails.pcmPercent);
    const detectedPCM = ocrResults.detectedPCM;
    const marks = ocrResults.subjectMarks;

    let verificationStatus = {
        certificate: uploadedDocuments.some(f => f.name.toLowerCase().includes('cert')) ? 'Verified ✅' : 'Uploaded ✅',
        marksheet: uploadedDocuments.some(f => f.name.toLowerCase().includes('mark')) ? 'Verified ✅' : 'Uploaded ✅',
        pcmMatch: 'Pending',
        rankList: uploadedDocuments.some(f => f.name.toLowerCase().includes('rank') || f.name.toLowerCase().includes('keam') || f.name.toLowerCase().includes('jee')) ? 'Verified ✅' : 'Uploaded ✅',
        subjectBreakdown: ''
    };

    // Build subject breakdown
    let breakdown = [];
    if (marks.physics) breakdown.push(`Physics: ${marks.physics}`);
    if (marks.chemistry) breakdown.push(`Chemistry: ${marks.chemistry}`);
    if (marks.maths) breakdown.push(`Maths: ${marks.maths}`);
    if (marks.english) breakdown.push(`English: ${marks.english}`);
    verificationStatus.subjectBreakdown = breakdown.join(' | ');

    // Compare OCR-detected marks with claimed marks
    if (detectedPCM) {
        const tolerance = 5; // Allow 5% tolerance for OCR errors
        if (Math.abs(detectedPCM - claimedPCM) <= tolerance) {
            verificationStatus.pcmMatch = `${detectedPCM}% (from OCR) - Matches ✅`;
        } else {
            verificationStatus.pcmMatch = `⚠️ Mismatch! Claimed: ${claimedPCM}%, OCR Detected: ${detectedPCM}%`;
        }
    } else {
        verificationStatus.pcmMatch = `${claimedPCM}% - Claimed (Verified ✅)`;
    }

    return verificationStatus;
}

// ============================================
// Web Speech API Integration (Voice Messaging)
// ============================================

const micBtn = document.getElementById('mic-btn');
let isRecording = false;

// Initialize Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    micBtn.addEventListener('click', () => {
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    });

    function startRecording() {
        recognition.start();
        isRecording = true;
        micBtn.classList.add('mic-active');
        userInput.placeholder = "Listening...";
    }

    function stopRecording() {
        recognition.stop();
        isRecording = false;
        micBtn.classList.remove('mic-active');
        userInput.placeholder = "Enter a prompt here";
    }

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        stopRecording();

        // Slightly delay to allow user to see text before sending
        setTimeout(() => {
            processMessage();
        }, 500);
    };

    recognition.onspeechend = () => {
        stopRecording();
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        stopRecording();
        if (event.error === 'not-allowed') {
            addMessage("⚠️ Microphone access denied. Please allow permissions to use voice search.", 'bot');
        }
    };

} else {
    // Hide mic button if not supported
    micBtn.style.display = 'none';
    console.warn("Speech recognition not supported in this browser.");
}

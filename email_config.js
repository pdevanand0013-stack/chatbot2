// ============================================
// EMAILJS CONFIGURATION
// ============================================
// IMPORTANT: Replace these placeholders with your actual EmailJS credentials.
// Get them from: https://dashboard.emailjs.com/

const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // e.g., 'a8B9cD0eF1gH2iJ3k'
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'; // e.g., 'service_xyz123'
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'; // e.g., 'template_abc456'

// Initialize EmailJS
(function() {
    // Only initialize if the script is loaded and we have a valid key format
    if (typeof emailjs !== 'undefined' && !EMAILJS_PUBLIC_KEY.includes('YOUR_')) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

/**
 * Sends a confirmation email to the applicant using EmailJS.
 * Requires an EmailJS template that accepts the following variables:
 * {{to_email}}, {{name}}, {{course}}, {{phone}}, {{pcm}}
 * 
 * @param {Object} details The applicant details
 * @returns {Promise<{success: boolean, message?: string}>}
 */
async function sendConfirmationEmail(details) {
    if (EMAILJS_PUBLIC_KEY.includes('YOUR_')) {
        console.warn('EmailJS is not configured. Skipping email dispatch.');
        return { success: false, message: 'EmailJS not configured' };
    }

    try {
        const templateParams = {
            to_email: details.email, // This targets the user's email address
            name: details.name,
            course: details.course,
            phone: details.phone,
            pcm: details.pcmPercent
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('Email sent successfully!', response.status, response.text);
        return { success: true };

    } catch (error) {
        console.error('Failed to send email:', error);
        return { success: false, message: error.text || error.message || 'Unknown error' };
    }
}

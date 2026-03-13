// ============================================
// SUPABASE CONFIGURATION
// ============================================
// IMPORTANT: Replace the values below with your actual Supabase credentials.
// Get them from: https://app.supabase.com -> Your Project -> Settings -> API

const SUPABASE_URL = 'https://dvtzqmadlomahkraupek.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dHpxbWFkbG9tYWhrcmF1cGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjc5NDMsImV4cCI6MjA4ODY0Mzk0M30.H1mS3UT5o26vbBikytOiSp-aCIgNTaKwAX_iUvGmrhw';

// Initialize the Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Function to save an application to Supabase
async function saveApplicationToSupabase(details) {
    try {
        const { data, error } = await supabaseClient
            .from('applications')
            .insert([{
                name:         details.name,
                phone:        details.phone,
                course:       details.course,
                pcm_percent:  String(details.pcmPercent),
                keam_rank:    String(details.keamRank || 'N/A'),
                scholarship:  details.scholarship || 'None',
                email:        details.email,
                fee_discount: details.feeDiscount ? `${details.feeDiscount.percentage}%` : '0%'
            }]);

        if (error) {
            console.error('Supabase Insert Error:', error.message);
            alert("Supabase Error Details: " + error.message); // Added for user debugging
            return { success: false, message: error.message };
        }

        console.log('Application saved to Supabase:', data);
        return { success: true };

    } catch (err) {
        console.error('Supabase connection error:', err);
        alert("Supabase Connection Error: " + err.message); // Added for user debugging
        return { success: false, message: err.message };
    }
}

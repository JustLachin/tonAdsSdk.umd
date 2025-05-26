// TON Ads Integration for dota2.net.tr
const initTonAds = async () => {
    try {
        const adController = window.TonAdsSDK;
        
        // Initialize the SDK with your token
        await adController.init({
            token: 'PYTHON-389-ORANGE'
        });

        // Event handlers
        adController.on('adShown', () => {
            console.log('Ad shown successfully');
        });

        adController.on('adCompleted', () => {
            console.log('Ad completed successfully');
        });

        adController.on('adError', () => {
            console.error('Error showing ad');
        });

        adController.on('cooldown', (data) => {
            // Store cooldown in localStorage
            const cooldownEndTime = Date.now() + (data.cooldownSecs * 1000);
            localStorage.setItem('tonAdsCooldown', cooldownEndTime);
            console.log(`Cooldown active for ${data.cooldownSecs} seconds`);
        });

        return adController;
    } catch (error) {
        console.error('Error initializing TON Ads:', error);
        return null;
    }
};

// Function to show ad
const showTonAd = async () => {
    try {
        const cooldownEndTime = localStorage.getItem('tonAdsCooldown');
        if (cooldownEndTime && Date.now() < parseInt(cooldownEndTime)) {
            const remainingSeconds = Math.ceil((parseInt(cooldownEndTime) - Date.now()) / 1000);
            console.log(`Please wait ${remainingSeconds} seconds before showing next ad`);
            return false;
        }

        const adController = window.TonAdsSDK;
        await adController.show();
        return true;
    } catch (error) {
        console.error('Error showing ad:', error);
        return false;
    }
};

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', initTonAds);
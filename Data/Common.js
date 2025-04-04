export const commonconfig = {
    URL: 'https://aiozpin.network/',

    // No Login URL
    Get_Started_Button: "//span[contains(text(),'Get Started')]",
    SignIn_Wallet_Button: "//button[contains(text(),'Sign in with Wallet')]",
    Select_MetaMask_Wallet_Button: "//span[contains(text(), 'MetaMask')]",
    Select_Trust_Wallet_Button: "//span[contains(text(), 'Trust Wallet')]",
    Select_WalletConnect_Wallet_Button: "//span[contains(text(), 'WalletConnect')]",

    // Login URL
    DashBoard_Avatar_Icon: "//img[@alt='aioz-pin-dashboard-avatar-default']",
    Disconnect_Button: "//button[contains(text(),'Disconnect')]",

    //VERIFY
    Expected_Account_MetaMask_Connected: "//button[.//p[text()='0xd793...0e85']]",
    Expected_Account_MetaMask_Disconnected: "//span[contains(text(),'Welcome to AIOZ Pin')]",
};
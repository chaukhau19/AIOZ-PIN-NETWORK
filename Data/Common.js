export const commoncfg_Account = {
    // URLs
    URL_AIOZPin: 'https://aiozpin.network/',
    URL_Google: 'https://www.google.com.vn/?hl=en',
    // URL_Gmail: 'https://acesse.one/P1eia',
    Email: 'testerforaioznetwork@gmail.com',
    Password: '123456AIOZnetwork',
};

export const commoncfg_Locator = {
    // No Login URL
    Confirm_Login_Button: "//button[contains(text(),'Confirm')]",
    Get_Started_Button: "//span[contains(text(),'Get Started')]",
    SignIn_Email_Button: "//button[contains(text(),'Sign in with Email')]",
    SignIn_Wallet_Button: "//button[contains(text(),'Sign in with Wallet')]",
    Select_MetaMask_Wallet_Button: "//span[contains(text(), 'MetaMask')]",
    Select_Trust_Wallet_Button: "//span[contains(text(), 'Trust Wallet')]",
    Select_WalletConnect_Wallet_Button: "//span[contains(text(), 'WalletConnect')]",

    // Login URL
    DashBoard_Avatar_Icon: "//img[@alt='aioz-pin-dashboard-avatar-default']",
    Disconnect_Button: "//button[contains(text(),'Disconnect')]",

    // Email
    Mail_AIOZPin: "(//span[contains(text(),'AIOZ Pin')])[3]",
    Box_Gmail_Button: "//a[contains(text(),'Inbox')]",
    Gmail_Button: "//*[contains(text(),'Gmail')]",
    Login_Button: "(//span[contains(text(),'Sign in')])[2]",
    Email_InputText: "//input[@placeholder='Please enter your email']",
    CopyCodeEmailLocator: 'span[style*="font-size:28px"][style*="padding:24px 64px"]',
    PasteCodeEmailLocator: '//div[@style="display: flex; align-items: center; justify-content: center; gap: 16px;"]/input',
};

export const commoncfg_Verify = {
    //VERIFY
    Expected_Account_MetaMask_Connected: "//button[.//p[text()='0xd793...0e85']]",
    Expected_Account_MetaMask_Disconnected: "//span[contains(text(),'Welcome to AIOZ Pin')]",
};
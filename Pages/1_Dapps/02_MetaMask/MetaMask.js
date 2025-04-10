import { FunctionPage } from "../../Functions.js";

export class ConnectWalletMetaMaskPage {
    constructor(page) {
        this.page = page;
        this.functionPage = new FunctionPage(page);
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    async Connect_MetaMask(wallet) {
        try {
            await this.functionPage.gotoURL(Commoncfg_Account.URL_AIOZPin);
            await this.functionPage.Connect_Wallet_MetaMask();
            await wallet.approve();
            await this.functionPage.Verify_Account_MetaMask_Connected();

        } catch (error) {
            console.error("Error during MetaMask connection:", error);
        } finally {
            await this.page.close();
        }
    }

    async Disconnect_MetaMask(wallet) {
        try {
            await this.functionPage.gotoURL();
            await this.functionPage.Disconnect_Wallet_MetaMask();
            await this.functionPage.Verify_Account_MetaMask_Disconnected();

        } catch (error) {
            console.error(" Error during MetaMask disconnection:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    async Switch_Network(wallet) {
        try {
            await this.functionPage.gotoURL();
            await this.functionPage.Connect_Wallet_MetaMask();
            await wallet.approve(); 
            await this.functionPage.Verify_Account_MetaMask_Connected();
            await this.functionPage.Switch_Network_To_Ethereum();
            await this.functionPage.Switch_Network_To_AIOZ();
            await this.functionPage.Disconnect_Wallet_MetaMask();
            await this.functionPage.Verify_Account_MetaMask_Disconnected();

        } catch (error) {
            console.error(" Error during Switch Network:", error);
            throw error;
        } finally {
            await this.page.close();
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

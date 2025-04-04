"# AIOZ-PIN-NETWORK" 
################################################################################################################################################
### Installation Library 
########## 1. CHECK LIBRARY VERSION ########## 
node -v
npm -v
yarn -v
npm playwright --version
yarn playwright --version
########## 2. INSTALL LIBRARY IF NEED ##########
# YARN
yarn install
npm install -g yarn
yarn add @playwright/test@latest @tenkeylabs/dappwright
yarn playwright install    # Cài trình duyệt cho Playwright 
yarn add ethers
yarn add -D @types/node
# NODE
npm install -g typescript
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
apt-get install -y nodejs
########## 3. REINSTALL LIBRARY IF NEED ##########
# Cài đặt Playwright và dependencies
rm -rf node_modules yarn.lock
yarn install
yarn playwright install
yarn playwright install --with-deps
yarn add @playwright/test@latest @tenkeylabs/dappwright
yarn add @playwright/testt@1.48.2 @tenkeylabs/dappwright

rm -rf node_modules package-lock.json yarn.lock
npm install -g playwright@1.48.2
npm install  # Hoặc dùng yarn nếu đang dùng yarn
npx playwright install
npx playwright install --with-deps
npm install @playwright/test@latest @tenkeylabs/dappwright

# Xóa cài đặt Playwright và dependencies
yarn remove @playwright/test @tenkeylabs/dappwright
rm -rf node_modules package-lock.json yarn.lock
npm uninstall @playwright/test @tenkeylabs/dappwright
rm -rf node_modules package-lock.json yarn.lock
################################################################################################################################################
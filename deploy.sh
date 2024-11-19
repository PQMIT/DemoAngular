#!/bin/bash

# Cấu hình thông tin
REPO_PATH="/home/pqmit/code/DemoAngular/DemoAngular"
DIST_PATH="$REPO_PATH/dist/demo-angular"
DEPLOY_PATH="/var/www/html"
LOG_FILE="/tmp/deploy.log"
BOT_TOKEN="7647530452:AAFEpO0_NX3H9EFW6ttOIeG-btEqi-e2DN0"  # Thay bằng token của bot Telegram
CHAT_ID="123456789"  # Thay bằng chat ID của bạn

# Hàm gửi tin nhắn qua Telegram
send_telegram() {
    MESSAGE=$1
    curl -s -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
        -d chat_id="$CHAT_ID" \
        -d text="$MESSAGE"
}

echo "----- Deployment started at $(date) -----" > $LOG_FILE

# Pull code mới nhất
cd $REPO_PATH
git reset --hard >> $LOG_FILE 2>&1
git pull origin main >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    send_telegram "Git pull failed!"  # Gửi thông báo lỗi qua Telegram
    echo "Git pull failed!"
    exit 1
fi

# Build project
npm install >> $LOG_FILE 2>&1
npm run build >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    send_telegram "Build failed!"  # Gửi thông báo lỗi qua Telegram
    echo "Build failed!"
    exit 1
fi

# Copy build files
sudo cp -r $DIST_PATH/* $DEPLOY_PATH/ >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    send_telegram "Copy files failed!"  # Gửi thông báo lỗi qua Telegram
    echo "Copy files failed!"
    exit 1
fi

# Thông báo thành công
send_telegram "Deployment successful!"  # Gửi thông báo thành công qua Telegram
echo "Deployment successful!"
echo "----- Deployment finished at $(date) -----" >> $LOG_FILE

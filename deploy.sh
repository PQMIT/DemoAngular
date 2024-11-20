#!/bin/bash

# Cấu hình thông tin
REPO_PATH="/home/pqmit/code/DemoAngular/DemoAngular"
DIST_PATH="$REPO_PATH/dist/demo-angular"
DEPLOY_PATH="/var/www/html"
LOG_FILE="/tmp/deploy.log"
BOT_TOKEN="7647530452:AAFEpO0_NX3H9EFW6ttOIeG-btEqi-e2DN0" # Thay bằng token của bot Telegram
CHAT_ID="6042225244"     # Thay bằng chat_id bạn đã lấy được

send_telegram_message() {
    MESSAGE=$1
    curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
        -d chat_id="${CHAT_ID}" \
        -d text="$MESSAGE" > /dev/null
}

# Bắt đầu triển khai
echo "----- Deployment started at $(date) -----" > $LOG_FILE
send_telegram_message "🔄 Deployment started at $(date)"

# Pull code mới nhất
cd $REPO_PATH
git reset --hard >> $LOG_FILE 2>&1
git pull origin main >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    ERROR_MESSAGE="❌ Git pull failed! Check $LOG_FILE for details."
    send_telegram_message "$ERROR_MESSAGE"
    echo "$ERROR_MESSAGE"
    exit 1
fi

# Build project
npm install >> $LOG_FILE 2>&1
ng build >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    ERROR_MESSAGE="❌ Build failed! Check $LOG_FILE for details."
    send_telegram_message "$ERROR_MESSAGE"
    echo "$ERROR_MESSAGE"
    exit 1
fi

# Copy build files
sudo cp -r $DIST_PATH/* $DEPLOY_PATH/ >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    ERROR_MESSAGE="❌ Copy files failed! Check $LOG_FILE for details."
    send_telegram_message "$ERROR_MESSAGE"
    echo "$ERROR_MESSAGE"
    exit 1
fi

# Thông báo thành công
SUCCESS_MESSAGE="✅ Deployment successful at $(date)!"
send_telegram_message "$SUCCESS_MESSAGE"
echo "$SUCCESS_MESSAGE"
echo "----- Deployment finished at $(date) -----" >> $LOG_FILE

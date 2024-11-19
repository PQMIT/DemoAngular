#!/bin/bash

# Cấu hình thông tin
REPO_PATH="/home/pqmit/code/DemoAngular/DemoAngular"
DIST_PATH="$REPO_PATH/dist/demo-angular"
DEPLOY_PATH="/var/www/html"
LOG_FILE="/tmp/deploy.log"
EMAIL="PQM2112000@gmail.com"

echo "----- Deployment started at $(date) -----" > $LOG_FILE

# Pull code mới nhất
cd $REPO_PATH
git reset --hard >> $LOG_FILE 2>&1
git pull origin main >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    # echo "Git pull failed!" | mail -s "Deployment Failed" $EMAIL
    echo "Git pull failed!"
    exit 1
fi

# Build project
npm install >> $LOG_FILE 2>&1
npm run build >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    # echo "Build failed!" | mail -s "Deployment Failed" $EMAIL
    echo "Build failed!"
    exit 1
fi

# Copy build files
sudo cp -r $DIST_PATH/* $DEPLOY_PATH/ >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    # echo "Copy files failed!" | mail -s "Deployment Failed" $EMAIL
    echo "Copy files failed!"
    exit 1
fi

# Thông báo thành công
# echo "Deployment successful!" | mail -s "Deployment Successful" $EMAIL
echo "Deployment successful!"
echo "----- Deployment finished at $(date) -----" >> $LOG_FILE

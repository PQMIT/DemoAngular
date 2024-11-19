#!/bin/bash

# Thay YOUR_BOT_TOKEN bằng token bot của bạn
BOT_TOKEN="7647530452:AAFEpO0_NX3H9EFW6ttOIeG-btEqi-e2DN0"

# Thay YOUR_CHAT_ID bằng chat_id bạn vừa lấy được
CHAT_ID="6042225244"

# Lấy tin nhắn từ đối số truyền vào
MESSAGE=$1

# Gửi tin nhắn qua Telegram
curl -s -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
     -d chat_id="$CHAT_ID" \
     -d text="$MESSAGE"

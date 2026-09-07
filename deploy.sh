#!/bin/bash
# Güler Ayaz Beauty (gulerayazbeauty.com) - tek komutla deploy
# Kullanim (kendi bilgisayarindan): ./deploy.sh
set -e
ssh prod-s1 << 'REMOTE'
set -e
cd /opt/customers/gulerayaz/app
echo ">> Git pull..."
git pull
echo ">> Docker rebuild..."
docker compose -f /opt/customers/gulerayaz/docker-compose.yml up -d --build
echo ">> Durum:"
docker ps --filter name=gulerayaz --format 'table {{.Names}}\t{{.Status}}'
echo ">> Deploy tamam: https://gulerayazbeauty.com"
REMOTE

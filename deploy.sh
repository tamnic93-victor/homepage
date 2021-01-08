#!/usr/bin/env zsh
echo "========= clear"
rm -fr build

echo "========= build"
yarn build

echo "========= upload"
aws s3 sync ./build/ s3://bclabs.co.kr/ --delete

echo "========= flush cache"
aws cloudfront create-invalidation --distribution-id EGNPU1OVS7UMS --paths "/*"
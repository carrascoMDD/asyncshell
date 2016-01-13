#!/bin/bash


export NVM_DIR="/home/acv/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

nvm use v0.10.30

export NODE_PATH=$NODE_PATH:/home/acv/.nvm/versions/node/v0.10.30/lib/node_modules


pushd ".."
node --max-old-space-size=2000 --expose-gc "./lib/launchtop.js" "@testspath/#testsroot/browserlaunchables.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launchbrowser.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi
popd

nvm use default

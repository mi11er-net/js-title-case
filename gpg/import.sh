#!/usr/bin/env bash
openssl aes-256-cbc -K $encrypted_342f2f6ad141_key -iv $encrypted_342f2f6ad141_iv -in gpg/gpg.key.enc -d | /usr/bin/gpg2 --passphrase ${GPG_PASSPHRASE} --batch --no-tty --import

git config --local gpg.program "gpg/sign.sh"

git config --local commit.gpgsign true

git config --local user.email ${GIT_EMAIL}

git config --global user.signingkey ${GPG_KEY_ID}
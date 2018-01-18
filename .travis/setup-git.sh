#!/usr/bin/env bash
openssl aes-256-cbc -K $encrypted_342f2f6ad141_key -iv $encrypted_342f2f6ad141_iv -in .travis/gpg.key.enc -d | /usr/bin/gpg --batch --no-tty --import --

git config --local gpg.program ".travis/sign.sh"

git config --local commit.gpgsign true

git config --local user.email "${GIT_EMAIL}"

git config --local user.name "${GIT_NAME}"

git config --global user.signingkey "${GPG_KEY_ID}"
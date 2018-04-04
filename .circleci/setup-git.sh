#!/usr/bin/env bash
echo -n "${GPG_KEY}" | base64 -d | /usr/bin/gpg --batch --no-tty --import --

git config --local gpg.program ".circleci/sign.sh"

git config --local commit.gpgsign true

git config --local user.email "${GIT_EMAIL}"

git config --local user.name "${GIT_NAME}"

git config --global user.signingkey "${GPG_KEY_ID}"

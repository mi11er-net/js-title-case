#!/usr/bin/env bash
/usr/bin/gpg2 --passphrase ${GPG_PASSPHRASE} --batch --no-tty "$@"
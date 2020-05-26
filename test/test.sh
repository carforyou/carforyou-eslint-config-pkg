#!/usr/bin/env bash

bad_expected=6
good_expected=0

bad_output=$(npx eslint --format json "test/bad/**/*")
echo $bad_output

bad_failures=$(echo $bad_output | npx jq ". | map(.errorCount) | add")

if [ "$bad_failures" != "$bad_expected" ]; then
  echo "Expected $bad_expected but got $bad_failures linting errors for badly formatted files"
  exit 1
fi


good_output=$(npx eslint --format json "test/good/**/*")
echo $good_output

good_failures=$(echo $good_output | npx jq ". | map(.errorCount) | add")

if [ "$good_failures" != "$good_expected" ]; then
  echo "Expected $good_expected but got $good_failures linting errors for well formatted files"
  exit 1
fi

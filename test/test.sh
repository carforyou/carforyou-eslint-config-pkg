#!/usr/bin/env bash

${PWD}/test/testRunner.sh -c .eslintrc.js -g 0 -b 16
${PWD}/test/testRunner.sh -c .eslintrc.react.js -g 0 -b 18
${PWD}/test/testRunner.sh -c .eslintrc.node.js -g 0 -b 18
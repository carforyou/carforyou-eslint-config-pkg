#!/usr/bin/env bash

${PWD}/test/testRunner.sh -c .eslintrc.js -g 0 -b 17
${PWD}/test/testRunner.sh -c .eslintrc.react.js -g 0 -b 19
${PWD}/test/testRunner.sh -c .eslintrc.node.js -g 0 -b 19
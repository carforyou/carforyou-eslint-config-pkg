#!/usr/bin/env bash

${PWD}/src/__test__/testRunner.sh -c ${PWD}/src/__test__/.eslintrc.js -g 0 -b 15
${PWD}/src/__test__/testRunner.sh -c ${PWD}/src/__test__/.eslintrc.react.js -g 0 -b 17
${PWD}/src/__test__/testRunner.sh -c ${PWD}/src/__test__/.eslintrc.node.js -g 0 -b 17

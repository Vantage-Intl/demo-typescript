/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    name: 'VNTG',
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: path.join(__dirname, 'coverage'),
    coverageReporters: ['text', 'json'],
};

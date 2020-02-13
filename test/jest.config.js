module.exports = { // eslint-disable-line
    moduleFileExtensions: ['js'],
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    testMatch: [
        '<rootDir>/../test/spec/**/*.spec.js'
    ]
};
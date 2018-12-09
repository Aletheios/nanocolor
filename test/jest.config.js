module.exports = { // eslint-disable-line
    moduleFileExtensions: ['js'],
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/../src/$1'
    },
    testMatch: [
        '<rootDir>/../test/spec/**/*.spec.js'
    ]
};
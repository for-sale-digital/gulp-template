module.exports = {
    build: {
        banner: '/* <%= pkg.name %> <%= pkg.version %> */\n/* Generated on: <%= timestamp %> */\n\n',
        basename: 'myproject',
        sources: {
            sass: './sources/scss/',
            js: './sources/js/',
        },
        targets: {
            css: './assets/css/',
            js: './assets/js/',
        },
    },

    static: {
        sources: {
            css: [],
            js: [],
        },
        targets: {
            css: './assets/css/libs/',
            js: './assets/js/libs/',
        },
    },
};

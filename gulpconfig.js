module.exports = {
    banner: '/* <%= pkg.name %> <%= pkg.version %> */\n/* Generated on: <%= timestamp("YYYY-MM-DD HH:mm:ss") %> */\n\n',

    basename: 'main',

    dir: {
        sources: {
            sass: './sources/scss/',
            js: './sources/js/',
        },
        output: {
            css: './assets/css/',
            js: './assets/js/',
        },
    },
};

module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w*)\((\w*)\): ([A-Z]*-\d*) (.*)$/,
            headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
        },
    },
};

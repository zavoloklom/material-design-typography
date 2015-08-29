module.exports = {
    convert: {
        files: [{
            expand: true,
            cwd: 'less',
            src: ['*.less'],
            ext: '.scss',
            dest: 'scss/temp'
        }]
    },
    mixins: {
        files: [{
            expand: true,
            cwd: 'less/mixins',
            src: ['*.less'],
            ext: '.scss',
            dest: 'scss/temp/mixins'
        }]
    },
    variables: {
        files: [{
            expand: true,
            cwd: 'less/variables',
            src: ['*.less'],
            ext: '.scss',
            dest: 'scss/temp/variables'
        }]
    }
};
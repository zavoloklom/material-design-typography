module.exports = {
    less: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: false,
            cwd: 'scss/temp/',
            dest: 'scss/',
            src: ['{,*/}*.scss'],
            rename: function(dest, src) {
                if (src !== 'material-design-typography.scss') {
                    src = "_" + src;
                }
                return dest + src;
            }
        }]
    }
};
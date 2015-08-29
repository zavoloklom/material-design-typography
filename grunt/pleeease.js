module.exports = {
    prod: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: false
        },
        files: {
            'css/material-design-typography.css': 'css/material-design-typography.css'
        }
    },
    'prod-min': {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: {preserveHacks: true, removeAllComments: true}
        },
        files: {
            'css/material-design-typography.min.css': 'css/material-design-typography.css'
        }
    }
};
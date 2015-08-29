module.exports = {
    prod: {
        options: {
            paths: ["less"],
            sourceMap: false
        },
        files: {
            "css/material-design-typography.css": "less/material-design-typography.less"
        }
    }
};
var gulp = require('gulp');
var ncp = require('child_process');

gulp.task("unittest", () => {
    var options = {
        stdio: 'inherit'
    };

    var output;
    try {
        output = ncp.execSync('npm test unit_tests/*.js', options);
    }
    catch (err) {
        process.exit(1);
    }
})
/**
 * Created by andrew25ism on 12/26/2016.
 */
function TestPlugin (options) {}
TestPlugin.prototype.apply = function (compiler) {
    compiler.plugin("done", function () {
        console.log('plugin is done');
    });
};
module.exports = TestPlugin;
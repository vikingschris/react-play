/**
 * Created by andrew25ism on 12/26/2016.
 */
module.exports = {
    nonce: function (range) {
        var arr = [];

        for(var i = 0;i < (range > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : range);i++){
            arr.push(String.fromCharCode(Math.floor((Math.random() * 26) + 65)));
            arr.push(String.fromCharCode(Math.floor((Math.random() * 12) + 48)));
            arr.push(String.fromCharCode(Math.floor((Math.random() * 26) + 97)));
        }
        return arr.join("");
    }
};
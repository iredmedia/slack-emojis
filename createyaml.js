var fs = require('fs');
var yaml = require('write-yaml');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var dir = process.argv[2];


fs.readdir(dir, function(err, items) {
    // console.log(items);
    let emojiData = {};
    emojiData.title = 'kevins';
    emojiData.emojis = [];

    for (var i=0; i<items.length; i++) {
        // emojiData[i].name = items
        // emojiData[i].name = items
        name = items[i].split('.')[0];
        src = dir + items[i];
        emojiData.emojis.push({
            name,
            src
        });
    }
    console.log(emojiData);

    yaml.sync('kevins.yaml', emojiData);
});
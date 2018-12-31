const { readFileSync } = require('fs');
const htmllint = require('htmllint');

const file = readFileSync('index.html', 'utf8');
const options = {
  'line-end-style': 'crlf',
  'indent-width': 2,
  // 'tag-bans': false,
};

htmllint(file, options).then((result) => console.log(result));

exports.debug = (title, obj) => {
  const fs = require('fs');

  const seperator = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
  const time = new Date();
  const output = seperator + title + '\n' + time + seperator + JSON.stringify(obj);

  if (process.env.DEBUG) {
    fs.appendFile('lib/logs/eLog.log', output, 'utf8', (err) => {
      if (err) throw err;
    });
    console.log(output);
  }
};

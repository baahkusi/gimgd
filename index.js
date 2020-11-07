const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const gsc = require('./gscraper');

(async () =>{

  const config = {
      thumbLinkSelector: argv.tlink || '.wXeWr.islib.nfEiy.mM5pbd', // image thumbnails are wrapped in link tags with these classes
      imageLimit: argv.limit || 15,
      url: (label) => `https://www.google.com/search?q=${label}&source=lnms&tbm=isch`
  }

  if (!argv.label) {
    console.log('Error: label argument is required!');
    process.exit(1);
  }

  const labels = argv.label.split(',');

  for (const label of labels) {

    if (label === '') {
      continue;
    }

    console.log(`Begin download for label '${label}'`);

    const imageLinks = await gsc.getImageLinks(label, config);

    await gsc.downloadLabel(imageLinks, label);
  }
  
  console.log('Waiting for Async Crawling to Complete!');
  
})();

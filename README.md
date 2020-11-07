## Google Image Scrapper

Basically allows you to download any number of images for a particular google search.

### Usage

- Clone this repo
- Change into repo directory and run `npm i` to install dependencies
- To begin crawling run `npm run crawl -- --label="cats, dogs, power lines"`
- Seperate multiple `labels` by `,` (comma)
- images are saved to `./data` directory under label name

Aside **label** there are other parameter that can be passed.

- **limit** parameter specifies the number of images to download for each label
- example `npm run crawl -- --label="power lines" --limit=50`
- default limit is 15 and currently can't go beyond 50


#### Roadmap

- TODO: Make limit go beyond 50, probably infinite (as much as google can provide)
- TODO: Make some parts of the code more robust

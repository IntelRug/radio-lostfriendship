const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'dist',
}, (e) => {
  if (e) {
    console.log(e);
  }
});

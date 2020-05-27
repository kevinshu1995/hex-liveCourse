var ghpages = require('gh-pages');

ghpages.publish('.', {add: true}, function(err) {});
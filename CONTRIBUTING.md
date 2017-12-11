## How to contribute

Fork repository, make changes, send us a pull request. We will review
your changes and apply them to the `master` branch shortly, provided
they don't violate our quality standards. To avoid frustration, before
sending us your pull request please run full Grunt build:

```
$ npm install
$ npm test
```

To develop it locally, open `index.html` in a browser and then run:

```
$ npm run dev
```

Now you can make changes to `.scss` files and refresh the page in the browser.
CSS will be recompiled automatically on every change you make.

### Commit messages guidelines

* Every commit/PR should preferably be linked to a Github issue. If it's not, it's recommended to create an Issue first and then commit and open a PR;
* Commit messages should follow this pattern:
```
 #<issue-number> - short description

(optional) * bullet-points with more details if necessary
```
* If the pattern is not followed - commit messages should at the very least reference the `#<issue-number>`.

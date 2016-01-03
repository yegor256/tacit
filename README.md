[![Made By Teamed.io](http://img.teamed.io/btn.svg)](http://www.teamed.io)
[![DevOps By Rultor.com](http://www.rultor.com/b/yegor256/tacit)](http://www.rultor.com/p/yegor256/tacit)

[![Build Status](https://img.shields.io/travis/yegor256/tacit/master.svg)](https://travis-ci.org/yegor256/tacit)
[![Build status](https://ci.appveyor.com/api/projects/status/9imw0l5gu82awubp?svg=true)](https://ci.appveyor.com/project/yegor256/tacit)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/yegor256/tacit/blob/master/LICENSE.txt)
[![Bower](https://img.shields.io/bower/v/tacit.svg)](https://github.com/yegor256/tacit/releases)
[![Dependencies](https://www.versioneye.com/user/projects/561ac7cea193340f2f00122f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/561ac7cea193340f2f00122f)

**Tacit** is a primitive CSS framework for dummies, like myself, who
don't know anything about graphic design but want their web services to
look eatable. No classes, no layouts. Just design plain and simple web pages
compliant with HTML5 and they will look OK.

Details are here: [yegor256.github.io/tacit](http://yegor256.github.io/tacit/)

Or simply download [`tacit.min.css`](http://yegor256.github.io/tacit/tacit.min.css)
and use together with your HTML by adding:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="tacit.min.css"/>
  </head>
</html>
```

This blog post explains it in even more details:
[Tacit, a CSS Framework Without Classes](http://www.yegor256.com/2015/04/13/tacit-css-framework-for-dummies.html).

## How to contribute

Fork repository, make changes, send us a pull request. We will review
your changes and apply them to the `master` branch shortly, provided
they don't violate our quality standards. To avoid frustration, before
sending us your pull request please run full Grunt build:

```
$ npm install
$ grunt
```

To develop it locally, open `index.html` in a browser and then run:

```
$ grunt dev
```

Now you can make changes to `.scss` files and refresh the page in the browser.
CSS will be recompiled automatically on every change you make.

If you have problems running the Grunt build you may need to install
[scss-lint](https://github.com/brigade/scss-lint) and [compass](http://compass-style.org/):

```
gem update --system && gem install scss_lint compass
```

## Got questions?

If you have questions or general suggestions, don't hesitate to submit
a new [Github issue](https://github.com/yegor256/tacit/issues/new).


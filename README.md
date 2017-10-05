[![Managed by Zerocracy](http://www.0crat.com/badge/C7BNDNSNR.svg)](http://www.0crat.com/p/C7BNDNSNR)
[![DevOps By Rultor.com](http://www.rultor.com/b/yegor256/tacit)](http://www.rultor.com/p/yegor256/tacit)

[![Build Status](https://img.shields.io/travis/yegor256/tacit/master.svg)](https://travis-ci.org/yegor256/tacit)
[![PDD status](http://www.0pdd.com/svg?name=yegor256/tacit)](http://www.0pdd.com/p?name=teamed/yegor256/tacit)
[![Build status](https://ci.appveyor.com/api/projects/status/9imw0l5gu82awubp?svg=true)](https://ci.appveyor.com/project/yegor256/tacit)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/yegor256/tacit/blob/master/LICENSE.txt)
[![NPM version](https://badge.fury.io/js/tacit-css.svg)](http://badge.fury.io/js/tacit-css)
[![Bower](https://img.shields.io/bower/v/tacit.svg)](https://github.com/yegor256/tacit/releases)
[![Dependencies](https://www.versioneye.com/user/projects/561ac7cea193340f2f00122f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/561ac7cea193340f2f00122f)

**Tacit** is a primitive CSS framework for dummies, like myself, who
don't know anything about graphic design but want their web services to
look eatable. No classes, no layouts. Just design plain and simple web pages
compliant with HTML5 and they will look OK.

Details are here: [yegor256.github.io/tacit](https://yegor256.github.io/tacit/)

Just add it to your HTML (replace `VERSION` with the latest version number,
which you can find [here](https://github.com/yegor256/tacit/releases)):

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="//cdn.rawgit.com/yegor256/tacit/gh-pages/tacit-css-VERSION.min.css"/>
  </head>
</html>
```

Or simply download [`tacit-css.min.css`](http://cdn.rawgit.com/yegor256/tacit/gh-pages/tacit-css.min.css)
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
$ npm test
```

To develop it locally, open `index.html` in a browser and then run:

```
$ npm run dev
```

Now you can make changes to `.scss` files and refresh the page in the browser.
CSS will be recompiled automatically on every change you make.

If you have problems running the Grunt build you may need to install
[scss-lint](https://github.com/brigade/scss-lint):

```
gem update --system && gem install scss_lint
```

## Got questions?

If you have questions or general suggestions, don't hesitate to submit
a new [Github issue](https://github.com/yegor256/tacit/issues/new).

## License (MIT)

Copyright (c) 2015-2017 Yegor Bugayenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


this is a test commit.


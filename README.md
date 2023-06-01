<img alt="logo" src="./tacit_logo.png" height="100px">

[![DevOps By Rultor.com](http://www.rultor.com/b/yegor256/tacit)](http://www.rultor.com/p/yegor256/tacit)

[![grunt](https://github.com/yegor256/tacit/actions/workflows/grunt.yml/badge.svg)](https://github.com/yegor256/tacit/actions/workflows/grunt.yml)
[![PDD status](http://www.0pdd.com/svg?name=yegor256/tacit)](http://www.0pdd.com/p?name=teamed/yegor256/tacit)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/yegor256/tacit/blob/master/LICENSE.txt)
[![NPM version](https://badge.fury.io/js/tacit-css.svg)](http://badge.fury.io/js/tacit-css)
[![Bower](https://img.shields.io/bower/v/tacit.svg)](https://github.com/yegor256/tacit/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/yegor256/ffcode/blob/master/LICENSE.txt)
[![Hits-of-Code](https://hitsofcode.com/github/yegor256/tacit)](https://hitsofcode.com/view/github/yegor256/tacit)
![Lines of code](https://img.shields.io/tokei/lines/github/yegor256/tacit)

**Tacit** is a primitive [CSS](https://en.wikipedia.org/wiki/CSS) framework for dummies, like myself, who
don't know anything about graphic design but want their web services to
look eatable. No classes, no layouts, just design plain and simple web pages
compliant with [HTML5](https://en.wikipedia.org/wiki/HTML5) and they will look OK.

Details are here: [yegor256.github.io/tacit](https://yegor256.github.io/tacit/)

Add this to your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css"/>
  </head>
</html>
```

Otherwise, simply download [`tacit-css.min.css`](https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css)
and use together with your HTML by adding:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="tacit-css.min.css"/>
  </head>
</html>
```

Of course, it is [responsive](https://en.wikipedia.org/wiki/Responsive_web_design)
and mobile-friendly, but you have to add this line too:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
</html>
```

This blog post explains it in even more details:
[Tacit, a CSS Framework Without Classes](http://www.yegor256.com/2015/04/13/tacit-css-framework-for-dummies.html).

## Browser/OS Compatibility

The following list is of tested browsers for compatibility.
We don't have any guarantees of compatibility for other browsers,
but as soon as possible will verify and add more to the list.
Some of these browsers present minor issues that are reported in the
our [issues](https://github.com/yegor256/tacit/issues) list.


| Browser/OS        | Version | Compatible |
|-------------------|---------|------------|
| Chrome            | >= 60   | Yes        |
| Firefox           | >= 56   | Yes        |
| Safari            | >= 11   | Yes        |
| Opera             | >= 48   | Yes        |
| Edge              | >= 14   | Yes        |
| Chrome (iOS)      | >= 60   | Yes        |
| Safari (iOS)      | -       | Yes        |
| Internet Explorer | >= 11   | Yes        |


## Built on top of Tacit framework

Tacit's goal is to be super simple and always with the same look-and-feel.
If you want something more custom, like a different theme, feel free to make it on top of Tacit. Here are some frameworks built on top of Tacit:

- [kacit](https://github.com/Kimeiga/kacit) Kacit is the Tacit CSS classless framework but with a yellow accent and Georgia font
- [Bahunya](https://github.com/kimeiga/bahunya) is a CSS framework with responsive typography, navbar, syntax highlighting, and much more, inspired by Tacit

## Usecases of Tacit framework

- [jare.io](http://www.jare.io) Free and instant CDN
- [wring.io](http://www.wring.io) GitHub notification filtering hosted inbox
- [wts.zold.io](http://wts.zold.io) Web Wallets of Zold cryptocurrency
- [jpeek.org](http://www.jpeek.org) Java projects code cohesion analyzer
- [socatar.com](https://socatar.com/) Web service to use profile photos in your page
- [filfreire.com](https://filfreire.com/) [@filfreire](https://github.com/filfreire)'s personal blog on software testing and development
- [moneeee](https://filfreire.com/Moneeee/) joke app to know how much money you're making during a boring meeting
- [soalition.com](https://www.soalition.com/hello) a social coalition management web app for online writers.
- [golang.cafe](https://golang.cafe) Go (golang) job board with no recruiters and clear salary ranges.
- [tinyfts](https://github.com/dbohdan/tinyfts) Very small standalone full text search HTTP/SCGI server

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
$ npm run dev
```

Now you can make changes to `.scss` files and refresh the page in the browser.
CSS will be recompiled automatically on every change you make.

## Logo

Tacit's logo was designed by Akshay Vinchurkar ([@akshayvinchurkar](https://github.com/akshayvinchurkar))

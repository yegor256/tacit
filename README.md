# CSS Framework for Dummies

[![DevOps By Rultor.com](https://www.rultor.com/b/yegor256/tacit)](https://www.rultor.com/p/yegor256/tacit)

[![grunt](https://github.com/yegor256/tacit/actions/workflows/grunt.yml/badge.svg)](https://github.com/yegor256/tacit/actions/workflows/grunt.yml)
[![JSDeliver stats](https://data.jsdelivr.com/v1/package/npm/tacit-css/badge)](https://www.jsdelivr.com/package/npm/tacit-css)
[![PDD status](https://www.0pdd.com/svg?name=yegor256/tacit)](https://www.0pdd.com/p?name=teamed/yegor256/tacit)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/yegor256/tacit/blob/master/LICENSE.txt)
[![NPM version](https://badge.fury.io/js/tacit-css.svg)](https://badge.fury.io/js/tacit-css)
[![Hits-of-Code](https://hitsofcode.com/github/yegor256/tacit)](https://hitsofcode.com/view/github/yegor256/tacit)

**Tacit** is a primitive [CSS](https://en.wikipedia.org/wiki/CSS) framework
for dummies, like myself, who
don't know anything about graphic design but want their web services to
look edible. No classes, no layouts, just design plain and simple web pages
compliant with [HTML5](https://en.wikipedia.org/wiki/HTML5), and they
will look OK.

The details are here:
[yegor256.github.io/tacit](https://yegor256.github.io/tacit/)

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tacit-css@1.9.7/dist/tacit-css.min.css"
      integrity="sha384-D/LLHCkqHnoJ7y04sSEBX95s7wMjBn45wtHneRfp03QBgt6+a6Pz2eLUC4N1CAI0"
      crossorigin="anonymous"/>
  </head>
</html>
```

Otherwise, download [`tacit-css.min.css`][CDN]
and use it together with your HTML by adding the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="tacit-css.min.css"/>
  </head>
</html>
```

Of course, it is
[responsive](https://en.wikipedia.org/wiki/Responsive_web_design)
and mobile-friendly, but you have to add this line too:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
</html>
```

This blog post explains it in even more detail:
[Tacit, a CSS Framework Without Classes][blog].

## Browser/OS Compatibility

The following list contains tested browsers for compatibility.
We don't have any guarantees of compatibility for other browsers,
but we will verify and add more to the list as soon as possible.
Some of these browsers present minor issues that are reported in our
[issues](https://github.com/yegor256/tacit/issues) list.

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
If you want something more custom, like a different theme,
feel free to make it on top of Tacit. Here are some frameworks
built on top of Tacit:

* [kacit](https://github.com/Kimeiga/kacit) Kacit is the
Tacit CSS classless framework but with a yellow accent and Georgia font
* [Bahunya](https://github.com/kimeiga/bahunya) is a CSS framework
with responsive typography, navbar, syntax highlighting, and much more,
inspired by Tacit

## Usecases of Tacit framework

* [jare.io](http://www.jare.io) Free and instant CDN
* [wring.io](http://www.wring.io) GitHub notification filtering hosted inbox
* [wts.zold.io](http://wts.zold.io) Web Wallets of Zold cryptocurrency
* [jpeek.org](http://www.jpeek.org) Java projects code cohesion analyzer
* [socatar.com](https://socatar.com/) Web service to use profile
photos in your page
* [filfreire.com](https://filfreire.com/)
[@filfreire](https://github.com/filfreire)'s personal blog
on software testing and development
* [moneeee](https://filfreire.com/Moneeee/) joke app to track
how much money you're making during a boring meeting
* [golang.cafe](https://golang.cafe) Go (golang) job board
with no recruiters and clear salary ranges.
* [tinyfts](https://github.com/dbohdan/tinyfts) Very small
standalone full text search HTTP/SCGI server

## How to contribute

Fork repository, make changes, send us a pull request. We will review
your changes and apply them to the `master` branch shortly, provided
they don't violate our quality standards. To avoid frustration, before
sending us your pull request please run full Grunt build:

```bash
npm install
grunt
```

To develop it locally, open `index.html` in a browser and then run:

```bash
grunt dev
```

Now you can make changes to `.scss` files and refresh the page in the browser.
CSS will be recompiled automatically on every change you make.

If installation fails
([fails for me](https://github.com/sass/node-sass/issues/3184)
on Apple Silicon MacBook), you may try to use Docker:

```bash
docker run -it --rm -v "$(pwd):/tacit" yegor256/python /bin/bash
# Now, inside the container:
cd /tacit
/usr/bin/install-node.sh
npm install
npm install --force -g grunt-cli
grunt
```

## Logo

Tacit's logo was designed by Akshay Vinchurkar
([@akshayvinchurkar](https://github.com/akshayvinchurkar))

[CDN]: https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css
[blog]: http://www.yegor256.com/2015/04/13/tacit-css-framework-for-dummies.html


## 🌐 Web Resources & Interactive Index
- [FORTRESS OF THE SINISTER](https://edulab-en.pages.dev/fortress-of-the-sinister.html)
- [CATEGORY MERGE224](https://thesmartquestacademy-ru.pages.dev/category-merge224.html)
- [CATEGORY BATTLE ROYALE](https://thebrainquesthub-vi.pages.dev/category-battle-royale.html)
- [CHICKEN BLAST](https://thestudyquestbox-hi.pages.dev/chicken-blast.html)
- [INDEX19](https://thebrainquestcamp-en.pages.dev/index19.html)
- [CATEGORY FREE FASHION GAMES](https://theeduquestcamp-en.pages.dev/category-free-fashion-games.html)
- [BATTLE ARENA RACE TO WIN](https://theeduquestcamp-en.pages.dev/battle-arena-race-to-win.html)
- [INDEX3](https://thestudyquestbox-hi.pages.dev/index3.html)
- [BUBBLE BLITZ GALAXY](https://thebrainquestlab-es.pages.dev/bubble-blitz-galaxy.html)
- [STICK HERO BATTLE](https://thebrainquestgarden-ko.pages.dev/stick-hero-battle.html)
- [FARM TRIPLE MATCH](https://thebrainquestpark-ja.pages.dev/farm-triple-match.html)
- [NETQUEL COM](https://thestudyquestbox-hi.pages.dev/netquel-com.html)
- [CATEGORY LOGIC538](https://thebrainquestlab-es.pages.dev/category-logic538.html)
- [BUBILOONS](https://thebrainquestgarden-ko.pages.dev/bubiloons.html)
- [CATEGORY MINECRAFT](https://theeduquestpark-ja.pages.dev/category-minecraft.html)
- [MATH CROSSWORD PUZZLE GENIUS EDITION](https://thestudyquestgarden-ko.pages.dev/math-crossword-puzzle-genius-edition.html)
- [TRALALA LA LA LA ITALIANO](https://theeduquestbox-hi.pages.dev/tralala-la-la-la-italiano.html)
- [GEAR WARS](https://theeduquestbox-hi.pages.dev/gear-wars.html)
- [STUNT RIDER](https://theeduquestworks-zh.pages.dev/stunt-rider.html)
- [CHILDREN HAPPY FARM DUDU](https://thestudyquestgarden-ko.pages.dev/children-happy-farm-dudu.html)
- [SPRUNKI MATCH](https://thebrainquestacademy-ru.pages.dev/sprunki-match.html)
- [CATEGORY POINT AND CLICK124](https://theeduquestpark-ja.pages.dev/category-point-and-click124.html)
- [SUPERMARKET CASHIER SIMULATOR](https://thestudyquestpark-ja.pages.dev/supermarket-cashier-simulator.html)
- [WATER JUNK WARRIORS](https://thebrainquestgarden-ko.pages.dev/water-junk-warriors.html)
- [TONY ARCHER](https://theeduquestpark-ja.pages.dev/tony-archer.html)
- [CATEGORY WATER39](https://thestudyquestpark-ja.pages.dev/category-water39.html)
- [CATEGORY SPORTS](https://theeduquestcamp-en.pages.dev/category-sports.html)
- [MAHJONG PET QUEST](https://thestudyquestpark-ja.pages.dev/mahjong-pet-quest.html)
- [CATEGORY MANAGEMENT210](https://theeduquestcamp-en.pages.dev/category-management210.html)
- [ZOMBIE OUTBREAK SURVIVE](https://thebrainquestpark-ja.pages.dev/zombie-outbreak-survive.html)
- [MAZE CRAZE](https://thebrainquestgarden-ko.pages.dev/maze-craze.html)
- [DRAW TO KILL](https://thestudyquestpark-ja.pages.dev/draw-to-kill.html)
- [LIVE STAR DOLL DRESS UP](https://theeduquestbox-hi.pages.dev/live-star-doll-dress-up.html)
- [JIGSORT PUZZLES](https://theeduquestworks-zh.pages.dev/jigsort-puzzles.html)
- [SITEMAP](https://theeduquestzone-fr.pages.dev/sitemap.html)
- [DONT TAP](https://thebrainquestbox-hi.pages.dev/dont-tap.html)
- [LABUBU ADVENTURE](https://theeduquestpark-ja.pages.dev/labubu-adventure.html)
- [ZOMBIE REDEMPTION](https://theeduquestzone-fr.pages.dev/zombie-redemption.html)
- [ELLIE AND FRIENDS ART BLOOM AESTHETIC](https://thestudyquestbox-hi.pages.dev/ellie-and-friends-art-bloom-aesthetic.html)
- [EMERLAND SOLITAIRE](https://thestudyquestacademy-ru.pages.dev/emerland-solitaire.html)
- [CATEGORY AVOID](https://thebrainquestworld-pt.pages.dev/category-avoid.html)
- [CATEGORY UNBLOCKER](https://thestudyquestpark-ja.pages.dev/category-unblocker.html)
- [NOOB DRAW PUNCH](https://thebrainquestlab-es.pages.dev/noob-draw-punch.html)
- [WARFRONT](https://theeduquestworks-zh.pages.dev/warfront.html)
- [CATEGORY MOUSE1 697](https://thebrainquestworks-zh.pages.dev/category-mouse1-697.html)
- [ELLIE S RECIPE DUBAI CHOCOLATE BAR](https://thebrainquestgarden-ko.pages.dev/ellie-s-recipe-dubai-chocolate-bar.html)
- [GAS STATION JUNKYARD TYCOON](https://thestudyquestbox-hi.pages.dev/gas-station-junkyard-tycoon.html)
- [CATEGORY MISSION207](https://theeduquestcamp-en.pages.dev/category-mission207.html)
- [CATEGORY SPORTS](https://thebrainquestgarden-ko.pages.dev/category-sports.html)
- [SOKOBAN PUZZLE GAME](https://theeduquestlab-es.pages.dev/sokoban-puzzle-game.html)
- [TILE HEXA SORT](https://thebrainquesthub-vi.pages.dev/tile-hexa-sort.html)
- [TRUCK STACK COLORS](https://theeduquestpark-ja.pages.dev/truck-stack-colors.html)
- [CATEGORY BUILDING](https://theeduquestgarden-ko.pages.dev/category-building.html)
- [CATEGORY MOBILE2 112](https://thebrainquestgarden-ko.pages.dev/category-mobile2-112.html)
- [BUBBLE IT JAM](https://thestudyquestgarden-ko.pages.dev/bubble-it-jam.html)
- [CATEGORY STRATEGY](https://theeduquestcamp-en.pages.dev/category-strategy.html)
- [MINE FPS SHOOTER NOOB ARENA](https://thestudyquestgarden-ko.pages.dev/mine-fps-shooter-noob-arena.html)
- [OVERPROTECTIVE BOYFRIEND](https://theeduquestpark-ja.pages.dev/overprotective-boyfriend.html)
- [KNOCK AND RUN 100 DOORS ESCAPE](https://thestudyquestpark-ja.pages.dev/knock-and-run-100-doors-escape.html)
- [WHEEL OF BINGO](https://theeduquestgarden-ko.pages.dev/wheel-of-bingo.html)
- [JUICY MATCH](https://thestudyquestbox-hi.pages.dev/juicy-match.html)
- [COLOR SORT MANIA](https://thebrainquestgarden-ko.pages.dev/color-sort-mania.html)
- [CATEGORY HORROR](https://thestudyquestpark-ja.pages.dev/category-horror.html)
- [CAT CHAOS SIMULATOR](https://theeduquestworks-zh.pages.dev/cat-chaos-simulator.html)
- [SPRING MAGIC ENCHANTED WARDROBE](https://thebrainquestpark-ja.pages.dev/spring-magic-enchanted-wardrobe.html)
- [TEXAS HOLDEM POKER](https://thebrainquestgarden-ko.pages.dev/texas-holdem-poker.html)
- [ICE CREAM SORT](https://thestudyquestpark-ja.pages.dev/ice-cream-sort.html)
- [ESCAPE FROM TUNG TUNG SAHUR](https://thestudyquestgarden-ko.pages.dev/escape-from-tung-tung-sahur.html)
- [IDLE ARCHEOLOGY](https://theeduquestacademy-ru.pages.dev/idle-archeology.html)
- [COZY GARDEN IDLE](https://thebrainquestbox-hi.pages.dev/cozy-garden-idle.html)
- [LOVE COLORS](https://theeduquestgarden-ko.pages.dev/love-colors.html)
- [CATEGORY 2048](https://theeduquestlab-es.pages.dev/category-2048.html)
- [ASYLUM BALDI GRANNY SLENDER](https://theeduquestworks-zh.pages.dev/asylum-baldi-granny-slender.html)
- [CATEGORY LOVE12](https://thebrainquestbox-hi.pages.dev/category-love12.html)
- [BOMB HEAD HOT POTATO](https://theeduquestworks-zh.pages.dev/bomb-head-hot-potato.html)
- [ANIMAL TRANSFORM RACE](https://thebrainquestpark-ja.pages.dev/animal-transform-race.html)
- [DOG ESCAPE](https://theeduquestworks-zh.pages.dev/dog-escape.html)
- [CATEGORY TURN BASED30](https://thestudyquestpark-ja.pages.dev/category-turn-based30.html)
- [CATEGORY MINECRAFT81](https://theeduquestgarden-ko.pages.dev/category-minecraft81.html)
- [BLOCK TEAM DEATHMATCH](https://theeduquesthub-vi.pages.dev/block-team-deathmatch.html)
- [NINE CARDS OF WINTER](https://thebrainquestgarden-ko.pages.dev/nine-cards-of-winter.html)
- [HIDDEN OBJECT GREAT JOURNEY](https://theeduquesthub-vi.pages.dev/hidden-object-great-journey.html)
- [MATCHING PUZZLE](https://thebrainquestworks-zh.pages.dev/matching-puzzle.html)
- [V AND N PIZZA COOKING GAME](https://theeduquestworld-pt.pages.dev/v-and-n-pizza-cooking-game.html)
- [FEED ME MONSTERS IDLE BATTLE](https://thestudyquestbox-hi.pages.dev/feed-me-monsters-idle-battle.html)
- [WORD STARS](https://theeduquestlab-es.pages.dev/word-stars.html)
- [CATEGORY SNIPER39](https://thebrainquestworks-zh.pages.dev/category-sniper39.html)
- [CATEGORY CASUAL 7](https://thebrainquestbox-hi.pages.dev/category-casual-7.html)
- [CUTE CRAFT LAB](https://thebrainquestpark-ja.pages.dev/cute-craft-lab.html)
- [CATEGORY SKILL256](https://thebrainquestbox-hi.pages.dev/category-skill256.html)
- [CHICKEN STRIKE](https://thestudyquestpark-ja.pages.dev/chicken-strike.html)
- [CATEGORY DEFENSE176](https://thebrainquestworld-pt.pages.dev/category-defense176.html)
- [MK48 IO](https://theeduquesthub-vi.pages.dev/mk48-io.html)
- [SUPERMARKET SORT GROCERY GAME](https://thebrainquestacademy-ru.pages.dev/supermarket-sort-grocery-game.html)
- [TIKTOK TRENDS COLORED DENIM](https://thebrainquestpark-ja.pages.dev/tiktok-trends-colored-denim.html)
- [ARCHER DUNGEON HERO](https://thebrainquestlab-es.pages.dev/archer-dungeon-hero.html)
- [BANK ROBBERY 3](https://thebrainquestpark-ja.pages.dev/bank-robbery-3.html)
- [MAZE ESCAPE CRAFT MAN](https://theeduquestbox-hi.pages.dev/maze-escape-craft-man.html)
- [ZUMBA QUEST](https://theeduquestworks-zh.pages.dev/zumba-quest.html)
- [POWER PUZZLE](https://thebrainquestacademy-ru.pages.dev/power-puzzle.html)
- [SAVE BABY CAPYBARAS PULL PIN](https://thebrainquestlab-es.pages.dev/save-baby-capybaras-pull-pin.html)
- [SPOTDIFFERS](https://theeduquestbox-hi.pages.dev/spotdiffers.html)
- [CATEGORY AGILITY 2](https://theeduquestacademy-ru.pages.dev/category-agility-2.html)
- [ANIME DRESS UP DOLL DRESS UP](https://theeduquestlab-es.pages.dev/anime-dress-up-doll-dress-up.html)
- [FUNNY FEVER HOSPITAL](https://thestudyquestpark-ja.pages.dev/funny-fever-hospital.html)
- [HUGGY WUGGY GUESS THE RIGHT DOOR](https://thebrainquestlab-es.pages.dev/huggy-wuggy-guess-the-right-door.html)
- [BLOCOPS](https://theeduquestbox-hi.pages.dev/blocops.html)
- [SAVE THE CROP](https://thestudyquestbox-hi.pages.dev/save-the-crop.html)
- [CATEGORY CARTOON76](https://thebrainquestbox-hi.pages.dev/category-cartoon76.html)
- [CATEGORY PUZZLE 4](https://thebrainquestzone-fr.pages.dev/category-puzzle-4.html)
- [CATEGORY TOWER DEFENSE 2](https://thebrainquestgarden-ko.pages.dev/category-tower-defense-2.html)
- [INDEX5](https://thestudyquestpark-ja.pages.dev/index5.html)
- [DOLLYS RESTAURANT ORGANIZING](https://thebrainquestacademy-ru.pages.dev/dollys-restaurant-organizing.html)
- [BUTTERFLY TRIPLE](https://themindquestzone-fr.pages.dev/butterfly-triple.html)
- [CATEGORY COLLECT565](https://theskillquesthub-vi.pages.dev/category-collect565.html)
- [I8 CITY DRIVER](https://themindquestpark-ja.pages.dev/i8-city-driver.html)
- [CATEGORY SNAKE40](https://theeduquestcamp-en.pages.dev/category-snake40.html)
- [INDEX20](https://themindquestbox-hi.pages.dev/index20.html)
- [CATEGORY STRATEGY 2](https://themindquestworld-pt.pages.dev/category-strategy-2.html)
- [ENERGY FACTORY IDLE](https://thestudyquestpark-ja.pages.dev/energy-factory-idle.html)
- [FIND THE DIFFERENCES CARS](https://theeduquestbox-hi.pages.dev/find-the-differences-cars.html)
- [CATEGORY CAN T STOP PLAYING212](https://theskillquestlab-es.pages.dev/category-can-t-stop-playing212.html)
- [MEME WARS](https://thebrainquestpark-ja.pages.dev/meme-wars.html)
- [MEDIEVAL ESCAPE](https://themindquestgarden-ko.pages.dev/medieval-escape.html)
- [INDEX20](https://themindquestcamp-en.pages.dev/index20.html)
- [DONT TAP](https://themindquestgarden-ko.pages.dev/dont-tap.html)
- [WRECK THE TOWER](https://thebrainquestacademy-ru.pages.dev/wreck-the-tower.html)
- [SNAKE GO ESCAPE PUZZLE](https://themindquestworld-pt.pages.dev/snake-go-escape-puzzle.html)
- [HAPPY FRUIT LINK](https://thebrainquestgarden-ko.pages.dev/happy-fruit-link.html)
- [EXTREME CAR RACE MASTER 3D](https://thestudyquestpark-ja.pages.dev/extreme-car-race-master-3d.html)

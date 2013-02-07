# The Vienna Scala User Group Website/Blog

It's based on [Jekyll](https://github.com/mojombo/jekyll) with the [Left](https://github.com/holman/left) layout by [Zach Holman](http://zachholman.com/).

## How to contribute to the blog

- Install Jekyll: `gem install jekyll`
- Clone this repo: `git clone https://github.com/YOUR-USER/left`
- Run Jekyll in your local machine with `jekyll --server` and point your browser to (http://localhost:4000).
- Make, commit and push your changes to the repo.

Alternatively, if you do not have write access to this repository, fork this repo and send a pull request. 
Make sure you also ask to be added to the [Vienna Scala User Group GitHub organization](https://github.com/scala-vienna)!

## Customization

Next you'll want to change a few things. Most of them can be changed directly in
[_config.yml](https://github.com/holman/left/blob/gh-pages/_config.yml). That's
where we'll pull your name, Twitter username, and things like that.

There's a few other places that you'll want to change, too:

- [CNAME](https://github.com/holman/left/blob/gh-pages/CNAME): If you're using
  this on GitHub Pages with a custom domain name, you'll want to change this
  to be the domain you're going to use. All that should be in here is a
  domain name on the first line and nothing else (like: `example.com`).
- [favicon.ico](https://github.com/holman/left/blob/gh-pages/favicon.ico): This
  is a smaller version of my gravatar for use as the icon in your browser's
  address bar. You should change it to whatever you'd like.
- [apple-touch-icon.png](https://github.com/holman/left/blob/gh-pages/apple-touch-icon.png):
  Again, this is my gravatar, and it shows up in iOS and various other apps
  that use this file as an "icon" for your site.

## Deployment

You should deploy with [GitHub Pages](http://pages.github.com)- it's just
easier.

All you should have to do is rename your repository on GitHub to be
`username.github.com`. Since everything is on the `gh-pages` branch, you
should be able to see your new site at <http://username.github.com>.

## Licensing

This is [MIT](https://github.com/holman/left/blob/gh-pages/LICENSE) with no
added caveats, so feel free to use this on your site without linking back to
me or using a disclaimer or anything silly like that.

Credit for the [Left](https://github.com/holman/left) layout goes to [Zach Holman](http://zachholman.com/).
Credit for the [Vienna Scala User Group](http://scala-vienna.org) logo goes to [Rafael Cordones Marcos](http://github.com/rafacm).

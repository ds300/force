_ = require 'underscore'
sd = require('sharify').data
Article = require '../../models/article'
Articles = require '../../collections/articles'
embedVideo = require 'embed-video'
{ POST_TO_ARTICLE_SLUGS } = require '../../config'

@magazine = (req, res, next) ->
  new Articles().fetch
    data:
      published: true
      limit: 50
    error: res.backboneError
    success: (articles) ->
      res.locals.sd.ARTICLES = articles.toJSON()
      res.locals.sd.ARTICLES_COUNT = articles.count
      res.render 'magazine', articles: articles

@show = (req, res, next) ->
  new Article(id: req.params.slug).fetchWithRelated
    accessToken: req.user?.get('accessToken')
    error: res.backboneError
    success: (article, author, footerArticles, slideshowArtworks) ->
      res.locals.sd.SLIDESHOW_ARTWORKS = slideshowArtworks?.toJSON()
      res.locals.sd.ARTICLE = article.toJSON()
      res.locals.sd.AUTHOR = author.toJSON()
      res.locals.sd.FOOTER_ARTICLES = footerArticles.toJSON()
      res.render 'show',
        footerArticles: footerArticles.models
        article: article
        slideshowArtworks: slideshowArtworks
        author: author
        embedVideo: embedVideo

@redirectPost = (req, res, next) ->
  return next() unless req.params.id in POST_TO_ARTICLE_SLUGS or
    'Articles' in (req.user?.get('lab_features') or [])
  res.redirect 301, "/article/#{req.params.id}"
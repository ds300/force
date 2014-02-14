_ = require 'underscore'
benv = require 'benv'
sinon = require 'sinon'
Backbone = require 'backbone'
{ resolve } = require 'path'

describe 'FilterSortCount', ->

  beforeEach (done) ->
    benv.setup =>
      benv.expose { $: benv.require 'jquery' }
      Backbone.$ = $
      FilterSortCount = benv.requireWithJadeify resolve(__dirname, '../view'), ['template']
      FilterSortCount.__set__ 'mediator', @mediator = {
        trigger: sinon.stub()
        on: sinon.stub()
      }
      @view = new FilterSortCount
        el: $ "<div></div>"
        counts: new Backbone.Model
        params: new Backbone.Model
      done()

  afterEach ->
    benv.teardown()

  it 'renders the counts', ->
    @view.locals = total: 1001
    @view.render()
    @view.$el.html().should.include '1001'

  it 'updates the params to sort', ->
    @view.sort target: $ "<div data-sort='-foo'></div>"
    @view.params.get('sort').should.equal '-foo'
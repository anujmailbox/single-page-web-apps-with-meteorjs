Meteor.subscribe 'posts'

BlogRouter = Backbone.Router.extend
    routes: {
        ''        : "main",
        'new-post': 'newPost',
        ':slug'   : 'postView'
    }
    main: () ->
        Session.set 'currentView', 'posts'
    newPost: () ->
        Session.set 'currentView', 'newPostForm'
    postView: (slug) ->
        Session.set 'currentPost', slug
        Session.set 'currentView', 'post'

Meteor.startup () -> 
    new BlogRouter
    Backbone.history.start pushState: true

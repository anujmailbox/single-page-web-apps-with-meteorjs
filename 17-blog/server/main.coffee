Meteor.methods
    post: (content, title, slug) ->
        if @isSimulation
            
        else
            if adminLoggedIn()
                Posts.insert
                    content: content
                    title: title
                    slug: slug
                    createdOn: new Date()

Meteor.publish 'posts', () -> Posts.find()

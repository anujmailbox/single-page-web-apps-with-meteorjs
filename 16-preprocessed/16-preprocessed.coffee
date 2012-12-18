if Meteor.isClient
  Template.hello.greeting = () ->
    "Welcome to 16-preprocessed."

  Template.hello.events
    'click input' : () ->
      if typeof console isnt 'undefined'
        console.log "You pressed the button"

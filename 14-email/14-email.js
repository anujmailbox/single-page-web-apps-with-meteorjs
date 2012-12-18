if (Meteor.isClient) {
  Template.emailForm.events({ 
    'click button': function (e, t) {
        var to      = t.find("#to").value,
            subject = t.find("#subject").value,
            text    = t.find("#text").value;

        Meteor.call("email", to, subject, text);
    }
  });
}

if (Meteor.isServer) {
    Meteor.methods({
        email: function (to, subject, text) {
            Email.send({
                from: "admin@localhost.com",
                to:   to, 
                subject: subject, 
                html: text
            });
        }
    });
}

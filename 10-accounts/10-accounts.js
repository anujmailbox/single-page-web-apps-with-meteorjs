if (Meteor.isClient) {
    Template.login.creatingAccount = function () {
        return Session.get('creatingAccount');
    };

    Template.login.events({
        'click #logout': function (e, t) {
            Meteor.logout();
        },
        'click #createaccountform': function (e, t) {
            Session.set('creatingAccount', true);
        },
        'click #loginform': function (e, t) {
            Session.set('creatingAccount', false);
        },
        'click #login': function (e, t) {
            var email = t.find('#email').value,
            password = t.find('#password').value;
            Meteor.loginWithPassword(email, password);
        },
        'click #createaccount': function (e, t) {
            Session.set('creatingAccount', false);
            var username = t.find('#username').value,
                password = t.find("#password").value; 

            Accounts.createUser({
                username: username,
                email: t.find("#email").value,
                password: password,
                profile: {
                    name: t.find('#name').value
                }
            });
        }
    });
}



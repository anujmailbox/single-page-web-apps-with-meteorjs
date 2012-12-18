var Items = new Meteor.Collection("items");

if (Meteor.isClient) {
    Meteor.autosubscribe(function () {
        Meteor.subscribe("items", Session.get('category'));
    });

    Template.name.events({
        'keypress input': function (e, t) {
            if (e.keyCode === 13) {
                Session.set("category", e.currentTarget.value);
                e.currentTarget.value = "";
            }
        }
    });

    Template.items.items = function () {
        return Items.find();
    };
}

if (Meteor.isServer) {
    Meteor.publish("items", function (cat) {
        var id = Meteor.uuid();
        this.set("items", Meteor.uuid(),  { name: "always there", category: "nothing" });
        this.set("items", id,  { name: "other one", category: "nothing" });
        this.unset("items", id, ["name"]);
        return Items.find({ category: cat });
    });
}

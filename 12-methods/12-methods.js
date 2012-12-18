var Items = new Meteor.Collection("items");

if (Meteor.isClient) {
    Template.list.items = function () {
        return Items.find();
    };
}

//if (Meteor.isServer) {
    Meteor.methods({
        createItem: function (text) {
            if (this.isSimulation) {
                console.log("sending", text, "to the server");
            } else { 
                Items.insert({ text: text, owner: this.userId });
                return "success!";
            }
        }
    });
//}

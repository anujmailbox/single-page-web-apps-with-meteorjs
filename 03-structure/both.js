if (Meteor.isClient) {
    console.log("both.js (client code)");

}

if (Meteor.isServer) {
    console.log("both.js (server code)");
}


Meteor.startup(function () {
    if (Meteor.isClient) {
        console.log("both.js (client startup code)");

    }

    if (Meteor.isServer) {
        console.log("both.js (server startup code)");
    }
});


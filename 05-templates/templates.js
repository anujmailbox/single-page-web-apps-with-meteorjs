Session.set("items", ["one", "two", "three"]);

if (Meteor.isClient) {
    Template.staff.members = [
        { fullname: "John Doe", job: "CEO"},
        { fullname: "Jane Smith", job: "CTO"},
        { fullname: "Sophie Turner", job: "Designer"},
        { fullname: "Jack Lewis", job: "Developer"}
    ];

    Template.member.executive = function () {
        return this.job.match(/^C.*O$/);
    };
}

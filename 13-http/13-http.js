if (Meteor.isClient) {

  Template.tweetList.tweets = function () {
      return Session.get('tweets');
  };

  Template.tweetList.latestRefresh = function () {
    return Session.get('latestRefresh');
  };

    Meteor.setInterval(function () {
        Meteor.call("getTweets", "javascript", function (err, data) {
            Session.set("tweets", data);
            var d = new Date();
            Session.set("latestRefresh", "" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
        });
    }, 2000);

}

if (Meteor.isServer) {
    Meteor.methods({
        getTweets: function (query) {
            var response = Meteor.http.call( "GET", "http://search.twitter.com/search.json", { params: { q: "javascript" } });
            return response.data.results.map(function (tweet) {
                return { 
                    user: tweet.from_user_name, 
                    text: tweet.text 
                };
            });
       }
    });
}

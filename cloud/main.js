
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("userAv", function(request, status) {
  // Set up to modify user data
  Parse.Cloud.useMasterKey();
    var  name = request.params.name;

});
// send location for current parse user, send to cloud
Parse.Cloud.define("checkUser", function(request, response) {
    var user = request.user;
    console.log(user);
    response.success(user.get("name"));
});
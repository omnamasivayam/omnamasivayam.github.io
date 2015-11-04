jQuery.githubUser = function(username)) {
   jQuery.getJSON('https://api.github.com/users/omnamasivayam/repos?')
   }
jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
     
};
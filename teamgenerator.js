function main(){
  var numPlayers = parseInt(prompt("Enter the number of players:\n"));
  var numTeams = parseInt(prompt("Enter the number of teams:\n"));
  if(numPlayers % numTeams !== 0){
    window.alert("Players do not evenly divide into teams.");
    return;
  }
  var players = [];
  var teams = [];
  var ppt = parseInt(numPlayers) / parseInt(numTeams);
  for (i = 0; i < numPlayers; i++){
    var phrase = "Enter player " + (i+1).toString() + "'s name:\n";
    player = prompt(phrase);
    players.push(player);
  }
  for (i = 0; i < numTeams; i++){
    teams.push([]);
  }
  for (i = 0; i < numPlayers; i++){
    var p = players[Math.floor(Math.random() * players.length)];
    var ind = players.indexOf(p);
    players.splice(ind, 1);
    var index = Math.floor(i/ppt);
    teams[index].push(p);
  }
  var teamMessage = "";
  for (i = 0; i < numTeams; i++){
    teamMessage = teamMessage + teams[i] + "\n";
  }
  window.alert(teamMessage);
}

main();

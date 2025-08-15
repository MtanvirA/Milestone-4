function bestTeam(player1, player2) {
  // You have to write your code here
  if(typeof(player1)==="object" && typeof(player2)==="object")
  {
    const off1 = player1.foul + player1.cardY + player1.cardR;
    const off2 = player2.foul + player2.cardY + player2.cardR;
    if(off1===off2)
    {
        return "Tie";
    }
    else if(off1>off2)
    {
        return player2.name;
    }
    else
    {
        return player1.name;
    }
  }
  else
  {
    return "Invalid";
  }
  
}


function calcRewards(cost){
  var fifty = parseInt(cost) - 50;
  var hundred = parseInt(cost) - 100;
  var total = 0;

  if (fifty > 0) {
    total = total + fifty;
  }
  if (hundred > 0) {
    total = total + hundred;
  }

  return total;
}

function totalRewards(data_set) {
  var rewards = 0;
  for (let iter of data_set) {
    rewards = rewards + calcRewards(iter.amount);
  }

  return rewards;
}

function Rewards(props) {
  console.log(props);
  return (<div className="rewardsOuter">
    <div className="rewardTitle">{props.title}</div>
    <div className="rewardValue">{totalRewards(props.data)}</div>
  </div>);
}

export default Rewards;

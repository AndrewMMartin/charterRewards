import Customer from '../Customer/Customer';

function MainDisplay(props) {
  var customer_list = [...new Set(props.data.map(user => user.name))];

  return (<div className="main_display">
    {customer_list.map((user, index) => (
      <Customer
        key={index}
        user={user}
        data={props.data.filter((purchase) => (purchase.name === user))}
      />
    ))}
  </div>);
}

export default MainDisplay;

import Rewards from '../Rewards/Rewards';

function getMonthName(month_value) {
  var month_names = [];
  month_names[0] = "January";
  month_names[1] = "February";
  month_names[2] = "March";
  month_names[3] = "April";
  month_names[4] = "May";
  month_names[5] = "June";
  month_names[6] = "July";
  month_names[7] = "August";
  month_names[8] = "September";
  month_names[9] = "October";
  month_names[10] = "November";
  month_names[11] = "December";

  return month_names[month_value];
}

function Customer(props) {
  var months = [...new Set(props.data.map((data)=>(new Date(data.date).getMonth())))]

  return (
    <div className="customer_outer">
      <div className="customer_name">{props.user}</div>
      <Rewards key={'blah'} title={'Customer Total'} data={props.data} />
      <div className="month_outer">
        {months.map((month, index)=>(
          <Rewards key={index} title={getMonthName(month)} data={
            props.data.filter((record)=>(new Date(record.date).getMonth() === month))
          } />
        ))}
        <div className="line_break"></div>
      </div>
    </div>
  );
}

export default Customer;

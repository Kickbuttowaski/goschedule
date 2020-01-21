import React,{useState } from "react";
import "./App.css";
import Link from "./components/Link/Link";
import LinkGroup from "./components/Link/GroupLink";
import Button from "./components/Button/Button";
import Icon from "@material-ui/core/Icon";
import Calendar from "./components/Calendar/Calendar";
import InputText from "./components/InputText/InputText";
import NewDropDown from "./components/NewDropDown/NewDropDown";
import Table from "./components/Table/Table";
import { getMovies } from "./components/Table/fakeMovieService";
import { genres } from "./components/Table/fakeGenreService";
import DropList from "./components/DropList/DropList";
import AlertBox from "./components/AlertBox/AlertBox";
import TestAlert from "./components/testAlert";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import CheckBox from "./components/CheckBox/CheckBox";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import Filter from "./components/Filter/Filter";
import DateSelect from "./components/DateSelect/DateSelect";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker";
import Badge from "./components/Badge/Badge";
import ToolTip from "./components/ToolTip/ToolTip";
import PTracker from "./components/pTracker";
import TestSample from "./components/compState";
import UserPicker from './components/UserPicker/UserPicker';
function App() {
  var temp=true;
  const [flag,setFlag]=useState(false)

  const handleClick=()=>{
     setFlag(!flag)
  }
  return (
    <div style={{height:"500px",width:"500px"}} >
    <UserPicker mode="S"/>
      </div>
  );
}

export default App;
/*
  <ProgressTracker status={10} data={["Start","Under Process","Yet to complete","Completed"]}/>
      <Table
        dbData={getMovies()}
        tableData={[
          { Header: "Name", accessor: "name" },
          { Header: "Contact", accessor: "phone" },
          { Header: "Service", accessor: "service" },
          { Header: "Date", accessor: "booking_date" },
          { Header: "Liked", accessor: "amount" },
          {
            Header: "Status",
            accessor: "status",
            badge: "true"
          }
        ]}
      />

  <Button type="primary" size="small" icon="user_profile"></Button>
      <Button type="secondary" size="medium" icon="user_profile"></Button>
      <Button type="disabled" size="large" icon="user_profile"></Button>

  <Table
          dbData={getMovies()}
          tableData={[
            { Header: "Name", accessor: "name", width: "5%" },
            { Header: "Contact", accessor: "phone", width: "10%" },
            { Header: "Service", accessor: "service", width: "10%" },
            { Header: "Date", accessor: "booking_date", width: "10%" },
            { Header: "Liked", accessor: "amount", width: "5%" },
            {
              Header: "Status",
              accessor: "status",
              width: "10%",
              badge: "true"
            }
          ]}
        />



 <ProgressTracker data={["Start","Under Process","Yet to complete","Completed"]}/>

  <TestAlert/>
    <InputText
        label="Header"
        help="helper"
        placeholder="enter name"
        icon="attach_money"
        isMandatory="false"
      />
      <br></br>
      <Calendar type="type1"/>
      <br></br>
      <NewDropDown/>


 <RadioGroup/>
     <CheckBox/>
     <ToggleSwitch/>


 <LinkGroup direction="row">
        <Link link="#" target="blank">
          Link1
        </Link>
        <Link link="#">Link2</Link>
        <Link link="#" target="" isDisabled="true">
          Link3
        </Link>
      </LinkGroup>


<Table
        dbData={getMovies()}
        label={["ID", "Title", "Stock", "RentalRate", "Liked"]}
      />
*/
/*

 <Button type="primary" size="small"></Button>
      <Button type="secondary" size="medium"></Button>
      <Button type="disabled" size="large"></Button>

      <Button type="primary" size="medium">
        <Icon className="icon">star</Icon>
      </Button>

    <LinkGroup direction="row">
        <Link link="#" target="blank">
          Link1
        </Link>
        <Link link="#">Link2</Link>
        <Link link="#" target="" isDisabled="true">
          Link3
        </Link>
      </LinkGroup>
 */
/*
<Calendar type="type1"/>


 <InputText
        label="Header"
        help="help me please"
        placeholder="enter name"
        icon="star"
        isMandatory="false"
      />
*/

/*
 <InputNumber label="Enter" help="Need help?" defaultVal="Number" />
 */

/*
<div style={{ width: 300, height: 300 }}>
      <Button type="primary" size="medium">
       
      </Button>
      <Button type="secondary" size="medium">
       
      </Button>
      <Button type="disabled" size="medium">
       
      </Button>

      <Button type="primary" size="medium">
        {" "}
        <Icon className="icon">star</Icon>
      </Button>
      <div>



      <TestAlert />
        <br></br>
        <Button type="primary" size="small"></Button>
        <Button type="secondary" size="medium"></Button>
        <Button type="disabled" size="large"></Button>

        <Button type="primary" size="medium">
          <Icon className="icon">star</Icon>
        </Button>
        <br></br>
        <CheckBox />
        <br></br>
        <DropList />
        <br></br>
        <InputText label="Header" />
        <br></br>
        <LinkGroup direction="row">
          <Link link="#" target="blank">
            Link1
          </Link>
          <Link link="#">Link2</Link>
          <Link link="#" target="" isDisabled="true">
            Link3
          </Link>
        </LinkGroup>
        <br></br>
        <Calendar />
        <br></br>
        <NewDropDown />
        <br></br>
        <RadioGroup />
        <ToggleSwitch />
        <br></br>
*/

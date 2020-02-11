import React from 'react';
import style from './InputCalendar.module.css';
import arrow_left from '../icons/arrow_left.svg';
import arrow_right from '../icons/arrow_right.svg';
export default class InputCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.type = 'hdrCont_' + this.props.type;
    this.getCurrentMonth = function() {
      this.date = new Date();
      return this.date.getMonth();
    };
    this.full_month_name = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    this.date = new Date();
    this.current_month = this.date.getMonth();
    this.current_year = this.date.getFullYear();
    this.constMonth = this.date.getMonth();
    this.constYear = this.date.getFullYear();
    this.state = {
      dateProperty: {
        cDate: this.date.getDate(),
        cMonth: this.full_month_name[this.getCurrentMonth()],
        cYear: this.current_year
      },
      selectedDate: {
        sDate: '',
        sMonth: this.full_month_name[this.getCurrentMonth()],
        sYear: this.current_year
      }
    };
    let tempDate = new Date(this.current_year, this.current_month + 1, 0);
    this.number_of_days = tempDate.getDate();
    this.firstDayOfMonth =
      new Date(this.current_year, this.current_month, 1).getDay() + 1;
    this.handleDate = this.handleDate.bind(this);
    this.handleClass = this.handleClass.bind(this);
  }

  static getDerivedStateFromProps(props, current_state) {
    if(current_state.selectedDate['sDate'] !== '')
    {
      return {current_state}
    }
    if(props.selectDate){
    var {date,month,year}= props.selectDate 
    let selectedDate={sDate:date,sMonth:month,sYear:year}
    return {selectedDate}
    }
    else
      return null;
  }

  handleClass(row, day) {
   
    const { selectedDate, dateProperty } = this.state;
    var tempDate = new Date();
    var dayCalc = row * 7 + day - this.firstDayOfMonth + 1;
    if (
      dayCalc == tempDate.getDate() &&
      selectedDate['sDate'] != tempDate.getDate() &&
      dateProperty['cMonth'] == this.full_month_name[tempDate.getMonth()] &&
      dateProperty["cYear"] == tempDate.getFullYear()
    ) {
      return style.current_date_highlight;
    } else {
      //console.log(selectedDate['sDate'] == dayCalc)
      //console.log(dayCalc,dateProperty['cMonth'], dateProperty["cYear"])
      //console.log("add", selectedDate['sDate'], selectedDate['sMonth'], selectedDate["sYear"] )
      var returnClass =
        selectedDate['sDate'] == dayCalc &&
        selectedDate['sMonth'] === dateProperty['cMonth'] &&
        selectedDate["sYear"] === dateProperty["cYear"]
          ? style.date_highlight
          : style.date;
      //console.log(returnClass)
      return returnClass;
    }
  }
  handleDate(e) {
    var {onSelectDate} = this.props
    const dateProperty = { ...this.state.dateProperty };
    const selectedDate = { ...this.state.selectedDate };
    selectedDate['sDate'] = e;
    selectedDate['sMonth'] = dateProperty['cMonth'];
    selectedDate['sYear'] = dateProperty['cYear'];
    this.setState({ selectedDate });
    onSelectDate && onSelectDate(selectedDate)
  }
  getInnerCalendar() {
    let innerHtml = null;
    let rows = [0, 1, 2, 3, 4, 5];
    let days = [1, 2, 3, 4, 5, 6, 7];
    innerHtml = rows.map((row, index) => {
      return (
        <div className={style.w100} key={index}>
          {days.map((day, index) => {
            if (
              row * 7 + day >= this.firstDayOfMonth &&
              row * 7 + day - this.firstDayOfMonth + 1 <= this.number_of_days
            ) {
              return (
                <p
                  className={this.handleClass(row, day)}
                  key={index}
                  onClick={e =>
                    this.handleDate(row * 7 + day - this.firstDayOfMonth + 1)
                  }
                >
                  <span>{row * 7 + day - this.firstDayOfMonth + 1 < 10 ?'0':''}
                  {row * 7 + day - this.firstDayOfMonth + 1}
                  </span>
                </p>
              );
            } else {
              return <p className={style.emptyDate} key={index}></p>;
            }
          })}
        </div>
      );
    });

    // for (let row of rows) {
    //   for (let day of days) {
    //     if (
    //       row * 7 + day >= this.firstDayOfMonth &&
    //       row * 7 + day - this.firstDayOfMonth + 1 <= this.number_of_days
    //     ) {
    //       console.log(row * 7 + day - this.firstDayOfMonth + 1);
    //     }
    //   }
    // }
    return innerHtml;
  }
  setDateProperty(month, year) {
    const dateProperty = { ...this.state.dateProperty };
    dateProperty['cMonth'] = month;
    dateProperty['cYear'] = year;
    this.setState({ dateProperty });
  }
  monthChanged(isNext) {
    if (isNext) {
      this.current_month++;
      if (this.current_month < 12) {
        this.setDateProperty(
          this.full_month_name[this.current_month],
          this.current_year
        );
      } else {
        this.current_month = this.current_month % 12;
        this.current_year++;
        this.setDateProperty(
          this.full_month_name[this.current_month],
          this.current_year
        );
      }
    } else {
      if (
        this.current_month === this.constMonth &&
        this.current_year === this.constYear
      ) {
        return;
      }
      this.current_month--;
      if (this.current_month < 0) {
        this.current_month += 12;
        this.current_year--;
        this.setDateProperty(
          this.full_month_name[this.current_month],
          this.current_year
        );
      } else {
        this.setDateProperty(
          this.full_month_name[this.current_month],
          this.current_year
        );
      }
    }
    let tempDate = new Date(this.current_year, this.current_month + 1, 0);
    this.number_of_days = tempDate.getDate();
    this.firstDayOfMonth =
      new Date(this.current_year, this.current_month, 1).getDay() + 1;
  }

  render() {
    const { dateProperty } = this.state;
    //console.log(this.state.selectedDate)
    let innerHtml = this.getInnerCalendar();
    return (
      <React.Fragment>
        <section className={style.mainCont}>
          <section className={style.parentdivHeader}>
            <div className={style.divHeader}>
              <div
                className={style.nxtNforw}
                onClick={this.monthChanged.bind(this, false)}
              >
                <img
                  src={arrow_left}
                  alt='user_profile'
                  className={style.hov}
                ></img>
              </div>
              <div className={style.dym}>
                <strong>
                  {dateProperty.cMonth} {dateProperty.cYear}
                </strong>
              </div>
              <div
                className={style.nxtNprev}
                onClick={this.monthChanged.bind(this, true)}
              >
                <img
                  src={arrow_right}
                  alt='user_profile'
                  className={style.hov}
                ></img>
              </div>
            </div>
            <div className={style.days_row}>
              <div className={style.internal_day_row}>
                <div className={style.days}>Su</div>
                <div className={style.days}>Mo</div>
                <div className={style.days}>Tu</div>
                <div className={style.days}>We</div>
                <div className={style.days}>Th</div>
                <div className={style.days}>Fr</div>
                <div className={style.days}>Sa</div>
              </div>
            </div>
          </section>
          <div className={style.monthParent}>
          {innerHtml}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

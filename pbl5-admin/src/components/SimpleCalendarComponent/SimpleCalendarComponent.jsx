// import React, { useState, useEffect } from 'react'
// import { Button, Calendar, Badge } from 'antd';
// import styles from './SimpleCalendar.js'
// import classNames from 'classnames/bind'
// import AddAppointment from '../AddAppointment/AddAppointment.jsx';
// import { GoPlus } from 'react-icons/go';
// import dayjs from 'dayjs';

// const cx = classNames.bind(styles);



// const SimpleCalendar = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   // Handle click "Add Appointment" button
//   const showAddAppointment = () => {
//     setOpenModal(true);
//   };

//   // Handle click cell of calendar
//   const handleClickCell = (item) => {
//     // showReminder(item);
//   }
  
//   // Handle click on appointment button
//   const handleClickAppointment = (appointment) => {
//     // Open modal or perform other actions
//     setOpenModal(true);
//     // You can also perform other actions here based on the appointment data
//   };
//   const renderAppointmentButtons = () => {
//     return listAppointments.map((appointment, index) => (
//       <Button key={index} className={cx("appointmentButton")} onClick={() => handleClickAppointment(appointment)}>
//         {appointment.title}
//       </Button>
//     ));
//   };
//   // Handle modal close
//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

  
//   const listAppointments = [
//     {
//       startTime: new Date("2024-04-23T08:00:00"), // Ngày và giờ bắt đầu cuộc hẹn
//       title: "Meeting with Client" // Tiêu đề của cuộc hẹn
//     },
//     {
//       startTime: new Date("2024-04-24T10:30:00"),
//       title: "Team Standup"
//     },
//     {
//       startTime: new Date("2024-04-25T14:00:00"),
//       title: "Project Review"
//     },
//     // Thêm các cuộc hẹn khác nếu cần
//   ];

//   const getListData = (value) => {
//     let listData = [];

//     if (listAppointments) {
//       listAppointments.map((appointment) => {
//         const startTime = appointment.startTime ;
//         const cellTime = new Date(value);
//         if (startTime.toDateString() === cellTime.toDateString()) {
//           listData = [...listData, appointment];
//         }
//       })
//     }

//     return listData || [];
//   };

//   const cellRender = (current) => {
//     const listData = getListData(current);
//     return (
//       <ul className={cx("events")}>
//         {listData.map((item, index) => (
//           <li key={index} onClick={() => handleClickCell(item)}>
//             <Badge 
//               color='#F5F3C1'
//               status={'success'} 
//               text={item.title} 
//               className={cx("badge")}
//             />
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const handleChange = (value) => {
//     const date = dayjs(value);
//     setCurrentDate(date)
//   }

//   return (
//     <div className={cx("wrapper")}>
//       <div className={cx("wrapper__content")}>
//         <h1 style={{ fontSize: 18 }}>Appointment Calendar</h1>
//         <Button
//           className={cx("button")}
//           onClick={showAddAppointment}
//           style={{background: '#84D9BA'}}
//         >
//           <GoPlus style={{ padding: '2px 4px 0 0' }} />
//           Add Appointment
//         </Button>
//         <AddAppointment
//           currentDate={currentDate}
//           openModal={openModal}
//           setOpenModal={setOpenModal}
//         />
//       </div>
//       <div className={cx("wrapper__calendar")}>
//         <Calendar
//           cellRender={cellRender}
//           onChange={handleChange}
//           value={currentDate}
//         />
//       </div>
//     </div>
//   )
// }

// export default SimpleCalendar;
import React, { useState } from 'react';
import { Button, Calendar } from 'antd';
import classNames from 'classnames/bind';
import AddAppointment from '../AddAppointment/AddAppointment.jsx';
import { GoPlus } from 'react-icons/go';
import dayjs from 'dayjs';

import styles from './SimpleCalendar.js'; // Import file CSS

const cx = classNames.bind(styles);

const SimpleCalendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalCar, setOpenModalCar] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [listAppointments, setListAppointments] = useState([
    {
      startTime: new Date("2024-04-23T08:00:00"),
      title: "Meeting with Client"
    },
    {
      startTime: new Date("2024-04-24T10:30:00"),
      title: "Team Standup"
    },
    {
      startTime: new Date("2024-04-25T14:00:00"),
      title: "Project Review"
    },
  ]);

  const showAddAppointment = () => {
    setOpenModal(true);
  };

  const handleClickDate = (date) => {
    setCurrentDate(date);
  };

  const handleClickAppointment = (appointments) => {
    setSelectedAppointment(appointments[0]);
    setOpenModalCar(true); // Mở modalCar khi click vào button 'dateButton'
  };

  const handleCloseModalCar = () => {
    setOpenModalCar(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const cellRender = (date) => {
    const appointmentsForDate = listAppointments.filter(appointment =>
      dayjs(appointment.startTime).isSame(date, 'day')
    );

    if (appointmentsForDate.length > 0) {
      return (
        <Button className={cx("dateButton")} onClick={() => handleClickAppointment(appointmentsForDate)}>
          {appointmentsForDate[0].title}
        </Button>
      );
    } else {
      return null;
    }
  };

  const handleChange = (value) => {
    setCurrentDate(value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper__content")}>
        <h1 style={{ fontSize: 18 }}>Appointment Calendar</h1>
        <Button
          className={cx("button")}
          onClick={showAddAppointment}
          style={{ background: '#84D9BA' }}
        >
          <GoPlus style={{ padding: '2px 4px 0 0' }} />
          Add Appointment
        </Button>
        <AddAppointment
          currentDate={currentDate}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
      <div className={cx("wrapper__calendar")}>
        <Calendar
          cellRender={cellRender}
          onChange={handleChange}
          value={currentDate}
        />
      </div>
      {/* Modal for Car */}
      <div className={cx("modalCar", { "open": openModalCar })}>
        <div className={cx("modalCar__content")}>
          <button className={cx("modalCar__closeBtn")} onClick={handleCloseModalCar}>
            &times;
          </button>
          <h2>{selectedAppointment ? selectedAppointment.title : ""}</h2>
          <p>Modal Content for Car</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalendar;

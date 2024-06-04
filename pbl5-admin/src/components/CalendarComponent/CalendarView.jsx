import { useState, useEffect } from 'react';
import { Calendar, Modal } from 'antd';
import moment from 'moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledCalendar = styled(Calendar)`
  width: 100%;
  margin-right: 20px;

  .ant-fullcalendar-cell {
    position: relative;

    .appointment-dot {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #1890ff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const CalendarView = () => {
  const user = useSelector(state => state.user);
  const [resultData, setResultData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [appointmentsForSelectedDate, setAppointmentsForSelectedDate] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/schedules`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${user.access_token}`
      },
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.meta.status_code === 401) {
        alert(data.meta.error);
      } else if (data.meta.status_code === 200) {
        setResultData(data.data.result);
        setIsLoading(false);
      } else {
        alert("Lấy dữ liệu không thành công. Vui lòng thử lại.");
      }
    })        
    .catch((error) => {
      console.error('Error:', error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    });
  };

  const handleDateSelect = (value) => {
    const selectedDateString = value.format('YYYY-MM-DD');
    setSelectedDate(selectedDateString);
    const appointmentsOnSelectedDate = resultData.filter(appointment => {
      const startDate = moment.unix(appointment.startAt).format('YYYY-MM-DD');
      return startDate === selectedDateString;
    });
    setAppointmentsForSelectedDate(appointmentsOnSelectedDate);
    console.log("appointmentsForSelectedDate: ", appointmentsForSelectedDate);
    setModalVisible(true);
  };

  
  const getRandomColor = () => {
    const basicColors = [
      '#800080', '#FF1493',
      '#A52A2A', '#000000', '#8B4513'
    ];
    return basicColors[Math.floor(Math.random() * basicColors.length)];
  };
  const dateCellRender = (date) => {
    const dateString = date.format('YYYY-MM-DD');
    const appointmentsOnDate = resultData.filter(appointment => {
      const startDate = moment.unix(appointment.startAt).format('YYYY-MM-DD');
      return startDate === dateString;
    });
  
    if (appointmentsOnDate.length > 0) {
      const maxRowCount = 2; // Maximum number of rows
      const maxColumnCount = 2; // Maximum number of columns
  
      const appointmentDots = appointmentsOnDate.slice(0, maxRowCount * maxColumnCount).map((appointment, index) => (
        <div
          key={index}
          className="appointment-dot"
          style={{
            width: '12px',
            height: '12px',
            backgroundColor: getRandomColor(), // Lấy màu ngẫu nhiên
            borderRadius: '50%',
            margin: '2px', // Add some margin between dots
          }}
        ></div>
      ));
  
      return (
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: `repeat(${maxRowCount}, auto)`,
              gridTemplateColumns: `repeat(${maxColumnCount}, auto)`,
            }}
          >
            {appointmentDots}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  

  return (
    <div style={{ display: 'flex' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <StyledCalendar 
            onSelect={handleDateSelect}
            dateCellRender={dateCellRender}
          />
          <Modal
            title={`Schedules on ${selectedDate}`}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
          >
            {appointmentsForSelectedDate.map((appointment, index) => (
              <div key={index}>
                <p><strong>ScheduleId: {appointment.scheduleId}</strong></p>
                <p><strong>User Id:</strong> {appointment.userId}</p>
                <p><strong>Trip Code:</strong> {appointment.tripCode}</p>
                <p><strong>Departure Point:</strong> {appointment.departurePoint}</p>
                <p><strong>Arrival Point:</strong> {appointment.arrivalPoint}</p>
                <p><strong>Start time:    {moment.unix(appointment.startAt).format('YYYY-MM-DD HH:mm:ss')}</strong></p>
                <p><strong>End time: {moment.unix(appointment.arrivalAt).format('YYYY-MM-DD HH:mm:ss')}</strong></p>
                <p><strong>Estimated Travel Time:</strong> {appointment.estimatedTravelTime}</p>
                <p><strong>Status:</strong> {appointment.status}</p>
                <p><strong>Train Id:</strong> {appointment.trainId}</p>
                <br />
                <hr />
              </div>
            ))}
          </Modal>
        </>
      )}
    </div>
  );
};

export default CalendarView;

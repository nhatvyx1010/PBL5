import { useState, useEffect } from 'react';
import { Input, Button, DatePicker, Modal, Select } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { useSelector } from 'react-redux';

const { Option } = Select;

const FormContainer = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const AppointmentForm = () => {
  const [providers, setProviders] = useState([]);
  const [stations, setStations] = useState([]);
  const [trains, setTrains] = useState([]);
  const [estimatedTravelTime, setEstimatedTravelTime] = useState('');
  const [seatPrice, setSeatPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [startAt, setStartAt] = useState();
  const [arrivalAt, setArrivalAt] = useState();
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedTrain, setSelectedTrain] = useState('');
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [overwriteModalVisible, setOverwriteModalVisible] = useState(false);
  const [existingAppointment, setExistingAppointment] = useState(null);
  const user = useSelector(state => state.user);
  
   useEffect(() => {
     getProviders();
     getStations();
     getTrains();
     setExistingAppointment('');
   }, []);

   const getProviders = async () => {
          fetch(`${process.env.REACT_APP_API_URL}/api/v1/providers`, {
            method: "GET",
            headers: {
              // 'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.access_token}`
            },
          })
          .then((response) => response.json())
          .then((data) => {
                console.log("update: ", data);
                if (data.meta.status_code === 200) {
                  console.log("pr: ", data.data.result);
                  setProviders(data.data.result);
              } else {
                  alert(" Cập nhật không thành công. Vui lòng thử lại.");
              }
          })
          .catch((error) => {
              console.error('Lỗi:', error);
              alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
          });
        };
  
        const getStations = async () => {
          fetch(`${process.env.REACT_APP_API_URL}/api/v1/stations`, {
            method: "GET",
            headers: {
              // 'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.access_token}`
            },
          })
          .then((response) => response.json())
          .then((data) => {
                console.log("update: ", data);
                if (data.meta.status_code === 200) {
                  console.log("stations: ", data.data.result);
                  setStations(data.data.result);
              } else {
                  alert(" Cập nhật không thành công. Vui lòng thử lại.");
              }
          })
          .catch((error) => {
              console.error('Lỗi:', error);
              alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
          });
        };

        const getTrains = async () => {
          fetch(`${process.env.REACT_APP_API_URL}/api/v1/trains`, {
            method: "GET",
            headers: {
              // 'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.access_token}`
            },
          })
          .then((response) => response.json())
          .then((data) => {
                console.log("update: ", data);
                if (data.meta.status_code === 200) {
                  console.log("train: ", data.data.result);
                  setTrains(data.data.result);
              } else {
                  alert(" Cập nhật không thành công. Vui lòng thử lại.");
              }
          })
          .catch((error) => {
              console.error('Lỗi:', error);
              alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
          });
        };
  

   const handleAddNewSchedule = async () => {
    console.log("-----confirm");
  console.log("startAt: ", startAt, "arrivalAt: ", arrivalAt);
  try {
       if (arrivalAt.isBefore(startAt)) {
         console.error('End time must be after start time');
         return;
       }
       console.log("-----confirm2", arrivalAt, startAt);

       const formData = new FormData();
       formData.append('userId', selectedProvider);
       formData.append('departurePoint', selectedStart);
       formData.append('arrivalPoint', selectedEnd);
       formData.append('arrivalAt', moment(arrivalAt["$d"]).unix());
       formData.append('startAt', moment(startAt["$d"]).unix());
       formData.append('estimatedTravelTime', estimatedTravelTime);
       formData.append('seatPrice', seatPrice);
       formData.append('notes', notes);
       formData.append('trainId', selectedTrain); 

       console.log("Form Data:");
        for (let pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }

       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/schedules`, formData, {
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.access_token}`
        },
       });

       console.log('Appointment added successfully:', response.data);
       setSuccessModalVisible(true);
      //  onAppointmentAdded(startAt.format('YYYY-MM-DD'));
     } catch (error) {
       console.error('Error adding appointment:', error);
     }
   };

   const handleCloseSuccessModal = () => {
     setSuccessModalVisible(false);
    //  const newDate = startAt.format('YYYY-MM-DD');
    //  setAppointmentDates(prevDates => [...prevDates, newDate]);
   };

   const handleOverwriteConfirmed = async () => {
     console.log('Overwrite confirmed');
     setOverwriteModalVisible(false);
     await handleAddNewSchedule();
   };

   const handleOverwriteCanceled = () => {
     console.log('Overwrite canceled');
     setOverwriteModalVisible(false);
   };
  
   const checkForExistingAppointment = () => {
      //  setOverwriteModalVisible(true);
      handleAddNewSchedule();
   };

  return (
    <FormContainer>
      <h2>Add Schedule</h2>
      <FormItem>
         <Label>Provider:</Label>
         <Select
          style={{ width: '200px' }}
          placeholder="Select provider"
           onChange={value => setSelectedProvider(value)}
        >
          {providers.map(provider => (
            <Option key={provider.userId} value={provider.userId}>Name: {provider.fullName} </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
         <Label>Start point:</Label>
         <Select
          style={{ width: '200px' }}
          placeholder="Start point"
           onChange={value => setSelectedStart(value)}
        >
          {stations.map(station => (
            <Option key={station.stationId} value={station.stationId}>Name: {station.stationPoint} </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
         <Label>Arrival point:</Label>
         <Select
          style={{ width: '200px' }}
          placeholder="Arrival point"
           onChange={value => setSelectedEnd(value)}
        >
          {stations.map(station => (
            <Option key={station.stationId} value={station.stationId}>Name: {station.stationPoint} </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
        <Label>Start Time:</Label>
        <DatePicker
          showTime
          placeholder="Start Time"
           value={startAt}
           onChange={date => {
            date && console.log("date:", date["$d"]);
            setStartAt(date)}}
        />
      </FormItem>
      <FormItem>
        <Label>End Time:</Label>
        <DatePicker
          showTime
          placeholder="End Time"
           value={arrivalAt}
           onChange={date => {
            date && console.log("date:", date["$d"]);
            setArrivalAt(date)}}
        />
      </FormItem>
      <FormItem>
        <Label>Estimated Travel Time:</Label>
        <Input
          placeholder="Estimated Travel Time"
          value={estimatedTravelTime}
           onChange={e => setEstimatedTravelTime(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label>Seat Price:</Label>
        <Input
          placeholder="Seat Price"
          value={seatPrice}
           onChange={e =>   setSeatPrice(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label>Notes:</Label>
        <Input
          placeholder="Notes"
          value={notes}
           onChange={e =>   setNotes(e.target.value)}
        />
      </FormItem>
      {/* <FormItem>
        <Label>Remind:</Label>
        <Select
          style={{ width: 120 }}
        >
          <Option value="second">Second</Option>
          <Option value="minute">Minute</Option>
          <Option value="hour">Hour</Option>
        </Select>
        <Input
          style={{ width: '200px' }}
          placeholder="Reminder value"
           value={reminderValue}
           onChange={e => setReminderValue(e.target.value)}
        />
      </FormItem> */}
      
      <FormItem>
         <Label>Trains:</Label>
         <Select
          style={{ width: '200px' }}
          placeholder="Select train"
           onChange={value => setSelectedTrain(value)}
        >
          {trains.map(train => (
            <Option key={train.id} value={train.id}>Name: {train.name} --- TotalCarriage:  {train.totalCarriage} </Option>
          ))}
        </Select>
      </FormItem>


      <ButtonGroup>
        <StyledButton onClick={checkForExistingAppointment}>Add New Appointment</StyledButton>
      </ButtonGroup>
      
      <Modal
        title="Add Appointment Success"
         visible={successModalVisible}
         onOk={handleCloseSuccessModal}
         onCancel={handleCloseSuccessModal}
      >
        <p>Your appointment has been added successfully!</p>
      </Modal>
      <Modal
        title="Overwrite Confirmation"
         visible={overwriteModalVisible}
         onOk={handleOverwriteConfirmed}
         onCancel={handleOverwriteCanceled}
      >
        <p>Another appointment already exists at this time:</p>
        <p>Event: {existingAppointment && existingAppointment.event}</p>
        <p>Location: {existingAppointment && existingAppointment.location}</p>
        <p>Start Time: {existingAppointment && moment(existingAppointment[0]).format('YYYY-MM-DD HH:mm')}</p>
        <p>End Time: {existingAppointment && moment(existingAppointment[1]).format('YYYY-MM-DD HH:mm')}</p>
        <p>Do you want to overwrite it?</p>
      </Modal>
    </FormContainer>
  );
};

export default AppointmentForm;

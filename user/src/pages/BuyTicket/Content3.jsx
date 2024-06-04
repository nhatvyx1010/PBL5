import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slides/userSlide.js';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Content3 = ({ handleInputValidation }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [url, setUrl] = useState('');
  const [isOrderButtonClicked, setIsOrderButtonClicked] = useState(false); // Biến cờ
  const selectedSeats = useSelector(state => state.seatSelection.selectedSeats) || {};
  console.log("content3: ", selectedSeats);

  const transformData = () => {
    const transformedData = [];
    for (const scheduleId in selectedSeats) {
      const seats = selectedSeats[scheduleId].map(seat => ({
        seatNumber: seat.seatNumber,
        carriageId: seat.carriageId
      }));
      transformedData.push({ scheduleId, seats });
    }
    return transformedData;
  };

  const orderTickets = () => {
    const requestData = transformData();
    console.log("requestData: ", requestData);
    const url = `${process.env.REACT_APP_API_URL}/api/v1/tickets`;
    fetch(url, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${user.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        if (data.meta.status_code === 401) {
          dispatch(updateUser({
            name: '',
            email: '',
            access_token: '',
            address: '',
            phone: '',
            avatar: ''
          }));
          navigate('/sign-in');
        } else if (data.meta.status_code === 200) {
          setUrl(data.data.result.code);
        } else {
          alert("GET Train Name không thành công. Vui lòng thử lại.");
        }
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  };

  const [clicked, setClicked] = useState(false);

  const handleOrderButtonClick = () => {
    if (!isOrderButtonClicked) { // Kiểm tra xem nút đã được nhấn trước đó chưa
      orderTickets(); // Gọi hàm orderTickets nếu chưa được nhấn trước đó
      setIsOrderButtonClicked(true); // Đặt biến cờ thành true để ngăn chặn việc gọi hàm orderTickets lần tiếp theo

      setClicked(!clicked);
      console.log("inputValid-content1: "+!clicked);
      handleInputValidation(!clicked);
    }
  };

  return (
    <div>
        <div style={{ border: '3px solid #CAF8F8', padding: '20px 20px 50px 20px', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Thanh toán với mã QR Code</p>
            <img src={`data:image/png;base64,${url}`} alt="Girl in a jacket" width="400" height="400" />
          </div>
            <button onClick={handleOrderButtonClick} disabled={isOrderButtonClicked}>Order Tickets</button>
        </div>
    </div>
  );
};

Content3.propTypes = {
  handleInputValidation: PropTypes.func.isRequired,
};

export default Content3;

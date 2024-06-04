
import { useState } from 'react';
import { Button, Flex, Pagination } from 'antd';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

const StyledButton = styled(Button)`
  width: 30px; 
  height: 30px; 
  display: flex;
  align-items: center; 
  justify-content: center;
  color: ${({ clicked }) => (clicked ? '#000000' : '#ffffff')};
  background-color: ${({ clicked }) => (clicked ? '#FFD700' : '#77DADA')}; 
  font-size: 13px; 
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: gray !important;
      pointer-events: none;
      color: transparent !important; 
    `}
`;

// Định dạng Flex container để hiển thị 4 hàng và 10 cột và đưa container vào giữa trang
const FlexContainer = styled(Flex)`
  flex-wrap: wrap; 
  width: 480px; 
  margin: 0 auto; 
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// const WrapComponent = ({ selectedTrainId, totalItems, onSelect, selectedItems }) => {
const WrapComponent = ({ totalItems, onSelect }) => {

  

  
  
  // const station = useSelector(state => state.station);
  // console.log("station: ", station );

  const itemsPerPage = 40; // Số lượng phần tử trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [selectedButtons, setSelectedButtons] = useState([]); // Danh sách button được chọn

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  // const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const handleClick = (itemIndex) => {
    const buttonIndex = selectedButtons.indexOf(itemIndex);
    if (buttonIndex === -1) {
      // Button chưa được chọn, thêm vào danh sách
      setSelectedButtons([...selectedButtons, itemIndex]);
      // Gửi cả index của trang và vị trí của button được click ra ngoài
      onSelect(currentPage, itemIndex);
    } else {
      // Button đã được chọn, loại bỏ khỏi danh sách
      const newSelectedButtons = [...selectedButtons];
      newSelectedButtons.splice(buttonIndex, 1);
      setSelectedButtons(newSelectedButtons);
      // Bỏ vị trí của button được bỏ click
      onSelect(currentPage, itemIndex); // Truyền vị trí của button là null vì button đã bị loại bỏ
    }
  };
  
  return (
    <>
      <FlexContainer gap={15}>
        {Array.from(
          { length: itemsPerPage },
          (_, i) => {
            const itemIndex = startIndex + i;
            const disabled = itemIndex > totalItems;
            const clicked = selectedButtons.includes(itemIndex); // Kiểm tra xem button đã được chọn hay chưa
            return (
              <StyledButton
                key={i}
                type="primary"
                disabled={disabled}
                clicked={clicked}
                onClick={() => handleClick(itemIndex)}
              >
                {itemIndex}
              </StyledButton>
            );
          }
        )}
      </FlexContainer>
      <PaginationContainer style={{maxWidth: '300px'}}>
        <Pagination
          defaultCurrent={1}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </PaginationContainer>
    </>
  );
};
WrapComponent.propTypes = {
  totalItems: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default WrapComponent;

// import React, { useState } from 'react';
// import { Button, Flex, Pagination } from 'antd';
// import styled, { css } from 'styled-components';

// const StyledButton = styled(Button)`
//   width: 30px; 
//   height: 30px; 
//   display: flex;
//   align-items: center; 
//   justify-content: center;
//   color: ${({ clicked }) => (clicked ? '#000000' : '#ffffff')};
//   background-color: ${({ clicked }) => (clicked ? '#FFD700' : '#77DADA')}; 
//   font-size: 13px; 
//   ${({ disabled }) =>
//     disabled &&
//     css`
//       background-color: gray !important;
//       pointer-events: none;
//       color: transparent !important; 
//     `}
// `;

// // Định dạng Flex container để hiển thị 4 hàng và 10 cột và đưa container vào giữa trang
// const FlexContainer = styled(Flex)`
//   flex-wrap: wrap; 
//   width: 480px; 
//   margin: 0 auto; 
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const WrapComponent = ({ selectedTrainId, totalItems, onSelect }) => {
//   const itemsPerPage = 40; // Số lượng phần tử trên mỗi trang
//   const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
//   const [selectedButtons, setSelectedButtons] = useState([]); // Danh sách button được chọn

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage + 1;
//   const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

//   const handleClick = (itemIndex) => {
//     const buttonIndex = selectedButtons.indexOf(itemIndex);
//     if (buttonIndex === -1) {
//       // Button chưa được chọn, thêm vào danh sách
//       setSelectedButtons([...selectedButtons, itemIndex]);
//       // Gửi vị trí của button được click ra ngoài
//       onSelect(itemIndex);
//     } else {
//       // Button đã được chọn, loại bỏ khỏi danh sách
//       const newSelectedButtons = [...selectedButtons];
//       newSelectedButtons.splice(buttonIndex, 1);
//       setSelectedButtons(newSelectedButtons);
//       // Bỏ vị trí của button được bỏ click
//       onSelect(itemIndex);
//     }
//   };
  

//   return (
//     <>
//       <FlexContainer gap={15}>
//         {Array.from(
//           { length: itemsPerPage },
//           (_, i) => {
//             const itemIndex = startIndex + i;
//             const disabled = itemIndex > totalItems;
//             const clicked = selectedButtons.includes(itemIndex); // Kiểm tra xem button đã được chọn hay chưa
//             return (
//               <StyledButton
//                 key={i}
//                 type="primary"
//                 disabled={disabled}
//                 clicked={clicked}
//                 onClick={() => handleClick(itemIndex)}
//               >
//                 {itemIndex}
//               </StyledButton>
//             );
//           }
//         )}
//       </FlexContainer>
//       <PaginationContainer style={{maxWidth: '300px'}}>
//         <Pagination
//           defaultCurrent={1}
//           total={totalItems}
//           pageSize={itemsPerPage}
//           onChange={handlePageChange}
//         />
//       </PaginationContainer>
//     </>
//   );
// };

// export default WrapComponent;


// import React from 'react';
// import { FloatButton } from 'antd';
// const FloatButtonContainer = () => (
//   <div
//     style={{
//       height: '300vh',
//       padding: 10,
//     }}
//   >
//     <div>Scroll to bottom</div>
//     <div>Scroll to bottom</div>
//     <div>Scroll to bottom</div>
//     <div>Scroll to bottom</div>
//     <div>Scroll to bottom</div>
//     <div>Scroll to bottom</div>
//     <div>Scroll to bottom</div>
//     <FloatButton.BackTop />
//   </div>
// );
// export default FloatButtonContainer;

import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App = () => (
  <div
        style={{
          height: '300vh',
          padding: 10,
        }}
    >
    <FloatButton.BackTop 
      style={{
        right: 94,
      }}/>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
  </div>
);
export default App;
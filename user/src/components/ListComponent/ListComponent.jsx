import { List } from 'antd';

const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
];

const HorizontalScrollList = () => {
  return (
    <List
      style={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap' }}
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ display: 'inline-block', width: '200px' }}>
          {item}
        </List.Item>
      )}
    />
  );
};

export default HorizontalScrollList;

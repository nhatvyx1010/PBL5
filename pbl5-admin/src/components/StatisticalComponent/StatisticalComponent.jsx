import { useState } from 'react';
import ReactEcharts from "echarts-for-react";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

const StatisticalComponent = () => {
    const [soldSeatsData, setSoldSeatsData] = useState({});
    const [revenueData, setRevenueData] = useState({});
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        // Fetch sold seats data
        fetchSoldSeatsData();
        
        // Fetch revenue data
        fetchRevenueData();
    }, []);

    
    const fetchSoldSeatsData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/percent-users-buy`, {
                headers: {
                    'Authorization': `Bearer ${user.access_token}`,
                    'Content-Type': 'application/json' // Assuming your API expects JSON data
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch sold seats data');
            }
            const data = await response.json();
            setSoldSeatsData(data.data.result);
            console.log("percent-users-buy: "+ data.data.result);
        } catch (error) {
            console.error('Error fetching sold seats data:', error);
        }
    };
    
    const fetchRevenueData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/total-revenue`, {
                headers: {
                    'Authorization': `Bearer ${user.access_token}`,
                    'Content-Type': 'application/json' // Assuming your API expects JSON data
                }
            });
            const data = await response.json();
            setRevenueData(data.data.result);
            console.log(data.data.result);
        } catch (error) {
            console.error('Error fetching revenue data:', error);
        }
    };

    // const [selectedOption, setSelectedOption] = useState(null);
    const [data] = useState({
        'Doanh thu bán được': 1500,
        'Doanh thu chưa bán được': 500
    });
    const [saleData] = useState({
        'Vé bán được': 6000,
        'Vé chưa bán được': 4000
    });

    const getOption2 = () => {
        let option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Triệu VND'
                }
            ],
            series: [
                {
                    type: 'line', // Thay đổi type từ 'bar' sang 'line'
                    emphasis: {
                        focus: 'series'
                    },
                    itemStyle: {
                        normal: {
                            color: '#0CC4B6' // Màu của đường
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 220, 182, 191, 234, 290] // Dữ liệu doanh thu theo tháng
                }
            ]
        };
        return option2;
    };
    
    const getOption3 = () => {
        let option3 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: Object.keys(data)
            },
            series: [
                {
                    name: 'Biểu đồ phần trăm vé bán được',
                    type: 'pie',
                    radius: '75%', // Thay đổi giá trị radius để làm cho biểu đồ lớn hơn
                    center: ['50%', '60%'],
                    data: [
                        { value: soldSeatsData.sold || 0, name: 'Vé bán được' },
                        { value: soldSeatsData.available || 0, name: 'Vé chưa bán được' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    
        return option3;
    };
    
    const getOption4 = () => {
        let option4 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: Object.keys(saleData)
            },
            series: [
                {
                    name: 'Biểu đồ lợi nhuận trên tổng phần trăm doanh thu',
                    type: 'pie',
                    radius: '75%', // Thay đổi giá trị radius để làm cho biểu đồ lớn hơn
                    center: ['50%', '50%'], // Đặt biểu đồ ở giữa
                    data: [
                    { value: revenueData.revenue || 0, name: 'Lợi nhuận' },
                    { value: (revenueData.total - revenueData.revenue) || 0, name: 'Chi phí' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    
        return option4;
    };

    return (
        <>
            <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>Biểu đồ phần trăm vé bán được</p>
            <ReactEcharts style={{ marginTop: '10px' }} option={getOption2()} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>Biểu đồ phần trăm bán vé</p>
                    <ReactEcharts style={{ marginTop: '10px' }} option={getOption3()} />
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>Biểu đồ lợi nhuận trên tổng phần trăm doanh thu</p>
                    <ReactEcharts style={{ marginTop: '10px' }} option={getOption4()} />
                </div>
            </div>
        </>
    );
};

export default StatisticalComponent;

import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";
import Select from 'react-select';

export default class CalculationCharts extends Component {
    state = {
        selectedOption: null, // Lựa chọn hãng được chọn
        data: {
            'Doanh thu bán được': 1500, // Giả sử doanh thu bán được là 1500 triệu VND
            'Doanh thu chưa bán được': 500 // Giả sử doanh thu chưa bán được là 500 triệu VND
        },
        saleData: {
            'Vé bán được': 6000, // Giả sử có 6000 vé bán được
            'Vé chưa bán được': 4000 // Giả sử có 4000 vé chưa bán được
        },
        providerData: {
            'Nhà cung cấp A': 1200, // Giả sử có 6000 vé bán được
            'Nhà cung cấp B': 800, // Giả sử có 6000 vé bán được
            'Nhà cung cấp C': 300, // Giả sử có 6000 vé bán được
            'Nhà cung cấp D': 50, // Giả sử có 6000 vé bán được
            'Nhà cung cấp E': 1500, // Giả sử có 6000 vé bán được
            'Nhà cung cấp F': 1100, // Giả sử có 6000 vé bán được

        }
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    getOption2 = () => {
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
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    barWidth: '40%',
                    itemStyle: {
                        normal: {
                            color: '#0CC4B6' // Màu của các cột
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 220, 182, 191, 234, 290] // Dữ liệu doanh thu theo tháng
                }
            ]
        };
        return option2;
    };

    getOption3 = () => {
        const { selectedOption, data } = this.state;
    
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
                    name: 'Biểu đồ phần trăm tổng doanh thu năm 2023',
                    type: 'pie',
                    radius: '75%', // Thay đổi giá trị radius để làm cho biểu đồ lớn hơn
                    center: ['50%', '60%'],
                    data: Object.keys(data).map(key => ({
                        value: data[key],
                        name: key,
                        itemStyle: {
                            color: key === 'Doanh thu bán được' ? '#0CC4B6' : '#FF6F61' // Điều chỉnh màu sắc
                        }
                    })),
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
    
    getOption4 = () => {
        const { selectedOption, saleData } = this.state;
    
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
                    name: 'Biểu đồ phần trăm bán vé năm 2023',
                    type: 'pie',
                    radius: '75%', // Thay đổi giá trị radius để làm cho biểu đồ lớn hơn
                    center: ['50%', '50%'], // Đặt biểu đồ ở giữa
                    data: Object.keys(saleData).map((key, index) => ({
                        value: saleData[key],
                        name: key,
                        itemStyle: {
                            color: `rgba(0, 0, 255, ${0.2 + index * 0.2})` // Điều chỉnh màu sắc
                        }
                    })),
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
    getOption5 = () => {
        const { providerData } = this.state;
    
        let option5 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: Object.keys(providerData)
            },
            series: [
                {
                    name: 'Biểu đồ phần trăm vé bán được theo nhà cung cấp năm 2023',
                    type: 'pie',
                    radius: '75%', // Thay đổi giá trị radius để làm cho biểu đồ lớn hơn
                    center: ['50%', '50%'], // Đặt biểu đồ ở giữa
                    data: Object.keys(providerData).map((key, index) => ({
                        value: providerData[key],
                        name: key,
                        itemStyle: {
                            color: `rgba(255, 0, 0, ${0.2 + index * 0.1})` // Điều chỉnh màu sắc
                        }
                    })),
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
    
        return option5;
    };
    
    
    

    render() {
        const { selectedOption } = this.state;

        return (
            <>
                <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>Biểu đồ doanh thu năm 2023</p>
                <ReactEcharts style={{ marginTop: '10px' }} option={this.getOption2()} />
                <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>Biểu đồ phần trăm tổng doanh thu năm 2023</p>
                <ReactEcharts style={{ marginTop: '10px' }} option={this.getOption3()} />
                <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>Biểu đồ phần trăm bán vé năm 2023</p>
                <ReactEcharts style={{ marginTop: '10px' }} option={this.getOption4()} />
                <p style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px' }}>Biểu đồ phần trăm vé bán được theo nhà cung cấp năm 2023</p>
                <ReactEcharts style={{ marginTop: '10px' }} option={this.getOption5()} />
            </>
        )
    }
}

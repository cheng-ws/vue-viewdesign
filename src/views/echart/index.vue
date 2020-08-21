<template>
    <div class="tem-login">
        <div id="main1" class="tem-area"></div>
        <div id="main2" class="tem-area"></div>
    </div>
</template>

<script>
    // import echarts from 'echarts/lib/echarts';
    export default {
        name: "echart_index",
        data() {
            return {};
        },
        watch: {},
        mounted() {
            this.getCreate();
            this.initRange('build');
            this.initRange('refersh');
        },
        methods: {
            getCreate() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('main1'), 'walden');

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            initRange(type) {
                let vm = this;
                let charts = vm.$echarts.init(document.getElementById('main2'), 'walden');
                let x_data = [], y_data = [], buildData = {}, nameData = [], title = '';
                if (type === 'build') {
                    buildData = {
                        name: nameData,
                        xData: x_data,
                        yData: y_data,
                    };
                    vm.buildRangeChart(charts, buildData, ["#2c7ab1", "#50b9df",], title, "build");
                } else {
                    let lineGraphData = {
                        type: '设备流量_上行_TOP10',
                        "67": [
                            "9.6",
                            "7.0",
                            "10.5",
                            "12.0",
                            "8.0",
                            "10.2",
                            "15.7",
                            "6.1",
                            "9.2",
                            "6.8",
                            "11.2",
                            "8.8",
                            "9.7",
                            "5.6",
                            "5.8",
                            "10.4",
                            "10.7",
                            "12.2",
                            "31.6",
                            "16.5",
                            "33.0",
                            "6.7",
                            "7.7",
                            "62.6",
                            "9.4",
                            "7.3",
                            "8.8",
                            "8.6",
                            "9.6",
                            "78.0"
                        ],
                        "default_gw_42bd18a6560e": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ],
                        "default_gw_6d681b61b214": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ],
                        "default_gw_676c1b85bc3a": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ],
                        "default_gw_eb6d8ca1f9bf": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ],
                        "default_cpe_192.168.151.109": [
                            "20.2",
                            "26.4",
                            "30.8",
                            "15.8",
                            "6.8",
                            "8.1",
                            "9.2",
                            "5.6",
                            "6.4",
                            "5.6",
                            "21.9",
                            "6.3",
                            "8.2",
                            "5.2",
                            "7.0",
                            "6.4",
                            "6.1",
                            "5.6",
                            "5.8",
                            "5.4",
                            "6.8",
                            "7.0",
                            "11.3",
                            "0.0",
                            "6.7",
                            "13.7",
                            "7.9",
                            "30.8",
                            "12.8",
                            "5.8"
                        ],
                        "default_gw_192.168.151.88": [
                            "3.4",
                            "4.0",
                            "3.6",
                            "3.5",
                            "2.8",
                            "3.0",
                            "3.1",
                            "2.4",
                            "4.0",
                            "3.9",
                            "2.6",
                            "3.1",
                            "3.8",
                            "4.3",
                            "3.1",
                            "3.6",
                            "3.6",
                            "3.0",
                            "3.0",
                            "3.0",
                            "3.3",
                            "5.6",
                            "5.0",
                            "0.0",
                            "5.1",
                            "3.5",
                            "2.7",
                            "4.0",
                            "3.3",
                            "3.6"
                        ],
                        "time": [
                            "2020-08-12 00:29:10",
                            "2020-08-12 00:58:20",
                            "2020-08-12 01:27:30",
                            "2020-08-12 01:56:40",
                            "2020-08-12 02:25:50",
                            "2020-08-12 02:55:00",
                            "2020-08-12 03:24:10",
                            "2020-08-12 03:53:20",
                            "2020-08-12 04:22:30",
                            "2020-08-12 04:51:40",
                            "2020-08-12 05:20:50",
                            "2020-08-12 05:50:00",
                            "2020-08-12 06:19:10",
                            "2020-08-12 06:48:20",
                            "2020-08-12 07:17:30",
                            "2020-08-12 07:46:40",
                            "2020-08-12 08:15:50",
                            "2020-08-12 08:45:00",
                            "2020-08-12 09:14:10",
                            "2020-08-12 09:43:20",
                            "2020-08-12 10:12:30",
                            "2020-08-12 10:41:40",
                            "2020-08-12 11:10:50",
                            "2020-08-12 11:40:00",
                            "2020-08-12 12:09:10",
                            "2020-08-12 12:38:20",
                            "2020-08-12 13:07:30",
                            "2020-08-12 13:36:40",
                            "2020-08-12 14:05:50",
                            "2020-08-12 14:35:00"
                        ],
                        "default_gw_2f92b84bf3aa": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ],
                        "default_gw_aa0f7bd872fa": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ],
                        "default_gw_8a83d9f0e104": [
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0",
                            "0.0"
                        ]
                    };
                    x_data = lineGraphData.time.slice(0, 30);
                    title = lineGraphData.type;
                    for (let key in lineGraphData) {
                        if (key !== 'time') {
                            nameData.push(key);
                            y_data.push({
                                name: key,
                                arr: lineGraphData[key] ? lineGraphData[key] : [],
                            });
                        }
                    }
                    buildData = {
                        name: nameData,
                        xData: x_data,
                        yData: y_data,
                    };
                    vm.buildRangeChart(charts, buildData, ["#2c7ab1", "#50b9df",], title, "refresh");
                }

            },
            /*图表相关方法 start*/
            //区域图模板
            buildRangeChart(charts, dataG, areaColor, title, type) {
                let titleFlag = title.indexOf('流量') > -1;
                let endTitle = titleFlag ? 'kb/s' : '%';
                let maxNum = titleFlag ? "" : 100;
                let splitNumber = titleFlag ? "" : 6;
                areaColor = [
                    "#3fb1e3",
                    "#6be6c1",
                    "#626c91",
                    "#a0a7e6",
                    "#c4ebad",
                    "#96dee8",
                    "#d87c7c",
                    "#919e8b",
                    "#d7ab82",
                    "#6e7074",
                    "#61a0a8",
                    "#efa18d",
                    "#787464",
                    "#cc7e63",
                    "#724e58",
                    "#4b565b",
                ];
                let newLegend = [];
                dataG.name.map((item)=>{
                    newLegend.push(item);
                    // (index+1) % 5 === 0 ? newLegend.push('\n'): '';
                });
                let titleCale = 0;
                if (type === "build") {
                    charts.setOption({
                        noDataLoadingOption: {
                            text: ' ',
                            effect: 'bubble',
                            effectOption: {
                                backgroundColor: '#FFF',
                                effect: {
                                    n: 0 //气泡个数为
                                }
                            }
                        },
                        title: {
                            text: ['{a|' + title + '}', '{b| ' + titleCale + '}'].join(''),
                            // subtext: title,
                            left: 14,
                            top: 12,
                            padding: 0,
                            itemGap: 2,
                            textStyle: {
                                rich: {

                                    a: {
                                        color: '#afafaf',
                                        fontSize: 12
                                    },
                                    b: {
                                        color: '#6a6a6a',
                                        fontSize: 20
                                    }

                                }
                            }
                        },
                        // legend: {
                        //     data: "",
                        //     // dataG.name,
                        //     top: 24,
                        //     right: 20,
                        //     // formatter: function (params) {
                        //     //     for (let i = 0; i < dataG.yData.length; i++) {
                        //     //         if (dataG.yData[i].name === params) {
                        //     //             let totalCalc = 0;
                        //     //             $(dataG.yData[i].arr).each(function () {
                        //     //                 totalCalc += parseInt(this);
                        //     //             });
                        //     //
                        //     //             let helpTxt = "次";
                        //     //             if (params === "在线时长") {
                        //     //                 helpTxt = "分";
                        //     //             }
                        //     //             return "{b|" + params + "}{a|" + totalCalc + "}{s| " + helpTxt + "}";
                        //     //         }
                        //     //     }
                        //     // },
                        //     textStyle: {
                        //         rich: {
                        //             a: {
                        //                 color: '#6a6a6a',
                        //                 fontSize: 14,
                        //                 // align: 'center'
                        //             },
                        //             s: {
                        //                 fontSize: 10,
                        //                 color: "#c3c3c3"
                        //             },
                        //             b: {
                        //                 color: '#c3c3c3',
                        //                 fontSize: 10,
                        //             }
                        //
                        //         }
                        //     }
                        // },
                        tooltip: {
                            trigger: 'axis',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            axisPointer: {
                                type: 'none'
                            },
                            textStyle: {
                                color: '#eeeeee',
                                fontSize: 10
                            },
                        },
                        grid: {
                            containLabel: true,
                            borderColor: '#eeeeee',
                            x: 20,
                            x2: 30,
                            y: 46,
                            y2: 14,
                            borderWidth: 0,
                            show: true
                        },
                        xAxis: [{
                            type: 'category',
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(0, 0, 0, 0.7)', //'#eeeeee',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            // axisLabel: {
                            //     textStyle: {
                            //         color: "#afafaf",
                            //         fontSize: 10
                            //     },
                            //     formatter: function (value, index) {
                            //         return value.substring(10, 16);
                            //     }
                            // },
                            splitLine: {
                                lineStyle: {
                                    color: "#eeeeee"
                                },
                                show: true
                            },
                            boundaryGap: false,
                            data: dataG.xData
                        }],
                        yAxis: [{
                            type: 'value',
                            max: maxNum,
                            splitNumber: splitNumber,
                            axisLine: {
                                lineStyle: {
                                    color: "#eeeeee"
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#d7d7d7",
                                    fontSize: 10
                                },
                                formatter: '{value} ' + endTitle,
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eeeeee"
                                }
                            },

                        }],
                        series: function () {
                            let sGroup = [];
                            for (let i = 0; i < dataG.yData.length; i++) {
                                let item = {
                                    name: dataG.yData[i].name,
                                    type: 'line',
                                    smooth: false,
                                    // stack: '总量',
                                    showAllSymbol: false,
                                    areaStyle: {normal: {}},
                                    data: dataG.yData[i].arr,
                                    symbol: 'none',
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                width: 2
                                            },
                                            label: {show: false},//节点上显示数字
                                            color: areaColor[i]
                                        }
                                    }
                                };
                                sGroup.push(item);
                            }
                            return sGroup;
                        }()
                    });
                } else if (type === "refresh") {
                    charts.setOption({
                        title: {
                            text: ['{a|' + title + '}'].join(''),
                            left: 14,
                            padding: 0,
                            // itemGap: 2,
                            textStyle: {
                                rich: {

                                    a: {
                                        color: '#afafaf',
                                        fontSize: 12
                                    },
                                    b: {
                                        color: '#6a6a6a',
                                        fontSize: 20
                                    }

                                }
                            }
                        },
                        /*title: {
                            subtext: title,
                            text: titleCale,
                        },*/
                        grid: {
                            containLabel: true,
                            borderColor: '#eeeeee',
                            x: 20,
                            x2: 30,
                            y: 46,
                            y2: 14,
                            borderWidth: 0,
                            show: true
                        },
                        legend: {
                            right: 30,
                            padding: [0, 10, 0, 50],
                            data: newLegend,
                        },
                        tooltip: {
                            trigger: 'axis',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            axisPointer: {
                                type: 'none'
                            },
                            textStyle: {
                                color: '#eeeeee',
                                fontSize: 10
                            },
                        },
                        // tooltip: {
                        //     // formatter: function (value) {
                        //     //     let res = value.map(function (line, i) {
                        //     //         return line.seriesName + '：' + line.value + "次";
                        //     //     });
                        //     //     return res.join('<br/>');
                        //     // }
                        // },
                        xAxis: [{
                            type: 'category',
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(0, 0, 0, 0.7)', //'#eeeeee',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#afafaf",
                                    fontSize: 10
                                },
                                formatter: function (value) {
                                    return value.split(' ').join('\n');
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#eeeeee"
                                },
                                show: true
                            },
                            boundaryGap: false,
                            data: dataG.xData
                        }],
                        yAxis: [{
                            type: 'value',
                            max: maxNum,
                            splitNumber: splitNumber,
                            axisLine: {
                                lineStyle: {
                                    color: "#eeeeee"
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#d7d7d7",
                                    fontSize: 10
                                },
                                formatter: '{value} ' + endTitle,
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eeeeee"
                                }
                            },

                        }],
                        series: function () {
                            let sGroup = [];
                            for (let i = 0; i < dataG.yData.length; i++) {
                                let item = {
                                    name: dataG.yData[i].name,
                                    type: 'line',
                                    showAllSymbol: false,
                                    data: dataG.yData[i].arr,
                                    symbol:'none',
                                    areaStyle: {normal: {}},
                                    itemStyle: {
                                        normal: {
                                            color: areaColor[i]
                                        },
                                    }
                                };
                                sGroup.push(item);
                            }
                            return sGroup;
                        }()
                    });
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .tem-login {
        width: 100%;
        height: 100%;

        .tem-area {
            width: 100%;
            height: 400px;
            /*margin-right: 1%;*/
        }
    }
</style>
import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import actions from '../actions'
import Modalmodel  from '../components/Modalmodel'
import {
    Form,
    Button,
    Select,
    Row,
    Col,
    Radio,
    Table,
    Pagination,
    Spin,
} from 'antd'
import '../css/css.css'
import '../../common/css/css.css'
const FormItem = Form.Item
const Option = Select.Option
import {timestampFromat} from '../../util/baseTool';
import {levelOptions} from '../../util/options';
import { Link } from 'react-router-dom'


class Tablelist extends Component {
    constructor(props) {
        super(props);
    }

    columns = [
        {
            title: '平台单号',
            dataIndex: 'platformNumber',
            width: 100,
            render: (text, record, index) => {
                const url = `/orderdetail/?orderId=${record.orderId}`
                return (<a target="_blank" href={url}>{text}</a>)
            }
        }, 
        {
            title: '商品信息',
            dataIndex: 'goods',
            width: 280,
            render: (text, record, index) => {
            const url = `/orderdetail/?orderId=${record.orderId}`
            return (
            <div>
                <div>
                    <ul className='goodsInfo'>
                        {record.goods.map((item, index) => {
                         return (<li key={index}>
                                     <div className='img'>
                                         <img style={{width: '60px',height: '60px'}} src={item.image} />
                                     </div>
                                     <div className='info'>
                                         <a href="true" className='name'>{item.name}</a>
                                         <a href="true"><strong>商品编码:{item.number}</strong></a>
                                     </div>
                                 </li>)
                        })}
                    </ul>
                </div>
            </div>)
            }
        }, 
        {
            title: '日期',
            dataIndex: 'orderTime',
            render: (text, record, index) => {
                return (
                    <div>
                        <p>下单：<span>{timestampFromat(record.orderTime,2)}</span></p>
                        <p>付款：<span>{timestampFromat(record.paymentTime,2)}</span></p>
                        <p>剩余：<span>{timestampFromat(record.deliveryTime,2)}</span></p>
                    </div>
                )
            },
            width:200,
        },
        {
            title: '单价',
            dataIndex: 'unitPrice',
            width: 80,
            render: (text, record, index) =>{
                return (
                    <div className="flex">
                        <ul className="flex-items">
                            {record.goods.map((item, index) =>{
                                return <li key={index}>￥{item.unitPrice}</li>
                            })}
                        </ul>
                    </div>
                )
            }
        },
        {
            title: '数量',
            width: 60,
            dataIndex: 'num',
            render: (text, record, index) =>{
                return (
                    <div className="flex">
                        <ul className="flex-items">
                            {record.goods.map((item, index) =>{
                                return <li key={index}>{item.num}</li>
                            })}
                        </ul>
                    </div>
                )
            }
        },
        {
            title: '未读留言',
            dataIndex: 'message',
            width: 80,
            render: (text, record, index) =>{
                return (
                    <div className="flex">
                        <ul className="flex-items">
                            {record.goods.map((item, index) =>{
                                return <li key={index}><a href="true">{item.unitPrice}</a></li>
                            })}
                        </ul>
                    </div>
                )
            }
        },
        {
            title: '店铺帐号',
            dataIndex: 'platformAccount',
            width: 90,
            render: (text, record, index) =>{
                return <span>{text}</span>
            }
        },
        {
            title: '买家',
            dataIndex: 'buyers',
            width: 80,
            render: (text, record, index) =>{
                return (
                    <div><strong style={{color: 'red'}}>{text.grade}</strong>{text.account}</div>
                )
            }
        },
        {
            title: '订单类型',
            dataIndex: 'isPhoneState',
            width: 80,
            render: (text, record, index) =>{
                return (
                    <div>
                        <p>等待您发货</p>
                        <p>{text ?"手机订单" : "PC订单"}</p>
                    </div>
                )
            }
        },
        {
            title: '金额',
            dataIndex: 'sum',
            width: 80,
            render: (text, record, index) => {
                return <span>${text}</span>
            }
        },
        {
            title: '操作',
            width: 90,
            dataIndex: 'Operation',
            fixed: 'right',
            render: (text, record, index) => {
                const url = `/smtorderdetail/?orderId=${record.orderId}`
                return (
                    <div>
                        <p><a target="_blank" href="true">标记跟踪号</a></p>
                        <p><a target="_blank" href="true">同步订单</a></p>
                        <p><Link to={url}>订单详情</Link></p>
                    </div>
                )
            },
        }];

    componentDidMount() {

    }

    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.props.tablemodelaction({selectedRowKeys, selectedRows});
    }


    Paginatihandle = (page, pageSize)=> {
        this.props.fetchPosts({key: 'data', value: {...this.handleSubmit(), pageSize: page, offset: pageSize}});
        this.props.tablemodelaction({selectedRowKeys: []});
    }


    render() {

        const {data} = this.props.tablemodel;
        const columns = this.columns;

        const rowSelection = {
            selectedRowKeys: this.props.tablemodel.selectedRowKeys,
            onChange: this.onSelectChange,
            getCheckboxProps: record => ({
                disabled: true,
            }),
        };

        return (
            <div className="newCluenk">
                <Row style={{'padding': '8px 10px'}}>
                    <Col span={3}>
                        <Select style={{width: '100%'}} placeholder="请选择">
                            {levelOptions('企业性质').map(item => {
                                return (
                                    <Option key={item.value} value={item.value}
                                    >
                                        {item.label}
                                    </Option>
                                )
                            })}
                        </Select>
                    </Col>
                    <Col span={21} style={{textAlign: 'right'}}>
                        <Button style={{marginRight: '10px'}}>同步订单</Button>
                        <Button>订单导出</Button>
                    </Col>
                </Row>
                <div className="content">
                    
                    <Spin spinning={this.props.tablemodel.loading} delay={500} tip="Loading...">
                        <Table rowSelection={rowSelection}
                               columns={columns}
                               dataSource={data}
                               pagination={false}
                               className= "table-smtlist"
                               scroll={{x: 1300}}
                        />
                    </Spin>
                    <Pagination style={{padding: '10px 0px', textAlign: 'right'}}
                                showTotal={total => `共 ${total} 条`}
                                pageSizeOptions={['20', '30', '40', '50']}
                                showSizeChanger showQuickJumper
                                current={this.props.Paginationmodel.current}
                                defaultCurrent={1} onShowSizeChange={this.Paginatihandle}
                                total={this.props.Paginationmodel.total}
                                pageSize={this.props.Paginationmodel.pageSize}
                                onChange={this.Paginatihandle}/>

                </div>
            </div>
        );
    }
}

export default Tablelist
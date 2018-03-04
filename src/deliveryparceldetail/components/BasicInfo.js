import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import actions from '../actions'
import moment from 'moment'
import Modalmodel from '../components/Modalmodel'
import qs from 'QS'
import {levelOptions} from '../../util/options'
import {
    Form,
    Icon,
    Input,
    Button,
    Select,
    Row,
    Col,
    Radio,
    Cascader,
    Upload,
    Table,
    Popconfirm,
    Modal,
    DatePicker,
    message,
    Spin,
} from 'antd'
import '../css/css.css'

const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    formItemLayout = {
        labelCol: {span: 5},
        wrapperCol: {span: 19}
    }
    formItemLayout3 = {
        labelCol: {span: 10},
        wrapperCol: {span: 14}
    }

    render() {

        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        return (
            <div className="newCluenk">
                <div className="title">基础信息</div>
                <div className="content">


                    <Row style={{'padding': '8px 0px'}}>
                        <Col span={6}>
                            <FormItem
                                label="平台订单号"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('platformOrderNumber', {
                                    rules: [{required: false, message: '请输入平台订单号'}],
                                })(
                                    <Input placeholder="请输入平台订单号" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="YKS订单号"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('yksOrderNumber', {
                                    rules: [{required: false, message: '请输入YKS订单号'}],
                                })(
                                    <Input placeholder="请输入YKS订单号" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="分仓订单号"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('warehouseOrderNumber', {
                                    rules: [{required: false, message: '请输入分仓订单号'}],
                                })(
                                    <Input placeholder="请输入分仓订单号" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="订单类型"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('name', {
                                    rules: [{required: false, message: '请输入订单类型'}],
                                })(
                                    <Input placeholder="请输入订单类型" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>


                    </Row>

                    <Row style={{'padding': '8px 0px'}}>
                        <Col span={6}>
                            <FormItem
                                label="物流渠道"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('logisticsBusiness', {
                                    rules: [{required: false, message: '请输入物流渠道'}],
                                })(
                                    <Input placeholder="请输入物流渠道" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="渠道编码"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('logisticsNumber', {
                                    rules: [{required: false, message: '请输入渠道编码'}],
                                })(
                                    <Input placeholder="请输入渠道编码" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="物流追踪码"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('waybillNumber', {
                                    rules: [{required: false, message: '请输入物流追踪码'}],
                                })(
                                    <Input placeholder="请输入物流追踪码" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="国家全称"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('currencyName', {
                                    rules: [{required: false, message: '请输入国家全称'}],
                                })(
                                    <Input placeholder="请输入国家全称" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>



                    </Row>

                    <Row style={{'padding': '8px 0px'}}>
                        <Col span={6}>
                            <FormItem
                                label="国家简称"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('countryAbb', {
                                    rules: [{required: false, message: '请输入国家简称'}],
                                })(
                                    <Input placeholder="请输入国家简称" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                label="试算运费"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('trialFreight', {
                                    rules: [{required: false, message: '请输入试算运费'}],
                                })(
                                    <Input placeholder="请输入试算运费" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="付款时间"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('paymentTime', {
                                    rules: [{required: false, message: '请输入付款时间'}],
                                })(
                                    <Input placeholder="请输入付款时间" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="币种"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('currencyName', {
                                    rules: [{required: false, message: '请输入币种'}],
                                })(
                                    <Input placeholder="请输入币种" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <Row style={{'padding': '8px 0px'}}>
                        <Col span={6}>
                            <FormItem
                                label="分配仓库"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('distribution', {
                                    rules: [{required: false, message: '请输入分配仓库'}],
                                })(
                                    <Input placeholder="请输入分配仓库" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="销售账号"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('account', {
                                    rules: [{required: false, message: '请输入销售账号'}],
                                })(
                                    <Input placeholder="请输入销售账号" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="买家账号"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('buyerAccount', {
                                    rules: [{required: false, message: '请输入买家账号'}],
                                })(
                                    <Input placeholder="请输入买家账号" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>


                        <Col span={6}>
                            <FormItem
                                label="订单金额"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('orderSum', {
                                    rules: [{required: false, message: '请输入订单金额'}],
                                })(
                                    <Input placeholder="请输入订单金额" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <Row style={{'padding': '8px 0px'}}>
                        <Col span={6}>
                            <FormItem
                                label="是/否负利润"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('isProfit', {
                                    rules: [{required: false, message: '请输入是/否负利润'}],
                                })(
                                    <Input placeholder="请输入是/否负利润" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={6}>
                            <FormItem
                                label="利润"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('profit', {
                                    rules: [{required: false, message: '请输入利润'}],
                                })(
                                    <Input placeholder="请输入利润" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                label="分仓订单状态"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('warehouseOrderState', {
                                    rules: [{required: false, message: '请输入分仓订单状态'}],
                                })(
                                    <Input placeholder="请输入分仓订单状态" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6}>
                            <FormItem
                                label="买家留言"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator(' buyerMessage', {
                                    rules: [{required: false, message: '请输入买家留言'}],
                                })(
                                    <Input placeholder="请输入买家留言" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>

                    </Row>
                    <Row style={{'padding': '8px 0px'}}>
                        <Col span={6}>
                            <FormItem
                                label="备注"  {...this.formItemLayout3} style={{"width": "100%"}}
                            >
                                {getFieldDecorator('remarks', {
                                    rules: [{required: false, message: '请输入备注'}],
                                })(
                                    <Input placeholder="请输入备注" id="success" maxLength="100"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default BasicInfo

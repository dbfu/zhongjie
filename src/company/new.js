import React from 'react'
import { List, InputItem, ImagePicker, NavBar, Button, Radio, Toast, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less'

const Item = List.Item;

class BasicInput extends React.Component {
  state = {
    applicantSex: 1,
    legalSex: 1,
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validatePhone = (rule, value, callback) => {
    if (this.isPhone(value)) {
      callback();
    } else {
      callback(new Error("无效的手机格式"));
    }
  }

  isPhone = (phone) => {
    return /^1(3\d|4\d|5\d|6\d|7\d|8\d|9\d)\d{8}$/g.test(phone);
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { applicantSex, legalSex } = this.state;


    return (
      <div style={{ paddingBottom: 60 }}>
        <NavBar
          style={{ backgroundColor: '#6190e8' }}
          leftContent={<Icon onClick={() => {
            const { history } = this.props;
            history.goBack();
          }} style={{ fontSize: 20 }} type="left" />}
        >申请加入
        </NavBar>
        <form>
          <List
            renderHeader={() => '申请人信息'}
          >
            <InputItem
              {...getFieldProps('applicantName', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入申请人姓名' },
                ],
              })}
              clear
              error={!!getFieldError('applicantName')}
              onErrorClick={() => {
                Toast.info(getFieldError('applicantName').join('、'));
              }}
              placeholder="申请人姓名"
            >
              姓名
            </InputItem>
            <Item className="sex" extra={
              <div>
                <Radio
                  name="sex"
                  className="my-radio"
                  style={{ marginRight: 20 }}
                  checked={applicantSex === 1}
                  onClick={() => { this.setState({ applicantSex: 1 }); }}>
                  男</Radio>
                <Radio
                  name="sex"
                  className="my-radio"
                  checked={applicantSex === 0}
                  onChange={e => {
                    if (e.target.checked) {
                      this.setState({ applicantSex: 0 });
                    }
                  }}>女
                </Radio>
              </div>
            }>性别</Item>
            <InputItem
              {...getFieldProps('applicantNo', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入申请人身份证号码' },
                ],
              })}
              clear
              error={!!getFieldError('applicantNo')}
              onErrorClick={() => {
                Toast.info(getFieldError('applicantNo').join('、'));
              }}
              placeholder="申请人身份证号码"
            >
              身份证号
            </InputItem>
            <InputItem
              {...getFieldProps('applicantPhone', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入申请人手机号' },
                  { validator: this.validatePhone },
                ],
              })}
              clear
              error={!!getFieldError('applicantPhone')}
              onErrorClick={() => {
                Toast.info(getFieldError('applicantPhone').join('、'));
              }}
              placeholder="申请人手机号"
            >
              手机号
            </InputItem>
          </List>
          <List
            renderHeader={() => '公司信息'}
          >
            <InputItem
              {...getFieldProps('companyName', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入公司名称' },
                ],
              })}
              clear
              error={!!getFieldError('companyName')}
              onErrorClick={() => {
                Toast.info(getFieldError('companyName').join('、'));
              }}
              placeholder="公司名称"
            >
              名称
            </InputItem>
            <InputItem
              {...getFieldProps('operate', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入公司经营范围' },
                ],
              })}
              clear
              error={!!getFieldError('operate')}
              onErrorClick={() => {
                Toast.info(getFieldError('operate').join('、'));
              }}
              placeholder="公司经营范围"
            >
              经营范围
            </InputItem>
            <InputItem
              {...getFieldProps('creditCode', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入统一社会信用代码' },
                ],
              })}
              clear
              error={!!getFieldError('creditCode')}
              onErrorClick={() => {
                Toast.info(getFieldError('creditCode').join('、'));
              }}
              placeholder="统一社会信用代码"
              labelNumber={9}
            >
              统一社会信用代码
            </InputItem>
          </List>
          <List
            renderHeader={() => '法定代表人信息'}
          >
            <InputItem
              {...getFieldProps('legalName', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入法定代表人信息' },
                ],
              })}
              clear
              error={!!getFieldError('legalName')}
              onErrorClick={() => {
                Toast.info(getFieldError('legalName').join('、'));
              }}
              placeholder="法定代表人姓名"
            >
              姓名
            </InputItem>
            <Item className="sex" extra={
              <div>
                <Radio className="my-radio" style={{ marginRight: 20 }} checked={legalSex === 1}
                  onClick={() => { this.setState({ legalSex: 1 }); }}>男</Radio>
                <Radio className="my-radio" checked={legalSex === 0}
                  onClick={() => { this.setState({ legalSex: 0 }); }}>女</Radio>
              </div>
            }>性别</Item>
            <InputItem
              {...getFieldProps('legalNo', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入法定代表人身份证号码' },
                ],
              })}
              clear
              error={!!getFieldError('legalNo')}
              onErrorClick={() => {
                Toast.info(getFieldError('legalNo').join('、'));
              }}
              placeholder="法定代表人身份证号码"
            >
              身份证号
            </InputItem>
            <InputItem
              {...getFieldProps('legalPhone', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入法定代表人手机号' },
                  { validator: this.validatePhone },
                ],
              })}
              clear
              error={!!getFieldError('legalPhone')}
              onErrorClick={() => {
                Toast.info(getFieldError('legalPhone').join('、'));
              }}
              placeholder="法定代表人手机号"
            >
              手机号
            </InputItem>
          </List>
          <List
            renderHeader={() => '上传营业执照照片'}
          >
            <div style={{ paddingBottom: 1, paddingTop: 10 }}>
              <ImagePicker
                files={[]}
                // onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
              // selectable={files.length < 7}
              // multiple={this.state.multiple}
              />
            </div>
          </List>
          <div
            style={{
              padding: 8,
              backgroundColor: '#fff',
              textAlign: 'center',
              fontSize: 0,
              position: 'fixed',
              bottom: 0,
              borderTop: '1px solid #eee',
              left: 0,
              right: 0,
            }}>
            <Button onClick={this.onSubmit} style={{ backgroundColor: '#6190e8' }} size="small" inline type="primary">保存</Button>
            <Button onClick={this.onReset} size="small" inline style={{ marginLeft: 18 }}>重置</Button>
          </div>
        </form>
      </div>
    );
  }
}

const BasicInputWrapper = createForm()(BasicInput);

export default BasicInputWrapper;
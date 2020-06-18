import React, { Component } from 'react';
import { List, NavBar, Icon } from 'antd-mobile';

const ListItem = List.Item;
class Company extends Component {

  handleClick = () => {
    const { history, match: { params } } = this.props;
    history.push(`/company/detail/${params.companyTypeId}`)
  }

  render() {
    return (
      <div>
        <NavBar
          style={{ backgroundColor: '#6190e8' }}
          leftContent={<Icon onClick={() => {
            const { history } = this.props;;
            history.goBack();
          }} style={{ fontSize: 20 }} type="left" />}
        >房地产中介服务</NavBar>
        <div style={{ padding: '4px 0px' }}>
          <div style={{ padding: 20 }}>为用户提供房屋出租，出售，购买</div>
          <List>
            <ListItem arrow="horizontal" onClick={this.handleClick}>411科技有限公司</ListItem>
            <ListItem arrow="horizontal" onClick={() => { }}>411科技有限公司</ListItem>
            <ListItem arrow="horizontal" onClick={() => { }}>411科技有限公司</ListItem>
            <ListItem arrow="horizontal" onClick={() => { }}>411科技有限公司</ListItem>
            <ListItem arrow="horizontal" onClick={() => { }}>411科技有限公司</ListItem>
            <ListItem arrow="horizontal" onClick={() => { }}>411科技有限公司</ListItem>
          </List>
        </div>
        <div
          style={{
            position: 'fixed',
            right: '18px',
            bottom: '18px',
            zIndex: 1100,
          }}
          className="btn-demo-fab"
          onClick={() => {
            const { history } = this.props;
            history.push("/company/new/1")
          }}
        >
          <div className={"at-fab"}>
            <Icon type="plus" />
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
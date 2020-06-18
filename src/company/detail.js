import React from 'react'

import { List, NavBar, Flex, Icon } from 'antd-mobile';

const ListItem = List.Item;
const FlexItem = Flex.Item;

export default function CompanyDetail(props) {

  return (
    <div>
      <NavBar
        style={{ backgroundColor: '#6190e8' }}
        leftContent={<Icon onClick={() => {
          const { history } = props;
          history.goBack();
        }} style={{ fontSize: 20 }} type="left" />}
      >411科技有限公司
        </NavBar>
      <List
        renderHeader={() => '申请人信息'}
      >
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>姓名:</FlexItem>
            <FlexItem>付德宝</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>性别:</FlexItem>
            <FlexItem>男</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>生份证号:</FlexItem>
            <FlexItem>342423199311051178</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>手机号:</FlexItem>
            <FlexItem>18256485741</FlexItem>
          </Flex>
        </ListItem>
      </List>
      <List
        renderHeader={() => '公司信息'}
      >
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>名称:</FlexItem>
            <FlexItem>411科技有限公司</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>运营范围:</FlexItem>
            <FlexItem>互联网</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <div>
            <div style={{ flex: '0 0 90px' }}>统一社会信用代码:</div>
            <div>4343433434343reerere</div>
          </div>
        </ListItem>
      </List>
      <List
        renderHeader={() => '法定代表人信息'}
      >
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>姓名:</FlexItem>
            <FlexItem>付德宝</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>性别:</FlexItem>
            <FlexItem>男</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>生份证号:</FlexItem>
            <FlexItem>342423199311051178</FlexItem>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <FlexItem style={{ flex: '0 0 90px' }}>手机号:</FlexItem>
            <FlexItem>18256485741</FlexItem>
          </Flex>
        </ListItem>
      </List>
      <List
        renderHeader={() => '营业执照照片'}
      >
        <div style={{ paddingBottom: 1, paddingTop: 10, textAlign: 'center' }}>
          <img src="https://pic1.zhimg.com/80/v2-5b59508e45343871e3f9913b53b53eec_400x224.png" />
        </div>
      </List>
    </div>

  )
}
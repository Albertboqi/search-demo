import {
  LeftOutlined,
  MenuFoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Layout, Menu, Radio, Space } from "antd";
import { useState } from "react";
import "./App.css";
import InfoRemark from "./infoRemark";
import { logicData } from "./logicData";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("返回", "ret", <LeftOutlined />),
  getItem("查询注解分析", "search"),
];
const App = () => {
  const [mode, setMode] = useState("logic");
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible={false}>
        <div
          style={{
            height: "32px",
            margin: "28px 30px",
            color: "white",
          }}
        >
          ZNBASE
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ background: "white", padding: 0 }}>
          <div className="search-header">
            <MenuFoldOutlined />
            <span className="search-header-span">查询注解平台</span>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div className="search-content">
            <div>查询注解分析</div>
            <div
              style={{
                textAlign: "center",
                padding: "2rem 5rem",
                width: "50%",
              }}
            >
              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
              >
                <Form.Item label="查询语句id">
                  <Input />
                </Form.Item>
                <Form.Item label="planid">
                  <Input />
                </Form.Item>
                <Button icon={<SearchOutlined />} type="primary">
                  查询
                </Button>
              </Form>
            </div>

            <div>
              <Radio.Group
                onChange={handleModeChange}
                value={mode}
                style={{
                  marginBottom: 8,
                }}
              >
                <Radio.Button value="logic">规范化语句</Radio.Button>
                <Radio.Button value="exec">信息标注</Radio.Button>
              </Radio.Group>
              <div>
                {mode === "logic" ? (
                  <Input.TextArea rows={15} value={logicData} />
                ) : (
                  <InfoRemark />
                )}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

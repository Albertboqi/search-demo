import { LeftOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Input, Layout, Menu, Radio } from "antd";
import { useState } from "react";
import "./App.css";
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
            <div style={{ margin: "3rem 0", background: "#f3f3f3" }}>
              <Input />
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
                <Input.TextArea rows={10} />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

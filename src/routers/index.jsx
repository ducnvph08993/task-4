import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiderBar from "../components/Sidebar";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Employees from "../pages/views/Employees";
import AddEmployee from "../pages/views/AddEmployee";

const { Content } = Layout;

const Routers = ({employees}) => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Layout>
          <SiderBar />
          <Layout>
            <Content style={{ padding: "0 50px"}}>
              <Switch>
                <Route
                  path="/"
                  exact
                >
                  <Employees employees={employees}/>
                </Route>
                <Route
                  path="/add"
                >
                  <AddEmployee />
                </Route>
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;

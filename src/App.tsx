import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";

import DemoContainer from "./components/DemoContainer";
import MessengerProven from "./components/MessengerProven";
import News from "./components/News";
import PropertyAnalysis from "./components/PropertyAnalisis";
import Recover from "./components/recover/Recover";
import Layout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import MyAccountContant from "./layouts/ProfileLayout/Account";

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <PropertyAnalysis />
              <DemoContainer />
              <MessengerProven />
              <News />
            </Layout>
          </Route>
          <Route path={"/recover"}>
            <Recover />
          </Route>

          <ProfileLayout>
            {/*<Route path="/profile/account" exact>*/}
            {/*  <MyAccountContant />*/}
            {/*</Route>*/}
            <Route path="/profile/account/f8eaf0bb-2432-4317-8b20-d0e0394e1b23">
              <MyAccountContant />
            </Route>
            <Route path="/profile/reports">
              <h1>Reports</h1>
            </Route>
            <Route path="/profile/subscriptions">
              <h1>Subscriptions</h1>
            </Route>
            <Route path="/profile/billingInformation">
              <h1>Billing Information</h1>
            </Route>
          </ProfileLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

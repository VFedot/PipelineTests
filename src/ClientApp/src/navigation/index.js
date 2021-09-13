import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {book} from "./book";

import { Views } from "../views";
import { Header } from "../components/Header";
import { AdminHistoryLog, Home, User, Shop, Unknown } from '../pages';


export const Routes = () => (
  <>
  {/* <Header />
        <Facade>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={User} />
          <Route path="/shop" component={Shop} />
          <Route path="/adminlog" component={AdminHistoryLog} />
        </Facade>
        <Footer /> */}
    <Route
      component={ Header }
      path={ book.users }
    />
    <Switch>
      <Route exact path={ book.users } >
        <Views.Facade>
          <Home/>
        </Views.Facade>
      </Route>
      <Route exact path={ book.user } >
        <Views.Facade>
          <User/>
        </Views.Facade>
      </Route>

      <Route exact path={ book.shop } >
        <Views.Facade>
          <Shop />
        </Views.Facade>
      </Route>
      <Route exact path={ book.admin } >
        <Views.Facade>
          <AdminHistoryLog/>
        </Views.Facade>
      </Route>
      <Route path="/404" component={Unknown} />
    <Redirect to="/404" />
    </Switch>
  </>
);
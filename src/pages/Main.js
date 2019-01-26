import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import Page from "../model/Page";
import routesJson from "../config/routes.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: []
    };
  }

  componentDidMount() {
    this.preparePages(routesJson.nodes);
  }

  async preparePages(nodes) {
    if (nodes.length < 1) {
      return;
    }
    const promisedRoutes = nodes.map(async node => {
      const page = new Page(node);
      await page.loadComponent();
      return (
        <Route
          path={page.url}
          key={page.url}
          exact={true}
          component={page.component}
          location={this.props.location}
        />
      );
    });
    const routes = await Promise.all(promisedRoutes);

    this.setState({
      routes
    });
  }

  render() {
    return (
      <div>
        ooo
        <Switch>
          {this.state.routes.length > 0 &&
            this.state.routes.map(route => {
              return route;
            })}
          <Route render={this.noMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);

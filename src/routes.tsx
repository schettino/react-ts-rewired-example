import * as React from 'react';
import { Route, Switch } from 'react-router';

class Routes extends React.Component {
  public renderRoute(name: string) {
    return () => <div>{name}</div>;
  }

  public render() {
    return (
      <React.Fragment>
        <Route component={() => <div>Example</div>} />
        <Switch>
          <Route path="/1" exact render={this.renderRoute('Route 1')} />
          <Route path="/2" exact render={this.renderRoute('Route 2')} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;

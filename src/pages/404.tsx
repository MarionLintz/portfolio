import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';

class NotFoundPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <Container className="mt-5 pt-5">
          <p className="not-found-text"> Oups </p>
          <p className="not-found-detail"> La page que vous recherchez semble introuvable </p>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;
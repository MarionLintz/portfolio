import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';

class LegalPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
          <Container className="mt-5 pt-5">
              <h1>Propriété intellectuelle</h1>
              <p>
                  Marion Lintz détient, se réserve et conserve tous les droits de propriété, 
                  notamment intellectuelle, y compris les droits de reproduction sur le présent site et les éléments 
                  qu’il contient. En conséquence et notamment toute reproduction partielle ou totale du présent site et des éléments 
                  qu’il contient est strictement interdite sans autorisation écrite de Marion Lintz. Les logos et tous autres signes 
                  distinctifs contenus sur ce site sont la propriété de Marion Lintz ou font l'objet d'une autorisation d'utilisation. 
                  Aucun droit ou licence ne saurait être attribué
                  sur l'un quelconque de ces éléments sans l'autorisation écrite de Marion Lintz ou du tiers détenteur des droits.
                </p>

            <h1>Exclusion de garantie et de responsabilité</h1>
            <p>
                L'utilisateur du site web "www.marionl.fr" reconnaît avoir pris connaissance des présentes 
                conditions d'utilisation du site et s'engage à les respecter. Marion Lintz ne saurait être tenue 
                pour responsable des dommages directs ou indirects qui pourraient résulter de l'accès au site ou de 
                l'utilisation du site et/ou de ces informations, y compris l'inaccessibilité, les pertes de données, 
                détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur 
                et/ou de la présence de virus sur son site. Bien que Marion Lintz s'efforce de fournir un contenu fiable 
                sur son site, il ne garantit pas que son contenu soit exempt d'inexactitudes ou d'omissions et ne saurait 
                être tenu pour responsable des erreurs ou omissions, d'une absence de disponibilité des informations et des 
                services. Marion Lintz se réserve à tout moment et sans préavis le droit d'apporter des améliorations et/ou 
                des modifications au contenu de son site. En conséquence, l'utilisateur reconnaît se servir de ses informations 
                sous sa responsabilité exclusive.
            </p>
          </Container>
      </Layout>
    );
  }
}

export default LegalPage;
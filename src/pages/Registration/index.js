import React, { useState } from 'react';

import CompanyData from '../../components/CompanyData';

import DistributorData from '../../components/DistributorData';

import {
  Container,
  OutletData,
  Nav,
  Distributor,
  NewDistributor,
} from './styles';

export default function Registration() {
  const [showOutlet, setShowOutlet] = useState(true);

  const [showDistributor, setShowDistributor] = useState(false);

  function handleAddNewDistributor() {}

  return (
    <Container>
      <OutletData>
        <Nav>
          <text>Dados da praças</text>
          <button type="button" onClick={() => setShowOutlet(!showOutlet)}>
            Praça
          </button>
        </Nav>
        {showOutlet && <CompanyData />}
      </OutletData>
      <Distributor>
        <Nav>
          <text>Distribuidor 01</text>
          <button
            type="button"
            onClick={() => setShowDistributor(!showDistributor)}
          >
            Distribuidor
          </button>
        </Nav>
        {showDistributor && <DistributorData />}
      </Distributor>
      <NewDistributor>
        <button type="button" onClick={handleAddNewDistributor}>
          Adicionar Distribuidor
        </button>
      </NewDistributor>
    </Container>
  );
}

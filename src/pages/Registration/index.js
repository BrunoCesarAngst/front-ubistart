import React, { useState, useCallback, useEffect } from 'react';

import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';

import Button from '@material-ui/core/Button';

import AddSharpIcon from '@material-ui/icons/AddSharp';

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

  const [distributors, setDistributors] = useState([]);

  const [newDistributors, setNewDistributors] = useState({});

  const handleAddNewDistributor = useCallback(() => {
    setDistributors([...distributors, newDistributors]);

    setNewDistributors({});
  }, [newDistributors, distributors]);

  useEffect(() => {
    const distributorStorage = localStorage.getItem({ distributors });

    if (distributorStorage) {
      setDistributors(JSON.parse(distributorStorage));
    }
  }, []);

  return (
    <Container>
      Nova praça
      <OutletData>
        <Nav>
          <text>Dados da praças</text>
          <KeyboardArrowUpRoundedIcon
            fontSize="large"
            type="button"
            onClick={() => setShowOutlet(!showOutlet)}
          />
        </Nav>
        {showOutlet && <CompanyData />}
      </OutletData>
      <Distributor>
        <Nav>
          <text>Distribuidor 01</text>
          <KeyboardArrowUpRoundedIcon
            fontSize="large"
            type="button"
            onClick={() => setShowDistributor(!showDistributor)}
          />
        </Nav>
        {showDistributor && <DistributorData />}
      </Distributor>
      <NewDistributor>
        <AddSharpIcon variant="contained" color="secondary" type="button" />
        <Button
          typography={{
            fontFamily: 'Raleway',
            justifyContent: 'space - between',
          }}
          variant="contained"
          color="secondary"
          type="button"
          // onClick={}
        >
          Adicionar Distribuidor
        </Button>
      </NewDistributor>
    </Container>
  );
}

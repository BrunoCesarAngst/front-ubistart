import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';

import api from '../../services/api';

import {
  Container,
  Nav,
  StyledLink,
  OutletsTable,
  SearchOutlets,
  Pages,
} from './styles';

export default function Outlets() {
  const [bins, setBins] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadBins() {
      const response = await api.get('16dmck');

      // console.tron.log(response);

      const data = response.data.map(bin => ({
        ...bin,
      }));
      // console.tron.log(data);

      setBins(data);
    }

    loadBins();
  }, []);

  return (
    <Container>
      <Nav>
        <text>Praças</text>
        <StyledLink to="/register">
          <Button>Nova praça</Button>
        </StyledLink>
      </Nav>
      <OutletsTable>
        <thead>
          <SearchOutlets>
            Buscar
            <input />
          </SearchOutlets>
          <tr>
            <th>Nome Fantasia</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bins.map(bin => (
            <tr>
              <td>{bin.tradingName}</td>
              <td>{bin.cnpj}</td>
              <td>{bin.companyName}</td>
              <td>{bin.status ? 'Ativo' : 'Inativo'}</td>
            </tr>
          ))}
        </tbody>
        <Pages>Mostrando 1 a 7 de {bins.length}</Pages>
      </OutletsTable>
    </Container>
  );
}

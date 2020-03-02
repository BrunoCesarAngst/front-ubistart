import React from 'react';

import NotesSharpIcon from '@material-ui/icons/NotesSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import PersonIcon from '@material-ui/icons/Person';
import EqualizerSharpIcon from '@material-ui/icons/EqualizerSharp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { Container, StyledLink } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <ul>
        <li className="first">
          <StyledLink>
            <NotesSharpIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/">
            <RoomSharpIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            <text>Praças</text>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/users">
            <PersonIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            <text>Usuários</text>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/matrices">
            <EqualizerSharpIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            <text>Matrizes</text>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/extractions">
            <MonetizationOnIcon fontSize="large" style={{ color: '#FFFFFF' }} />
            <text>Extrações</text>
          </StyledLink>
        </li>
      </ul>
    </Container>
  );
}

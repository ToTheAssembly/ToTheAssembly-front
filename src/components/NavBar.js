import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NavBar = () => {
    
  return (
    <div style={{fontFamily: 'Pretendard', fontSize: '18px'}}>
      <Navbar bg="light" variant="light" >
        <Container style={{maxWidth: '1200px', padding: 'auto'}}>
          <a href="/"><img src={require("../image/logo_black_500.png")} width='80px' alt="국회로 로고"/></a>
          
          <Nav className="me-auto">&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/bill">의안 조회</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="/member">의원 조회</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="/trend">트렌드 분석</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="/voca">용어 해설</Nav.Link>
          </Nav>

          <div class="input-group" style={{maxWidth: '300px'}}>
			      <input type="text" class="form-control" />
			      <div class="input-group-append">
              <button class="btn btn-primary" style={{backgroundColor: '#779BE0', borderColor: '#779BE0'}}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
		      </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;

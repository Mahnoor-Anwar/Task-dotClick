import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '././Component/sideBar'
import MainContent from '././Component/mainContent'
import './App.css';

function App() {
  return (
    <Container fluid>
    <div className="d-flex layout">
      <Col md={2}className="sidebar">
        <Sidebar/>
      </Col>
      <Col md={10} className="main-content">
        <MainContent />
      </Col>
    </div>
   
  </Container>
  );
}

export default App;

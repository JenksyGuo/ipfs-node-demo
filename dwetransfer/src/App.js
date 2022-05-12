import { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { Success } from './components/Success';
import { Error } from './components/Error';

import { Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/dwetransfer-logo.png';
import Background from './assets/background.jpg';

function App() {
  const [cids, setCids] = useState([]);
  const [ipfsError, setIpfsError] = useState(false);
  
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <Container className="p-3">
          <Card style={{ width: '25rem', minHeight: '35rem'}}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Text>
                WeTransfer in Web 2.0 
              </Card.Text>
              { cids.length === 0 ? <FileUploader setCids={setCids} setIpfsError={setIpfsError}/> :null }
              { cids.length !== 0 ? <Success cids={cids} setCids={setCids}/> : null }
              { ipfsError ? <Error setIpfsError={setIpfsError}/> : null }
            </Card.Body>
          </Card>
      </Container>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { Previewer } from './components/Previewer';
import { Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/dwetransfer-logo.png';
import Background from './assets/background.jpg';

function App() {
  const [files, setFiles] = useState([]);

  const onSuccess = (savedFiles) => {
    setFiles(savedFiles)
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <Container className="p-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Text>
                It's like WeTansfer but via IPFS in the Web 3.0...  
              </Card.Text>
              <FileUploader onSuccess={onSuccess}/>
              <Previewer files={files}/>
            </Card.Body>
          </Card>
      </Container>
    

    </div>
  );
}

export default App;

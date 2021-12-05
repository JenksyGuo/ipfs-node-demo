import { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { Previewer } from './components/Previewer';

function App() {
  const [files, setFiles] = useState([]);

  const onSuccess = (savedFiles) => {
    setFiles(savedFiles)
  };

  return (
    <div className="App">
      <FileUploader onSuccess={onSuccess}/>
      <Previewer files={files}/>
    </div>
  );
}

export default App;

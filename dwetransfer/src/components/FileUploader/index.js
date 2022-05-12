import {useState} from 'react';
import { create } from 'ipfs-http-client'
import { Button, Form } from "react-bootstrap";

export const FileUploader = ({setCids, setIpfsError}) => {
    const [files, setFile] = useState([]); 

    const onInputChange = (event) => {
        setFile(event.target.files) 
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append("",files[i]);
        }
        // creates an ipfs client with API port open at https://localhost:5001
        const client = create('http://localhost:5001');
        
        // an try-catch to interatively adding files to ipfs. It takes all of the form file data and  
        try {
            var cids = [];
            for await (const cid of client.addAll(data)) {
                cids.push(cid.path);
            }
            setCids(cids);
            console.log(cids);
        } catch (e) {
            setIpfsError(true);
            console.log(e.Message);
        }
    
    }

    return (
        <Form method="post" action="#" id="#"  onSubmit={onSubmit}>
            <Form.Group className="mb-3 form-group files">
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </Form.Group>

            <Button variant="dark" type="submit">
                Send to IPFS
            </Button>
        </Form>
    )
}
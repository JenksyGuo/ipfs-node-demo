import {useState} from 'react';
import { Button, Form } from "react-bootstrap";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'


export const FileUploader = ({setCids, setIpfsError}) => {
    
    const [files, setFile] = useState([]); 


    const onInputChange = (event) => {
        setFile(event.target.files) 
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        const client = new Web3Storage({ token: process.env.WEB3STORAGE_API_TOKEN });
        
        async function main() {
            console.log("started");
            const cid = await client.put([data])
                .then((response) => response.json())
                .then((result) => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            console.log(cid);
        };

        // for dealing with more than one file
        // for(let i = 0; i < files.length; i++) {
        //     data.append("",files[i]);
        // };

        main();

    }

    return (
        <div>
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
        </div>
    )
}
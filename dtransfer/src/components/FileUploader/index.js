import {useState} from 'react';
import { create } from 'ipfs-http-client'
import { Button, Form } from "react-bootstrap";
import { toast} from 'react-toastify';

export const FileUploader = ({onSuccess}) => {
    const [files, setFile] =useState([])

    const onInputChange = (event) => {
        setFile(event.target.files) 
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        const client = create('http://127.0.0.1:5001');
        
        try {
            for await (const file of client.addAll(data)) {
                console.log(file)
            }
            onSuccess(data);
            toast.success('Upload Success');
        } catch (e) {
            toast.error('Upload Error')
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email to" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="Message" placeholder="Your message" />
            </Form.Group>


            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    )
}
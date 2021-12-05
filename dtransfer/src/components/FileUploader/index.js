import {useState} from 'react';
import './style.css';
import axios from 'axios';
import { create } from 'ipfs-http-client'


export const FileUploader = ({}) => {
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

        const client = create('http://127.0.0.1:5001')
        const { cid } = await client.add('Hello world!');
        console.log(cid);

    }

    return (
        <form method="post" action="#" id="#"  onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

            <button>Submit</button>
        </form>
    )
}
import { Alert, Card, Button } from "react-bootstrap";

export const Success = ({cids, setCids}) => {     
    console.log(cids);

    const onGoBack = () => {
        setCids([]);
    } 

    return (
        <Card.Text>
            <Alert variant='light'> 
                <p> Files have been sent to IPFS successfully</p>
                <ul> {cids.map(function(path, index) {
                    return <li><a href={"https://ipfs.io/ipfs/" + path} >https://ipfs.io/ipfs/{path}</a></li>
                })}</ul>
            </Alert>
            <Button
                    variant='success'
                    onClick={onGoBack}
                >
                    Go Back
                </Button>
        </Card.Text>

    )
}
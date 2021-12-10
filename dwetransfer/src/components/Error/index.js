import { Alert, Card, Button } from "react-bootstrap";

export const Error  = ({setIpfsError}) => {     

    const onDismiss = () => {
        setIpfsError(false);
    }

    return (
        <Card.Text>
            <br/>
            <Alert variant='danger'>
                
                <p> Failed to upload to IPFS. Make sure your <a hre="https://docs.ipfs.io/how-to/command-line-quick-start/#take-your-node-online">ipfs daemon</a> is running on localhost:5001. And you have selected a file to upload. </p> 
                <Button
                    variant='danger'
                    onClick={onDismiss}
                >
                    dismiss
                </Button>
            </Alert>
        </Card.Text>
    )
}
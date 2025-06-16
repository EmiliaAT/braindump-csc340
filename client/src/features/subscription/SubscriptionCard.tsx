import axios from 'axios';

const SubscriptionCard = (props: {subscriptionId: number, userName: string, createdTimestamp: string } ) => {

    const styles = {
        border: "1px solid hsl(0, 0%, 80%)",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px hsla(0, 0%, 0%, .1)",
        padding: "20px",
        margin: "10px",
        display: "inline-block",
        /* textAlign: "center", */
        width: "275px",
    };

    const dateStyle = {
        margin: "10px 10px 20px 10px"
    };

    const deleteSubscription = () => {
        axios.delete('http://localhost:8080/subscription/delete/'.concat(props.subscriptionId.toString()));
    };

    return (
        <div style={styles}>
            <center><h2>{props.userName}</h2></center>
            <center><div style={dateStyle}>Following since {props.createdTimestamp}</div></center>
            <center><div><button onClick={deleteSubscription}>Unsubscribe</button></div></center>
        </div>
    );
};



export default SubscriptionCard;
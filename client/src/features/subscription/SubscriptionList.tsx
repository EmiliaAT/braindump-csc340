import { useState } from "react";
import axios from 'axios';
import SubscriptionCard from './SubscriptionCard';
import SubscriptionTypes from './subscription.ts';

const SubscriptionList = (props: {subscriberUserId: number}) => {

    const styles = {
        border: "none",
        padding: "20px",
        margin: "40px 40px 60px 100px",
        width: "100%",
    };

    const [subscriptions, setSubscriptions] = useState<SubscriptionTypes[]>([]);

    axios.get('http://localhost:8080/subscriptions/'.concat(props.subscriberUserId.toString()))
             .then((response) => { setSubscriptions(response.data); } ); 

    return (
        <div style={styles}>

        {subscriptions.map((subscription) => (
           
            <SubscriptionCard subscriptionId={subscription.subscriptionId} userName={subscription.authorUserName} 
                                                         createdTimestamp={subscription.subscriptionCreatedTimestamp}/>
               
            ))
        }

        </div>
    );
};

export default SubscriptionList;
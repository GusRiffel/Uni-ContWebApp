import React, {useEffect, useState} from "react";
import DashComponent from "../Components/DaysCompleted";
import CheckinComment from "../Components/CheckinComment";
import useCheckin from "../services/firebase/useCheckin";
import useAuth from "../services/firebase/useAuth";
import { serverTimestamp } from "firebase/firestore";
import avatarSmall from "../assets/avatar_small.png";

const Dash = (props) => {
    const {user} = useAuth();
    const {createCheckinComment, getCheckins} = useCheckin();
    const [checkins, setCheckins] = useState([]);
    console.log(user);
    const getCheckinData = async () => {
        const checkinsSnap = await getCheckins();
        let checkins = [];

        if (checkinsSnap.size) {
            checkinsSnap.forEach((doc) => {
                checkins.push({...doc.data(), ...{id: doc.id}});
            });
            setCheckins(checkins.reverse());
        }
    };

    const handleComment = async (id, comment) => {
        try {
            await createCheckinComment(
                id,
                {
                    ...{userId: user.uid},
                    ...{comment},
                    ...{
                        name: user.displayName || user.email,
                        time: serverTimestamp(),
                        phone: avatarSmall,
                    }
                }
            )
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCheckinData();
    }, []);

    console.log(checkins);


    return (
        <div>
            <DashComponent days={props.days} checkins={checkins}/>
            {checkins.map((c) => <CheckinComment key={c.id} onComment={handleComment} checkin={c}/>)}

        </div>
    );
};

export default Dash;
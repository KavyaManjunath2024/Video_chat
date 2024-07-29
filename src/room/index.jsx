import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';



const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 1226786031;
        const serverSecret = "de808ff6dd66e7f4d98bdadcb5ca71ad";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(),
            "Kavzz"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
       zp.joinRoom({
        container:element,
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
        }
       });
    };




  return (
    <div className="room-page">
        <div ref={myMeeting}/>
      
    </div>
  )
}

export default RoomPage;

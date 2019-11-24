











import React from 'react';
import RoomsFilter from "./RoomsFilter"
import RoomsList from './RoomsList'
//import {withRoomConsumer} from "../context"
import Loading from "./Loading"
import {useContext} from "react";
import {RoomContext} from "../context"
function RoomContainer()
{
  const context=useContext(RoomContext)
  const {loading,sortedRooms,rooms}=context;
  if(loading)
  {
    return <Loading />
  }
  return(
  <>
  <RoomsFilter rooms={rooms}/>
  <RoomsList rooms={sortedRooms} />

  </>
);
}
export default RoomContainer;












{/*
import React from 'react';
import RoomsFilter from "./RoomsFilter"
import RoomsList from './RoomsList'
import {RoomConsumer} from "../context"
import Loading from "./Loading"
const RoomsContainer = ({}) => {
  return (
    <RoomConsumer>
      {
        value=>
        {
          const {loading,soretdRooms,rooms}=value
          if(loading)
          {
            return <Loading />
          }
          return(
          <div> hello from room scontainer
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={soretdRooms} />
          </div>
        );

        }
      }
    </RoomConsumer>
    );
}


export default RoomsContainer;
*/}

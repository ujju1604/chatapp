import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";

export default function Right(){
    return(
        <div className="w-[70%] bg-slate-950 text-white">
            <Chatuser></Chatuser>
            <div style={{maxHeight:"calc(88vh - 12vh)"}} className='flex-ujju overflow-y-auto'>
            <Messages></Messages>
            </div>
            <Type></Type>
        </div>
    )
}
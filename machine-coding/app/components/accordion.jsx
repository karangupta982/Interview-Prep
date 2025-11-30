'use client'

import { useState } from "react";
import data from "./data.js";
import { ChevronDown,ChevronUp } from 'lucide-react';

export default function Accordion(){
    const [show,setShow] = useState(null);
    return (
        <div className="m-auto mt-10 text-white border-1 w-1/2 rounded-2xl p-2 pb-5">
            { data.length > 0 ?
                data.map((item) => {
                    return <div className=" w-full m-auto  p-2" key={item.id}>
                        <div className="flex justify-between border-b-2">
                            <h2>{item.question}</h2>
                            <button className="cursor-pointer" onClick={()=>{
                                setShow(show == item.id ? null : item.id);
                            }}> 
                                {show == item.id ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                            </button>
                        </div>
                        {show == item.id && 
                            <div className="">
                                <h3>{item.answer}</h3>
                            </div>
                        }
                    </div>
                })
                :
                <h1>No accordian item present</h1>
            }
        </div>
    );
}
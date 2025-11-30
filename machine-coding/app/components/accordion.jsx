'use client'

import { useState } from "react";
import data from "./data.js";
import { ChevronDown } from 'lucide-react';

export default function Accordion(){
    const [show,setShow] = useState(null);
    return (
        <div className="m-auto mt-10 text-white">
            {
                data.map((item) => {
                    return <div className=" w-1/2 m-auto border-1 p-2" key={item.id}>
                        <div className="flex justify-between">
                            <h2>{item.question}</h2>
                            <button> 
                                <ChevronDown size={20} onClick={()=>{
                                    setShow(show == item.id ? null : item.id);
                                }}  className="cursor-pointer"/>
                            </button>
                        </div>
                        {show == item.id && 
                            <div className="">
                                <h3>{item.answer}</h3>
                            </div>
                        }
                    </div>
                })
            }
        </div>
    );
}
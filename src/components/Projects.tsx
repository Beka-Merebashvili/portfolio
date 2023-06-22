import styled from "styled-components"
import data from "../data.json"

export default function Projects() {
    return (
        <div>
            {data.map((data , index)=> (
                <div key={index}>
                    <p>{data.title}</p>
                    <img src={data.img} alt="" />
                </div>
            ))}
        </div>
    ) ;
}
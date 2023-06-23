import styled from "styled-components"
import UnderLine from "../styled-components/UnderLine";
import data from "../data.json"

export default function Projects() {
    return (
       <ProjectsContainer>
        <div className="title">
            <p className="projects">Projects</p>
            <UnderLine>contact me</UnderLine>
        </div>
        <div>
            {data.map((data , index)=> (
                <div key={index}>
                    {/* <p>{data.title}</p> */}
                    {/* <img src={data.img} alt="" /> */}
                </div>
            ))}
        </div>
        </ProjectsContainer>
    ) ;
}


const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        display: flex;
        gap: 70px;
        margin-bottom: 40px;
    }
    .projects {
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        color: #ffffff;
        letter-spacing: -1.13px;
    }
`
import styled from "styled-components"
import UnderLine from "../styled-components/UnderLine";
import data from "../data.json"

export default function Projects() {
    return (
       <ProjectsContainer>
        <div className="section">
            <p className="projectTitle">Projects</p>
            <UnderLine href="#1">contact me</UnderLine>
        </div>
        <div className="projectsWrapper">
            {data.map((data , index)=> (
                <div className="projects" key={index}>
                    <img src={data.img} alt="" />
                    <p className="title">{data.title}</p>
                    <p className="lenguages">{data.lenguages}</p>
                    <div className="links">
                    <UnderLine target="blank" href={data.liveUrl}>VIEW PROJECT</UnderLine>
                    <UnderLine target="blank" href={data.repoUrl}>VIEW CODE</UnderLine>
                    </div>
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
    .section {
        display: flex;
        align-items: center;
        gap: 70px;
        margin-bottom: 40px;
    }
    .projectTitle {
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        color: #ffffff;
        letter-spacing: -1.13px;
    }
    .projects {
        margin-bottom: 52px;
    }
    img {
        width: 345px;
        height: 253px;
    }
    .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        color: #ffffff;
        margin: 18px 0 7px 0;
    }
    .lenguages {
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        color: #ffffff;
        letter-spacing: 2.8px;
    }
    .links {
        display: flex;
        gap: 32px;
        margin-top: 20px;
    }
    a {
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        color: #ffffff;
        letter-spacing: 2.286px;
    }

    @media only screen and (min-width: 768px) {
        .section {
            width: 706px;
            justify-content: space-between;
        }
         .projectsWrapper {
            width: 736px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
         }
    }
`
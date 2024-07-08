import React from "react";
import './skills.scss'


const Skills = ({data}) => {
    // const [skills, setSkills] = useState(data);

    return(
        <>
            <section className='all-skills-section' id='skills'>
                <h1 className='skills-title'>Skills</h1>
                <p className='skills-text'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                <div className='gridbox-flex'>
                <div className='grid-container'>
                    {data.map((el,index) => {
                        return <p className='grid-item' key={index}> {el}</p>
                    })
                    }
                </div>
                </div>
            </section>
        </>
    )
}

export default Skills;
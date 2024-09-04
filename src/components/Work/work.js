import React, {useState} from "react";
import './work.scss'


const Work = ({data}) => {
    // const [projectData, setProject] = useState(data)
    const [isHovered, setIsHovered] = useState(false)


    return (
        <>
            <section className='all-work-section' id='work'>
                <h1 className='work-title'>Work</h1>
                <p className='work-text'>Check out some of my projects</p>
                <div className='all-boxes'>
                    {data.map((el, index) => (
                        <div className='whole-work-box' key={index}>
                            <div className={!isHovered ? 'work-box' : 'box-style-OnEnter'}
                                 onMouseEnter={() => setIsHovered(true)}
                                 onMouseLeave={() => setIsHovered(false)}>
                                <>
                                {isHovered ? (
                                    <div className='box-style-OnEnter'>
                                        <div>
                                            <p className='box-title'>{el.project}</p>
                                        </div>
                                        <div className='button-position'>
                                            <button className='work-button'><a href={el.link}>View Project</a></button>
                                            <button className='work-button'><a href={el.github}>View Code</a></button>
                                        </div>
                                    </div>
                                ): <div>
                                    <p style={{width:'100%', height:'180px',fontWeight:'600', display:'flex',justifyContent:'center',alignItems:'center',fontSize:'25px'}}> Project </p>
                                </div>}
                                </>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </section>
        </>
    )
}

export default Work;
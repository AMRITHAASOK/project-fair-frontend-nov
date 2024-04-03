import React from 'react'
import {Link} from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-md-6 mt-5">
                <h1 className='text-center mt-5 '>Project Fair</h1>
                <p style={{textAlign:'justify'}} className='mx-5 mt-3'>Project Management is the application of specific knowledge, skills, methodologies, and techniques aimed at achieving specific and measurable project goals, including, ultimately, successful project completion. It differs from general “management” because project management relates directly to the goals and time-bound objectives achieved within the scope of a project itself, on a limited timeline, rather than an ongoing one.</p>
                <div className='text-center'>
                    <Link to={'/login'}>
                    <button className='btn btn-dark mt-2 mb-5'>Get Started</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-6">
                <img src={programmer} width={'100%'} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-12" style={{height:'500px'}}>
                 <h1 className='text-center m-5'>Explore Our Project</h1>
                 <marquee width="100%" height="400px" direction="left" >
                        <div>
                            <ProjectCard/>
                        </div>
            </marquee>
            </div>
        </div>
        <div className="row mx-5 mb-5">
            <h1 className='text-center m-5'>Our Services</h1>
            <div className="col-md-4">
                <div className="card shadow p-5" style={{height:'550px'}}>
                        <h3 className='text-center m-2'>Web Designing</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea rerum magnam, esse, aliquam, fuga mollitia repudiandae at iste ipsam perferendis voluptatibus quasi ut velit commodi recusandae quas necessitatibus iusto?
                        Unde delectus hic praesentium a consequatur cupiditate optio asperiores provident temporibus consequuntur. Veritatis doloremque saepe aliquam dolorem, impedit accusamus dolorum harum commodi. Nemo sint, quod ullam praesentium repellendus laudantium error!2</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow p-5" style={{height:'550px'}}>
            <h3 className='text-center m-2'>Single Page Application</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea rerum magnam, esse, aliquam, fuga mollitia repudiandae at iste ipsam perferendis voluptatibus quasi ut velit commodi recusandae quas necessitatibus iusto?
                        Unde delectus hic praesentium a consequatur cupiditate optio asperiores provident temporibus consequuntur. Veritatis doloremque saepe aliquam dolorem, impedit accusamus  accusamus accusamusaccusamus </p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow p-5" style={{height:'550px'}}>
            <h3 className='text-center m-2'>Backend Services</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea rerum magnam, esse, aliquam, fuga mollitia repudiandae at iste ipsam perferendis voluptatibus quasi ut velit commodi recusandae quas necessitatibus iusto?
                        Unde delectus hic praesentium a consequatur cupiditate optio asperiores provident temporibus consequuntur. Veritatis doloremque saepe aliquam dolorem, impedit accusamus dolorum harum commodi. Nemo sint, quod ullam praesentium repellendus laudantium error!2</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home
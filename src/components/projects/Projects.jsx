import React from 'react'
import './project.css'
import ProjectImg from '../../assets/img/projectimg.png'
import Project1 from '../../assets/img/project1.png'
import Reacticon from '../../assets/img/icons8-react.svg'
import Figmaicon from '../../assets/img/icons8-figma.svg'

const Projects = () => {
  return (
    <div className="pro">
      <h1>Projects</h1>
      <div className='project1'>
        <div class="column">
            
            <img src={Project1} alt="project img" ></img>
        </div>
        <div class="column" >
            <h3>1. Spotify Clone</h3>
            <h4> This Spotify clone is a fully responsive web application designed to mimic the   ows users to explore a vast library of music, create and manage playlists, and stream their favorite songs seamlessly. The project was built to demonstrate my skills in web development, focusing on delivering an intuitive user experience with a modern UI. </h4>
            <div className='icons'>
               <img src={Figmaicon} alt="figma icon"/>
               <img src={Reacticon} alt="React icon"/>
            </div>
            <div className='buttons'>
            <a href='https://github.com/Rajgautamr/Spotify-clone'><button class="code">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
  <div class="text">Code</div>
</button></a>
<a href='https://spotify-clone-lake-five-76.vercel.app/'><button class="code" >
  <div class="text">Demo</div>
  <svg viewBox="0 0 53 58" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
  </svg>
</button></a>
</div>
        </div>
        
    </div>


    <div className='project1'>
        <div class="column">
        <h3>2.Project Name</h3>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestias eveniet facilis iusto perspiciatis corrupti corporis tenetur, eaque, optio quae culpa, ducimus esse. Quos harum atque illo maxime perspiciatis cupiditate?</h4>
            <div className='icons'>
               <img src={Figmaicon} alt="figma icon"/>
               <img src={Reacticon} alt="React icon"/>
            </div>
            <div className='buttons'>
            <button class="code">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
  <div class="text">Code</div>
</button>
<button class="code">
  <div class="text">Demo</div>
  <svg viewBox="0 0 53 58" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
  </svg>
</button>
            
        </div>
        
        </div>
        <div class="column" >
        <img src={ProjectImg} alt="project img" ></img>
      </div>
        
    </div>  

    <div className='project1'>
        <div class="column">
            
            <img src={ProjectImg} alt="project img" ></img>
        </div>
        <div class="column" >
            <h3>3. Project Name</h3>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestias eveniet facilis iusto perspiciatis corrupti corporis tenetur, eaque, optio quae culpa, ducimus esse. Quos harum atque illo maxime perspiciatis cupiditate?</h4>
            <div className='icons'>
               <img src={Figmaicon} alt="figma icon"/>
               <img src={Reacticon} alt="React icon"/>
            </div>
            <div className='buttons'>
            <button class="code">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
  <div class="text">Code</div>
</button>
<button class="code">
  <div class="text">Demo</div>
  <svg viewBox="0 0 53 58" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
  </svg>
</button>
</div>
        </div>
        
    </div>


    <div className='project1'>
        <div class="column">
        <h3>4. Project Name</h3>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestias eveniet facilis iusto perspiciatis corrupti corporis tenetur, eaque, optio quae culpa, ducimus esse. Quos harum atque illo maxime perspiciatis cupiditate?</h4>
            <div className='icons'>
               <img src={Figmaicon} alt="figma icon"/>
               <img src={Reacticon} alt="React icon"/>
            </div>
            <div className='buttons'>
            <button class="code">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
  <div class="text">Code</div>
</button>
<button class="code">
  <div class="text">Demo</div>
  <svg viewBox="0 0 53 58" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
  </svg>
</button>
            
        </div>
        
        </div>
        <div class="column" >
        <img src={ProjectImg} alt="project img" ></img>
      </div>
        
    </div>
      </div>
  )
}

export default Projects

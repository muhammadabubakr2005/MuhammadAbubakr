import "./HomeBannerStyle.css";
import cartoon from "../assets/pic6.png";


export default function HomeBanner({id}) {

  return (

    <div className="home" id={id} style={{ backdropFilter:"blur(3px)",
      webkitBackdropFilter: "blur(5px)",}}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Muhammad Abubakar</div>
              <div className="dynamicTitle">
                <div className='skill'><span>Web Developer</span></div> 
                
                {/* <div className='hrLine'> <br/></div> */}
              </div>
              <ul className="dynamicTitle" style={{marginLeft:'20px'}}>
                  <div className='skill'>+<span>App Developer</span></div>                 
                
               
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/muhammadabubakr2005/" target="_blank" rel="noopener noreferrer"style={{background: '#7722e7' ,borderColor: '#7722e7'}}>Hire Me</a>
            </div>
        </div>
        <div className="mask">

            <img className='bg' src={cartoon} alt="boy-with-laptop" />
        </div>
    </div>
  ) 
}

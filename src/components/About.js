import React,{useState} from 'react';

function About() {
    const [myStyle, setMyStyle] = useState(
    {
            color:'black',
            backgroundColor:'white',
    })

    const [btntext, setBtntext] = useState("Enable Dark Mode");
    
    const [text, settext] = useState({
        color:'black',

    });


    const toggleStyle=()=>{
        if(myStyle.color=='black'){
            setMyStyle({
                color:'white',
            backgroundColor:'black',
            })
            setBtntext("Enable White mode")
        }

        else{
            setMyStyle({
                color:'black',
            backgroundColor:'white',
            
            })
            setBtntext("Enable Dark Mode")
        }
    }


    return (
        
        <section style={myStyle}>
            <div className="sm:flex items-center max-w-screen-xl mx-auto">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img
                            src="https://i.imgur.com/WbQnbas.png"
                            alt="About our company illustration"
                        />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-{settext} border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                            About <span className="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-{settext}">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                            voluptatum.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <button onClick={toggleStyle} className='border bg-cyan-300 py-2 px-4 text-white font-bold rounded hover:bg-blue-700 transition duration'>{btntext}</button>
                </div></div>


        </section>
    );
}

export default About;

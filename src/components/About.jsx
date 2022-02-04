import React, {useState} from 'react'

export default function About() {
    const changeTheme = ()=>{
        if(myStyle.color === 'white')
        {
            setmyStyle({
                color : "black",
                backgroundColor: "white",
                border: "1px solid black"
            });
            setbtnText('Enable Dark Mode');
        }else{
            setmyStyle({
                color : "white",
                backgroundColor: "black",
                border: "1px solid white"
            });
            setbtnText('Disable Dark Mode');
        }
    }
    const [myStyle, setmyStyle] = useState({
        color : "black",
        backgroundColor: "white",
        border: "1px solid black"
    });
    const [btnText, setbtnText] = useState('Enable Dark Mode');
    
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                            Who am I?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias incidunt sint rem quod, tempora facilis! Doloremque ad commodi natus dolorum rem voluptatem quas ea ab suscipit accusamus corrupti soluta impedit repudiandae blanditiis minima veniam dolorem laboriosam temporibus, consectetur libero quibusdam? Assumenda voluptas quidem necessitatibus animi, asperiores magni placeat natus!</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" style={myStyle} aria-controls="flush-collapseTwo">
                            My Mission
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem dolores tempore quaerat aut, accusantium temporibus unde, recusandae doloribus quidem, vero debitis magnam odit nihil libero. Voluptatem iste magni totam exercitationem fugiat! Corporis atque reprehenderit nihil aut cupiditate labore, mollitia odio earum, nobis tenetur id beatae veritatis pariatur autem ipsam!</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" style={myStyle} aria-expanded="false" aria-controls="flush-collapseThree">
                            What do I do?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum dolores ipsam laboriosam quos, ad provident in impedit voluptate optio tempore odio repellat tenetur iste quia rerum saepe consequatur eum. Aspernatur voluptate distinctio ullam neque? Aperiam voluptates saepe debitis nulla quod blanditiis laudantium nisi quam hic id! Quae similique, numquam aspernatur repellat saepe consequatur ipsa quis natus cupiditate perferendis iste repellendus molestiae autem neque facilis. Deserunt dolores asperiores perspiciatis quisquam velit? Atque, voluptatibus! Maxime impedit fuga veritatis architecto sapiente, quas aliquam eos unde rerum maiores adipisci neque consectetur, ipsa voluptatem est amet optio a magni, exercitationem illum voluptatibus sunt vero!</div>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <button className='btn btn-primary btn-sm' onClick={changeTheme}>{btnText}</button>
            </div>
        </div>
    )
}

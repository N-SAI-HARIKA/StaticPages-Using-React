import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({ title, text, imgSrc }) => {
    return (
        <div className="col">
            <div className="card" >
                <img src={imgSrc} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

const CardGrid = () => {
    const cardsData = [
        {
            title: "Global Leaders in training",
            text: "We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/14803/14803892.png"
        },
        {
            title: "Practical oriented approach",
            text: "Our training methodology isn't confined to theoretical one; We have an exposure towards the real-time industry training by industry experts professionals.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/5595/5595667.png"
        },
        {
            title: "Hands-on projects & Internship",
            text: "We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/9968/9968633.png"
        },
        {
            title: "100% Placement Assistance",
            text: "We promise Career Transformation; Having collaborations with top-notch companies and a dedicated placement vertical to help trainees aspire to aspirations.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/13066/13066298.png"
        }
    ];

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {cardsData.map((card, index) => (
                <CardComponent 
                    key={index}
                    title={card.title}
                    text={card.text}
                    imgSrc={card.imgSrc}
                />
            ))}
        </div>
    );
};
export default CardGrid;

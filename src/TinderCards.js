import React, { useState , useEffect } from 'react';
import './TinderCards.css';
import axios from './axios';
import TinderCard from 'react-tinder-card';



function TinderCards() {
    const [people, setPeople] = useState([
        {
            name : "Hot khaliuna",
            url : "https://t1.daumcdn.net/news/201807/21/newsen/20180721171237719gxbl.jpg"
        },
        {
            name : "Bad Khuraa",
            url : "https://static.wikia.nocookie.net/blinks/images/5/51/The_Album_Jennie_Teaser_Poster_1.jpg"
        },
        {
            name : "Goril Usuhuu",
            url : "https://assets-natgeotv.fnghub.com/Shows/26917.jpg"
        },
        {
            name : "yanhsuh",
            url :"https://storage.googleapis.com/syncable-app/associate%2Flogos%2Fbfb21e168f864107bc4c6b8728a08527.jpg"
        },
        {
            name : "evgui haraad dardag zaluu",
            url : "https://pbs.twimg.com/profile_images/555222237519695872/9-hH7RTx.jpeg"
        },
    ])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe= {["up", "down"]}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{backgroundImage: `url(${person.imgUrl})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards

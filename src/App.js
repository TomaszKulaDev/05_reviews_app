import React, {useState} from 'react';
import people from "./data";


const App = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const randomPerson = () =>{
        let randomNumber = Math.floor(Math.random()*people.length)
        if (randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    const nextPerson = () => {
        setIndex((currIndex) => {
            const newIndex = currIndex + 1;
            if (newIndex > people.length - 1) {
                return 0;
            }
            return checkNumber(newIndex);
        })
    }
    const prevPerson = () => {
        setIndex((currIndex) => {
            const newIndex = currIndex - 1;
            if (newIndex < 0) {
                return people.length - 1;
            }
            return checkNumber(newIndex);
        })
    }
    return (
        <main style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <article style={{
                width: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={image} style={{width: 250, height: 250, objectFit: "cover"}} alt={name}/>
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
                <div>
                    <button type='button' onClick={nextPerson}>Next</button>
                    <button type='button' onClick={randomPerson}>Random</button>
                    <button type='button' onClick={prevPerson}>Prev</button>
                </div>
            </article>
        </main>
    );
}

export default App;

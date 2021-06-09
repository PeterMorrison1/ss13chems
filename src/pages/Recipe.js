import { React, useState, useEffect } from 'react';



const Recipes = ({ recipeData, setRecipe }) => {
    const [viewedRecipe, setViewedRecipe] = useState(recipeData)
    const [info, setInfo] = useState([""])

    useEffect(() => {
        setViewedRecipe(recipeData);
    }, [recipeData])
  

    // useEffect(() => {
    //     console.log(viewedRecipe)
    //     let infoStuff = []
    //     Object.keys(viewedRecipe.info).forEach(function (key, index) {
    //         infoStuff.push(key);
    //     })
    //     console.log(infoStuff)
    //     setInfo(infoStuff)

    // }, [])

    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{viewedRecipe.name}</h2>
            <h3>Sources:</h3>{viewedRecipe.sources.map(s => <><span>{s}</span><br/></>)}
            <h3>Tags:</h3>{viewedRecipe.tags.map(t => <><span>{t}</span><br/></>)}
            {/* <h3>Tags:</h3>{viewedRecipe.ingredients.map(i => <><span>{i}</span><br/></>)} */}

        </div>
    );
}

export default Recipes
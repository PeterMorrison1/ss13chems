import { React, useState, useEffect } from 'react';
import { Tag } from 'antd';


const Recipes = ({ recipeData, setRecipe, recipeList }) => {
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
            <h1>{viewedRecipe.name}</h1>
            <h2>Sources:</h2><ul>{viewedRecipe.sources && viewedRecipe.sources.map(s => <li><span>{s}</span></li>)}</ul>
            <h2>Tags: <br />{viewedRecipe.tags.map(tag =>
                <Tag key={tag} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{tag}</Tag>)
            }</h2>

            <h2>Instructions:</h2><ol>{viewedRecipe.recipe && viewedRecipe.recipe.map(tag =>
                <li key={tag.name} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{
                    tag
                }</li>)
            }</ol>

            {/* <h3>Tags:</h3>{viewedRecipe.tags.map(t => <><span>{t}</span><br/></>)} */}
            {/* <h3>Tags:</h3>{viewedRecipe.ingredients.map(i => <><span>{i}</span><br/></>)} */}

        </div>
    );
}

export default Recipes
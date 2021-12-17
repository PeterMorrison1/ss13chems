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

    return (
        <div>
            {console.log(recipeList.recipes.filter(element => element.name.includes("Char")))}
            <h1>{viewedRecipe.name}</h1>
            <h2>Sources:</h2><ul>{viewedRecipe.sources && viewedRecipe.sources.map(s => <li><span>{s}</span></li>)}</ul>
            <h2>Tags: <br />{viewedRecipe.tags.map(tag =>
                <Tag key={tag} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{tag}</Tag>)
            }</h2>

            <h2>Instructions:</h2><ol style={{ marginLeft: '30%', padding: 0, textAlign: 'left' }}>{viewedRecipe.recipe && viewedRecipe.recipe.map(tag =>
                <li key={tag.name} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>
                    {tag}
                    <br /><ul>{recipeList.recipes.filter(element => tag.includes(element.name)) && recipeList.recipes.filter(element => tag.includes(element.name)).map(tag2 =>
                        
                        tag2.recipe != null ?
                            tag2.recipe.map(t => 
                                <li key={t} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{
                                    t

                                }</li>
                            )
                            :
                            tag2.sources != null ?
                            tag2.sources.map(t => 
                                <li key={t} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{
                                    t

                                }</li>
                            )
                            : 
                            tag2.ingredients.map(t => 
                                <li key={t} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{
                                    t

                                }</li>
                            )

                        /*<li key={tag2.name} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace'] }}>{
                            tag2.recipe != null ? tag2.recipe : tag2.sources

                        }</li>*/

                    )
                    }</ul>
                    {/* {
                    tag
                    
                } */}
                </li>)
            }</ol>

            {/* <h3>Tags:</h3>{viewedRecipe.tags.map(t => <><span>{t}</span><br/></>)} */}
            {/* <h3>Tags:</h3>{viewedRecipe.ingredients.map(i => <><span>{i}</span><br/></>)} */}

        </div>
    );
}

export default Recipes
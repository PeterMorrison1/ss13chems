import { React, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
// import data from '../data.json';
// import tagdata from '../tags.json'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Tag, Select } from 'antd';
import TagSelector from '../components/TagSelector'

const { Option, OptGroup } = Select;

const List = styled.ul`
    list-style-type: none;
    padding-left: 1vw;
    margin: 0;
    flex-grow: 2;
    overflow: scroll;
    max-height: 89vh;
`;


const BrowserContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ListContainer = styled.li`
    display: flex;
    flex-wrap: wrap;
`

const Name = styled.span`
    width: 80%;
    padding-bottom: 2vh;
    font-family: 'Courier New', 'Courier', 'monospace' !important;
    font-size: medium;
`

const ListTags = styled.div`
    flex-grow: 0;
`

const mTag = styled.button`
    flex-grow: 0;
    align-self: flex-end;
    
`


const Browser = ({ recipeData, setRecipe }) => {

    const [data, setData] = useState(recipeData.recipes)
    const [tagData, setTagData] = useState([])

    // const handleRecipeClick = useCallback(() => setRecipe())

    // const [recipe, setRecipe] = useState(null)
    const recipeTags = recipeData.recipes.map((element) =>
        <Tag key={element.name}>{element.name}</Tag>
    );

    function handleChangeTagSelector(value) {
        if (value.length === 0) {
            setData(recipeData.recipes)
        } else {
            let newData = recipeData.recipes.filter((tags) => {
                for (var i = 0; i < value.length; i++) {
                    if (tags.tags.includes(value[i])) {
                        return true
                    }
                }
                return false
            })
            console.log(newData)
            setData(newData)
        }
    }
    
    const recipes = data.map((element) =>
        <ListContainer key={element.name + element.ingredients}>
            <Name>{element.name}</Name>
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={()=>setRecipe(element)}/>

            {
                element.tags.map((tag) =>
                    <Tag key={tag} style={{ marginTop: '1vh', fontFamily: ['Courier New', 'Courier', 'monospace']}}>{tag}</Tag>
                )
            }
            <Divider />
        </ListContainer>
    );

    // Sets the tag select list
    useEffect(() => {
        recipeData.tags.map((category) => {
            let tagStuff = []
            for (let element in category) {
                let tagCategory = []
                tagCategory.push(element);
                Object.keys(category[element]).forEach(function (key, index) {
                    tagCategory.push(key);
                })
                tagStuff.push(tagCategory)
            }
            // setTagData(oldArray => [...oldArray, tagStuff]);
            setTagData(tagStuff)
            console.log(tagData)
        })
    }, [])

    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div>
            {/* <ul style={{listStyleType: "none"}}>{recipes}</ul> */}
            <span style={{fontFamily: ['Courier New', 'Courier', 'monospace']}}>Recipes</span>
            <TagSelector tagData={tagData} handleChange={handleChangeTagSelector} />

            <Divider />
            <List >{recipes}</List>
        </div>
    );
}

export default Browser
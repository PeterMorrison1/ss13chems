import { React, useState } from 'react';
import styled from 'styled-components';
// import data from '../data.json';
// import tagdata from '../tags.json'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Tag, Select } from 'antd';

const { Option, OptGroup } = Select;


const TagSelector = ({ tagData, handleChange }) => {

    // const [data, setData] = useState(tagData)

    // Sets the tag select list
    // let tagStuff = []
    // data.tags.map((category) => {
    //     for (let element in category) {
    //         let tagCategory = []
    //         tagCategory.push(element);
    //         Object.keys(category[element]).forEach(function (key, index) {
    //             tagCategory.push(key);
    //             return <Option value={key}>{key}</Option>
    //         })
    //         tagStuff.push(tagCategory);
    //     }
    // })

    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <Select
            mode="multiple"
            allowclear='true'
            placeholder="Please select"
            style={{ width: '100%' }}
            onChange={handleChange}
        >
            {
                tagData.map((category) =>
                    <OptGroup label={category[0]}>
                        {category.slice(1).map((tag) => <Option key={tag} value={tag}>{tag}</Option>)}
                    </OptGroup>
                )
            }
        </Select>
    );
}

export default TagSelector
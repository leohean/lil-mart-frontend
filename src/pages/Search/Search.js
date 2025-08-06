import {useState} from 'react'
import Card from './../../components/Card/Card.js'
import {useProductData} from './../../hooks/useProductData.ts'

export default function Search(){
    const {data}= useProductData();
    return(
        <div>
            <div className="card-grid">
                {data?.map(foodData => 
                <Card 
                    name={foodData.name} 
                />)}
            </div>
        </div>
    );
}
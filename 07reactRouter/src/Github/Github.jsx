import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Siddhi-22')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])


    return (
        
        <div className='text-center text-2xl text-white m-4 p-2 bg-gray-400 '>
            Github followers: {data.followers}
            Github following: {data.following}

            <img src={data.avatar_url} alt='Git Profile' width={300} />
            <h4>{data.login}</h4>
        </div>
       
    );
};

export default Github;


export const GithubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Siddhi-22')
    return res.json();
}
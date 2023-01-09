import React from 'react'

const Project = ({data}) => {
    console.log(data.items)
  return(
    <div>
        
        <div>
            {data.items.map((el,i)=>(
                <div key={el.id}>
                <h2><a href={el.html_url}>{el.name}</a></h2>
                <p>Forks:{el.forks}</p>
                <p>Stars:{el.stargazers_count}</p>
                <p>Language:{el.language}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
    const res=await fetch("https://api.github.com/search/repositories?q=user:ALOK6103+fork:true&sort=updated&per_page=10&type=Repositories/items")
    const data=await res.json()
    return {
        props:{
            data:data
        }
    }
}

export default Project
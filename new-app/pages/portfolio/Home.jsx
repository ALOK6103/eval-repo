import React from 'react'

const Home = ({data}) => {
  return (
    <div>
      <img alt="alok" src={data.avatar_url} width="200px" height="200px"/>
      <h1>{data.name}</h1>
      <p>{data.login}</p>
      <div >
        <button style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"lightsalmon"}}>Resume</button>
        <button style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"lightsalmon",marginLeft:"40px"}}>Follow</button>
      </div>
      <div style={{display:"flex",gap:"5px", backgroundColor:"cyan",width:"350px",marginTop:"20px"}}>
        <p>Full Stack Web-Devloper</p> <p>JavaScript</p><p>Html</p><p>CSS</p><p>React</p>
      </div>
      <div>
        <h2>Masai School</h2>
      </div>
    </div>
  )
}

export async function getStaticProps(){
    const res=await fetch("https://api.github.com/users/ALOK6103")
    const data=await res.json()
    return {
        props:{
            data:data
        }
    }
}



export default Home
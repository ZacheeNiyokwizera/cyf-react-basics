import React from 'react'

function ParentComp () {
    let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];

let userName = 'John Smith'; 
let userId = 12345; 

  return (
    <div>
    <TestComponent  userId={userId} userName={userName} data={abilities} />
   
    </div>
  )
}

function TestComponent(props){
 
console.log(props)

const {userName, userId} = props;

    return (

<div>
<h2>Hello</h2>
<p>{userName}</p>
<p>{userId}</p>
</div>

    )
}





export default ParentComp;

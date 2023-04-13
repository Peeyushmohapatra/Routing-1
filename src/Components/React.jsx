// import React from 'react'

const React = () => {
  return (
    <div style={{display:"flex"}}>
        <div>
        <h2>React Language</h2>
            <img height="300px" width="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
        </div>
        <div style={{height:"100%",width:"50%",display:"flex",flexDirection:"column",gap:"30px"}}>
            <dl style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",gap:"10px"}}>
                <dt><b>Language</b></dt>
                <dd>React</dd>
                <dt><b>Description</b></dt>
                <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ex repellat hic reiciendis placeat pariatur amet perferendis at praesentium quidem. Nisi odit voluptatibus repudiandae. Maxime, sint veritatis doloremque tenetur architecto a quod quidem. Harum ipsum, reiciendis hic labore quaerat nam quia totam explicabo repellendus enim qui, blanditiis distinctio ad et.</dd>
            </dl>
        </div>
    </div>
  )
}

export default React
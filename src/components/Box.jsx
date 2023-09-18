import React from 'react'

export default function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[1,1,1]}/>
      <meshLambertMaterial attach='material' color='green'/>
    </mesh>
  )
}

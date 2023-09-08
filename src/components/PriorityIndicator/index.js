import React from 'react'

export const PriorityIndicator = (props) => {
  let div1Class = 'container rounded w-3 h-4 bg-white';
  let div2Class = 'container rounded w-3 h-4 bg-white';
  let div3Class = 'container rounded w-3 h-4 bg-white';

  if(props.data === "baixa") {
    div1Class = 'container rounded w-3 h-4 bg-green-400';
  }else if(props.data === "media") {
    div1Class = 'container rounded w-3 h-4 bg-yellow-300';
    div2Class = 'container rounded w-3 h-4 bg-yellow-300';
  }else {
    div1Class = 'container rounded w-3 h-4 bg-red-500';
    div2Class = 'container rounded w-3 h-4 bg-red-500';
    div3Class = 'container rounded w-3 h-4 bg-red-500';
  }


  return (
    <div className="grid grid-cols-3 gap-1">
      <div className={div1Class}></div>
      <div className={div2Class}></div>
      <div className={div3Class}></div>
    </div>
  )
}

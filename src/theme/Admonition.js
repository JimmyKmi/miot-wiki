import React from 'react';
import Admonition from '@theme-original/Admonition';

export default function AdmonitionWrapper(props) {
  switch(props.type)
  {

    case 'event':

    if(props.title == null)
    {
      props.title = '触发事件';
    }

      return (
        <div class="card-event" >
          <div class="card-title" >{props.title}</div>
          <div class="card-value" >{props.children}</div>
        </div>);

    case 'condition':

      if(props.title == null)
      {
        props.title = '状态条件';
      }

      <div class="card-condition" >
      <div class="card-title" >{props.title}</div>
      <div class="card-value">{props.children}</div>
    </div>);
    default:
      return <Admonition {...props} />;
  }
}
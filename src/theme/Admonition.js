import React from 'react';
import Admonition from '@theme-original/Admonition';

export default function AdmonitionWrapper(props) {
  switch (props.type) {

    case 'event':

      //如果没有设置标题，则默认标题
      if (props.title == null) {
        props.title = '可触发的事件';
      }

      var code = getcode(props);

      return (
        <div class="card-event" >
          <div class="card-title" >{props.title}</div>
          <div class="card-value" dangerouslySetInnerHTML={{ __html: code }}></div>
        </div>);

    case 'condition':

      //如果没有设置标题，则默认标题
      if (props.title == null) {
        props.title = '可用的状态条件';
      }

      var code = getcode(props);

      return (
        <div class="card-condition" >
          <div class="card-title" >{props.title}</div>
          <div class="card-value" dangerouslySetInnerHTML={{ __html: code }}></div>
        </div>);

    case 'action':

      //如果没有设置标题，则默认标题
      if (props.title == null) {
        props.title = '可用的执行';
      }

      var code = getcode(props);

      return (
        <div class="card-action" >
          <div class="card-title" >{props.title}</div>
          <div class="card-value" dangerouslySetInnerHTML={{ __html: code }}></div>
        </div>);

    default:
      return <Admonition {...props} />;
  }
}

function getcode(props) {

  if(props.children == null){
    return '<code>不可用</code>'
  }

  var code = '';
  var data = props.children.props.children.toString().split('、');
  data.map(item => {
    code += '<code>' + item + '</code>'
  })
  return code;
}
import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function event(props) {
  return (
    <div style={{border: 'solid red', padding: 10}}>
      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}

function condition(props) {
    return (
        <div class="theme-admonition theme-admonition-tip alert alert--success admonition_LlT9">
        <div class="admonitionHeading_tbUL">状态条件</div>
        <div class="admonitionContent_S0QG">{props.children}</div>
    </div>
    );
  }

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'my-custom-admonition': MyCustomAdmonition,
};

export default AdmonitionTypes;
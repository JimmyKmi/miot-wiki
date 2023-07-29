import React from 'react';
import Admonition from '@theme-original/Admonition';

export default function AdmonitionWrapper(props) {
  switch(props.type)
  {

    case 'event':
      return (
        <div class="theme-admonition theme-admonition-tip alert alert--success admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">状态条件</div>
          <div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">{props.children}</div>
        </div>);

    case 'condition':
      return (
        <div class="theme-admonition theme-admonition-tip alert alert--success admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">状态条件</div>
          <div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">{props.children}</div>
        </div>);
    default:
      return <Admonition {...props} />;
  }
}
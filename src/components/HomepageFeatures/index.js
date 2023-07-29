import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '易懂且富有拓展性',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          「米家全书」提供简明易懂的文档，让用户轻松理解，同时拥有丰富的拓展内容，助力用户获得更多有用的信息和技巧。
      </>
    ),
  },
  {
    title: '保持纯净非盈利不恰饭',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          我们维护「米家全书」的纯净性，不允许发布任何商业广告，不评价产品性能好坏，只从自动化角度出发协助用户配置更智能的家。
      </>
    ),
  },
  {
    title: '开放共享，人人均可参与',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          加入我们的「米家全书」，欢迎您参与共享！这个开放的平台鼓励用户贡献经验、心得和技巧，与社区互动，共同建设这个有益于米家用户的知识库。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

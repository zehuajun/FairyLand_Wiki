import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '内容丰富',
    description: (
      <>
        本 Wiki 所含内容丰富，涵盖 FairyLand 服务器所有的使用教程。
      </>
    ),
  },
  {
    title: '内容最新',
    description: (
      <>
        本 Wiki 实时追踪服务器动态，确保所提供内容始终保持最新。
      </>
    ),
  },
  {
    title: '社区 Wiki',
    description: (
      <>
        本 Wiki 在 Github 开源，欢迎加入我们的创作之旅，共同编织精彩！
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

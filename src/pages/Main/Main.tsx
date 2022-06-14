import React, { FunctionComponent } from 'react';
import Card from 'components/Card';

const Main: FunctionComponent = () => {
  return (
    <div>
      Main
      {Card_List.map(({ ingredient, name }, index) => (
        <Card key={name + index} ingredient={ingredient} name={name} />
      ))}
    </div>
  );
};

const Card_List = [
  { ingredient: 'tomato', name: '적극적인 토마토' },
  { ingredient: 'lettuce', name: '수용적인 양상추' },
  { ingredient: 'paprika', name: '도전적인 파프리카' },
  { ingredient: 'broccoli', name: '안정적인 브로콜리' },
  { ingredient: 'avocado', name: '리더쉽의 아보카도' },
  { ingredient: 'olives', name: '책임감의 올리브' },
  { ingredient: 'mayo', name: '계획적인 마요네즈' },
  { ingredient: 'balsamic', name: '즉흥적인 발사믹' },
  { ingredient: 'salmon', name: '사교적인 연어' },
  { ingredient: 'bacon', name: '워커홀릭 베이컨' },
];
export default Main;

import { FC } from 'react';

type PropTypes = {
  n: number;
};
const Spacer: FC<PropTypes> = ({ n }) => {
  const renderBr = () => {
    const brs = [];
    for (let i = 0; i < n; i++) {
      brs.push(<br key={i} />);
    }
    return brs;
  };
  return <>{renderBr()}</>;
};

export default Spacer;

import React, { memo } from 'react';
import Top from './components/Top';
import Description from './components/Description';

interface Props {}

function Index(props: Props) {
  return (
    <div>
      <Top />
      <Description />
    </div>
  )
}

export default memo(Index)

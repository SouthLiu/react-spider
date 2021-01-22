import React, { memo } from 'react';
import Inputs from './components/Inputs'

interface Props {}

function Index(props: Props) {
  return (
    <div>
      <Inputs />
    </div>
  )
}

export default memo(Index)

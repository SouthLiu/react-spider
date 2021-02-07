import React from 'react';
import style from './Description.module.css';
import { info } from './Description.module'

function Description() {
  return (
    <div className={style.box}>
      {
        info.length > 0 && info.map((item, index) => {
          return (
            <div key={index} className={style.info_box}>
              <h1 className={style.title}>{ item.title }</h1>
              <p className={style.description}>{ item.description }</p>
              <ul>
                {
                  item.details.length > 0 && item.details.map(item => {
                    return <li key={item} className={style.li}>{ item }</li>
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Description

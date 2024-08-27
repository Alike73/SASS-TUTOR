import { getStyle } from "../../helper/getStyle";
import styles from './_Stack.module.scss';


export const Stack = ({children, direction='row', justify, align, wrap, max}) => {
  
  const mode = {
    [styles.max]: max
  }

  const additional = [
    styles[direction],
    styles[justify],
    styles[align],
    styles[wrap],
  ]

  return (
    <div className={ getStyle(styles.flex, mode, additional) }>
      { children }
    </div>
  )
};
import { Thumbnails, Title } from './style'

import { IObj, TStyle } from './type'

// *Store
import { useSelector } from 'react-redux'


export const Filter = ({ title }: TStyle) => {
  const { image } = useSelector((state: any) => state);

    const filterNames: IObj = {
      normal: 'none',
      sepia: 'sepia(100%)',
      contrast: 'contrast(100%)',
      saturate: 'saturate(2)',
      grey: 'grayscale(100%)',
      hue: 'hue-rotate(80deg)',
      hue180: 'hue-rotate(180deg)',
      hue280: 'hue-rotate(280deg)'
    }

    const filter:string  = filterNames[title] 

    console.log('23 filter >>> ', filter);
  return (
    <>
      {/* <Title>{title}</Title> */}
      <Thumbnails src={image.source} filter={filter} />
    </>
  )
}


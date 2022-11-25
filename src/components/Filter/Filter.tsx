import { useEffect, useState } from 'react'
import { ContainerThumbnail, Thumbnails, Title } from './style'

import { IObj, TStyle } from './type'

// *Store
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from "../../../src/store/reducerImage"

// * Icon
import { BsFilterCircle } from 'react-icons/bs'

// TODO Set the title to each filter 

export const Filter = ({ title }: TStyle) => {

  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const filterNames: IObj = {
    normal: 'none',
    sepia: 'sepia(100%)',
    contrast: 'contrast(50%)',
    saturate: 'saturate(2)',
    grey: 'grayscale(100%)',
    hue: 'hue-rotate(80deg)',
    hue180: 'hue-rotate(180deg)',
    hue280: 'hue-rotate(280deg)'
  }

  const filter: string = filterNames[title.toLocaleLowerCase()]

  const handleClick = () => {
    dispatch(changeFilter(filter))
  }

  return (
    <ContainerThumbnail>
      {image.source
        ? (
          <>
            <Title>{title}</Title>
            <Thumbnails src={image.source} filter={filter} onClick={handleClick} alt='Thumbnail photo' />
          </>
        )
        : <BsFilterCircle size={'30px'} />
      }
    </ContainerThumbnail>
  )
}


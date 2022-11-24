import { useNearScreen } from '../../hooks/useNearScreen'

import { ImgWrapper, Image, Article, ImageInfo, ArticleInfo, HeartWrapped } from './style'
import { ICard } from './type'

import { AiFillHeart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { likeManage } from '../../../src/store/reducerImage'
import { useEffect, useRef } from 'react'



export const Card = ({ title, date, source, filter, id }: ICard): JSX.Element => {
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch()

  const imageClick = useRef<HTMLDivElement>(null)
  const [show, ref] = useNearScreen()

  const bigTitle: string = '10px'
  const smallTitle: string = '8px'
  const mediumIcon = '30px'

  const handleLike = () => {
    const liked = image.list[id].liked
    dispatch(likeManage({ id, liked: !liked }))
  }

  imageClick.current?.addEventListener('dblclick', () => console.log('31  >>> ', 'entre'))

  const handleDoubleClick = (event: any) => {
    if (event.detail === 2) {
      console.log('double click');
    }
  }

  return (
    <Article ref={ref as any}>
      {show &&
        <>
          <ArticleInfo >
            <ImageInfo size={bigTitle} color={'black'} >{title}</ImageInfo>
            <ImageInfo size={smallTitle} color={'grey'}>{date as any}</ImageInfo>
          </ArticleInfo>
          <ImgWrapper onClick={handleDoubleClick} ref={imageClick as any} >
            <Image src={source} filter={filter as string} alt={title} />
            <HeartWrapped>
              <AiFillHeart color={image.list[id].liked ? 'red' : 'white'} size={mediumIcon} onClick={handleLike} />
            </HeartWrapped>
          </ImgWrapper>
        </>
      }
    </Article>
  )
}

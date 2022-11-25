import { useInView } from 'react-intersection-observer';

import { ImgWrapper, Image, Article, ImageInfo, ArticleInfo, HeartWrapped } from './style'
import { ICard } from './type'

import { AiFillHeart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { likeManage } from '../../../src/store/reducerImage'
import { useState } from 'react'



export const Card = ({ title, date, source, filter, id }: ICard): JSX.Element => {
  //* Store
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch()
  // *State
  const [tapsNumber, setTapsNumber] = useState<number>(0);
  const [startDate, setStartDate] = useState<number>(Date.now());

  const { ref, entry } = useInView({
    threshold: 0.2,
  });

  const bigTitle: string = '10px'
  const smallTitle: string = '8px'
  const mediumIcon = '30px'

  const handleLike = () => {
    const liked = image.list[id].liked
    dispatch(likeManage({ id, liked: !liked }))
  }

  const handleDoubleClick = () => {
    if (tapsNumber >= 1 && Date.now() - startDate < 500) {
      setStartDate(Date.now());
      setTapsNumber(0);
      handleLike()
    } else {
      setStartDate(Date.now());
      setTapsNumber(prevNr => prevNr + 1);
    }
  };

  return (
    <Article ref={ref} >
      {entry?.isIntersecting &&
        <>
          <ArticleInfo >
            <ImageInfo size={bigTitle} color={'black'} >{title}</ImageInfo>
            <ImageInfo size={smallTitle} color={'grey'}>{date as any}</ImageInfo>
          </ArticleInfo>
          <ImgWrapper  >
            <Image src={source} filter={filter as string} alt={title} onClick={handleDoubleClick} />
            <HeartWrapped>
              <AiFillHeart color={image.list[id].liked ? 'red' : 'white'} size={mediumIcon} onClick={handleLike} />
            </HeartWrapped>
          </ImgWrapper>
        </>
      }
    </Article>
  )
}

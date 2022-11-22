import { Link } from 'react-router-dom'
import { useNearScreen } from '../../hooks/useNearScreen'

import { ImgWrapper, Image, Article, ImageInfo, ArticleInfo } from './style'


export const Card = () => {
  const [show, ref] = useNearScreen()
  // const [liked, setLiked] = useLocalStorage(key, false)
  const imageUrlTest = 'https://www.businessinsider.in/thumb/msid-87162892,width-700,resizemode-4,imgsize-36280/cryptocurrency/news/most-expensive-bored-ape-nft-sells-for-2-7-million/trippy-bored-ape.jpg'
  // const show = true;

  const bigTitle: string = '10px'
  const smallTitle: string = '8px'

  return (
    <Article ref = {ref as any}>
      {show &&
        <>
        <ArticleInfo >
          <ImageInfo size={bigTitle} >Name</ImageInfo>
          <ImageInfo size={smallTitle} >Date</ImageInfo>
        </ArticleInfo>
          <Link to={`/detail/${'id'}`}>
            <ImgWrapper>
              <Image src={imageUrlTest} />
            </ImgWrapper>
          </Link>
          {/* <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleClick = () => {
                                !liked && toggleLike({variables:{
                                    input: {id}
                                }})
                                    setLiked(!liked)
                                }
                                return <FavButton liked={liked} likes={likes} onClick={handleClick} />
                            }
                        }
                    </ToggleLikeMutation> */}
        </>
      }
    </Article>
  )
}



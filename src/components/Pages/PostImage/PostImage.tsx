// * Dependencies
import { useCallback, useState } from "react"
// *Components
import { ContainerForm, Label, Input, Button } from "./style"
import { ImgWrapper, Image, Article } from '../../Card/style'
import { AllFilters } from '../../AllFilters/AllFilters'
// *Icons
import { BsUpload } from 'react-icons/bs'
// * Store
import { useSelector, useDispatch } from 'react-redux'
import { setSource } from "../../../../src/store/reducerImage"


const PostImage = () => {
  const imageUrlTest: string = 'https://www.businessinsider.in/thumb/msid-87162892,width-700,resizemode-4,imgsize-36280/cryptocurrency/news/most-expensive-bored-ape-nft-sells-for-2-7-million/trippy-bored-ape.jpg'
  const size: string = '100px'
  // *States
  const [imageUrl, setImageUrl] = useState<string>('')
  const [show, setShow] = useState<boolean>(true)
  // * State Store
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleOnChange = useCallback((event: any) =>
    setImageUrl(event.target.value), [imageUrl]
  )

  const handleClick = () => {
    setShow(!show)
    try {
      new URL(imageUrl)
      dispatch(setSource(imageUrl))
    } catch {
      alert('The url is not valid')
    }
  }

  return (
    <>
      {show &&
        <ContainerForm>
          <Label >Enter an Image URL</Label>
          <Input placeholder='' onChange={(event) => handleOnChange(event)} />
        </ContainerForm>
      }
      <Article>
        <ImgWrapper>
          {image.source
            ? <Image src={image.source} />
            : <BsUpload color="white" size={size} />
          }
        </ImgWrapper>
      </Article>
      {/* <Label >Give it a name:</Label>
      <Input placeholder='' onChange={(event) => handleOnChange(event)} /> */}
      <AllFilters />
      <Button onClick={handleClick}>
        Post Now!
      </Button>
    </>
  )
}

export default PostImage
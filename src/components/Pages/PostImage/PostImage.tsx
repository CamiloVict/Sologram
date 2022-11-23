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
import { changeSource } from "../../../../src/store/reducerImage"


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
    setImageUrl(event.target.value), [imageUrl])

  const handleUpload = () => {
    try {
      new URL(imageUrl)
      setShow(!show)
      dispatch(changeSource(imageUrl))
    } catch {
      alert('The url is not valid')
    }
  }

  const handleClick = () => {
    console.log('40  >>> Uploading...',);
  }

  return (
    <>
        <ContainerForm>
          <Label >Enter an Image URL</Label>
          <Input placeholder='' onChange={(event) => handleOnChange(event)} />
          <Button onClick={handleUpload} >Upload!</Button>
        </ContainerForm>
      <Article>
        <ImgWrapper>
          {image.source
            ? <Image src={image.source} filter={image.filter} />
            : <BsUpload color="white" size={size} />
          }
        </ImgWrapper>
      </Article>
      <div>
      <Label >Give it a name:</Label>
      <Input placeholder='' onChange={(event) => handleOnChange(event)} />
      </div>
      <AllFilters />

      <Button onClick={handleClick}>
        Post Now!
      </Button>
    </>
  )
}

export default PostImage
// * Dependencies
import { useCallback, useState } from "react"
// *Components
import { ContainerForm, Label, Input, Button } from "./style"
import { ImgWrapper, Image, Article } from '../../Card/style'
import { AllFilters } from '../../Filters/Filters'
// *Icons
import { BsUpload } from 'react-icons/bs'


const PostImage = () => {
  const size: string = '100px'
  const imageUrlTest: string = 'https://www.businessinsider.in/thumb/msid-87162892,width-700,resizemode-4,imgsize-36280/cryptocurrency/news/most-expensive-bored-ape-nft-sells-for-2-7-million/trippy-bored-ape.jpg'
  // *States
  const [imageUrl, setImageUrl] = useState<string>('')
  const [image, setImage] = useState<string>('')


  const handleOnChange = useCallback((event: any) =>
    setImageUrl(event.target.value), [imageUrl]
  )

  const handleClick = () => {
    try {
      new URL(imageUrl)
      setImage(imageUrl)
      return true
    } catch {
      alert('The url is not valid')
    }
  }

  return (
    <>
      <ContainerForm>
        <Label >Enter an Image URL</Label>
        <Input placeholder='' onChange={(event) => handleOnChange(event)} />
      </ContainerForm>
      <Article>
        <ImgWrapper>
          {image
            ? <Image src={image} />
            : <BsUpload color="white" size={size} />
          }
        </ImgWrapper>
      </Article>
      <Label >Give it a name:</Label>
      <Input placeholder='' onChange={(event) => handleOnChange(event)} />
      <AllFilters />
      <Button onClick={handleClick}>
        Post Now!
      </Button>
    </>
  )
}

export default PostImage
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
// *Enums
import { filtersEnum } from '../../../utils/enums/filters'

const PostImage = () => {
  const imageUrlTest: string = 'https://www.businessinsider.in/thumb/msid-87162892,width-700,resizemode-4,imgsize-36280/cryptocurrency/news/most-expensive-bored-ape-nft-sells-for-2-7-million/trippy-bored-ape.jpg'
  const size: string = '100px'
  // *States
  const [imageUrl, setImageUrl] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  // * State Store
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleOnChange = useCallback((event: any) =>
    setImageUrl(event.target.value), [imageUrl])

  const handleOnChangeName = useCallback((event: any) =>
    setName(event.target.value), [])

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
    console.log('40  >>> Uploading...', show);
    console.log('43  >>>>>>>>> ');
    try {
      window.localStorage.setItem(name, JSON.stringify(image.source));
    } catch (e) {
      console.log('47  >>>>>>>>> ');
      console.error(e);
    }
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
        <Label>Give it a name:</Label>
        <Input placeholder='' onChange={(event) => handleOnChangeName(event)} />
      </div>
      <AllFilters />

      <Button onClick={handleClick} disabled={show ? false : true} >
        Post Now!
      </Button>
    </>
  )
}

export default PostImage
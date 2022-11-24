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
import { changeFilter, changeSource } from "../../../../src/store/reducerImage"
// * Router
import { useNavigate } from 'react-router-dom';

const PostImage = () => {
  const size: string = '100px'

  // *States
  const [imageUrl, setImageUrl] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  // * State Store
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnChange = useCallback((event: any) =>
    setImageUrl(event.target.value), [imageUrl]
  )

  const handleOnChangeName = useCallback((event: any) =>
    setName(event.target.value), []
  )

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
    const date = new Date()
    const listPost = window.localStorage.getItem('posts')

    if (!listPost) {
      try {
        window.localStorage.setItem('posts', JSON.stringify([
          {
            src: image.source,
            name: name,
            filter: image.filter,
            date: date
          }
        ]));
      } catch (e) {
        console.error(e);
      }
    } else {
      const listPostParse = JSON.parse(listPost)
      listPostParse.push({
        src: image.source,
        name: name,
        filter: image.filter,
        date: date
      })
      window.localStorage.setItem('posts', JSON.stringify(listPostParse))
    }
    navigate('/')
    dispatch(changeSource(''))
    dispatch(changeFilter(''))
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

      <Button onClick={handleClick} >
        Post Now!
      </Button>
    </>
  )
}

export default PostImage
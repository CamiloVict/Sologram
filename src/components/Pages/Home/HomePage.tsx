import { useEffect, useState } from "react"
import { Card } from "../../Card/Card"
// * Store
import { useSelector, useDispatch } from 'react-redux'
import { changeList } from "../../../../src/store/reducerImage";
// * Icons
import { MdOutlineErrorOutline } from 'react-icons/md'

import moment from 'moment'
import { ContainerList } from "./style";

const HomePage = () => {
  // *State
  const [loading, setLoading] = useState<boolean>(true)
  const { image } = useSelector((state: any) => state);
  const dispatch = useDispatch()

  const postList = window.localStorage.getItem('posts')
  useEffect(() => {
    if (!!postList) {
      setLoading(false)
      dispatch(changeList(JSON.parse(postList)))
    }
  }, [])

  const calcTime = (date: string) => {
    const time = moment(date).fromNow()
    return time
  }

  const renderCards = () => {
    const orderList = [... image.list]
    return orderList.reverse().map((item: any, indexItem: number) => {
      const postTime: string | undefined = calcTime(item.date)
      return (
          <Card id={indexItem} title={item.name} source={item.src} date={postTime}  filter={item.filter} key={indexItem} />
      )
    })
  }

  return (
    <ContainerList>
      {loading
        // ! Create error component
        ? <div> <MdOutlineErrorOutline /> You don't have any post</div>
        : renderCards()
      }
    </ContainerList>
  )

}

export default HomePage
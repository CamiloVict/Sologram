import { useEffect, useState } from "react"
// * Component
import { ErrorComponent } from "../../components/Error/Error";
import { Card } from "../../components/Card/Card"
// * Store
import { useSelector, useDispatch } from 'react-redux'
import { changeList } from "../../store/reducerImage";

import moment from 'moment'
import { ContainerList } from "./style";

const HomePage = () => {
  const noPost: string = 'You have no post'
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
        ? <ErrorComponent title={noPost} />
        : renderCards()
      }
    </ContainerList>
  )

}

export default HomePage
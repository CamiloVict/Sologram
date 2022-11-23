import { Card } from "../../Card/Card"

const HomePage = () => {
  
  const  allStorage = () => {

    const values: any[] = []
    const  keys: string [] = Object.keys(localStorage)
    let i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    console.log('14 values >>> ', values);
    return values;
  }
  return (
    <>
    {/* {allStorage()} */}
    <Card />
    </>
  )

}

export default HomePage
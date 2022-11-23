import { Filters } from './style'
import { Filter } from '../Filter/Filter'
// *Enums
import { filtersEnum } from '../../utils/enums/filters'

export const AllFilters = () => {

  const singleFilter = ():JSX.Element[] => {
    return  filtersEnum.map((filter, indexFilter) => <Filter key={indexFilter} title={filter} />)
  }
  
  return (
    <Filters >
      {singleFilter()}
    </Filters>
  )
}


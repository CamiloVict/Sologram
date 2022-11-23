import {useState} from 'react'

export const useInputValue = (initialValue: any) => {
    const [value, setValue] = useState()
    const onChange = (event: any) => event.target.value

    return [value, onChange]
}
import { useMemo } from 'react'
import useMousePosition from './useMousePosition';

const useBackground = () => {

    const position = useMousePosition();

    const background = useMemo(() => 
        position.x < window.innerWidth/2 ? 'pink' :'orange'
    , [position]);

    return { background, position };
}

export default useBackground

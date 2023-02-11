import { Logo, Loader } from '@components'
import { LoadingWrapper } from './styled'


export const LoadingWindow = () => {
    return <LoadingWrapper >
        <Logo />
        <Loader />
    </LoadingWrapper>
}

export default LoadingWindow
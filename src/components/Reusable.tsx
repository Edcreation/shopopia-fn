import logo from '../../public/Shopopia.png'

export const Button = (props: { text: string }) => {
    const { text } = props
    return (
        <button>{text || 'Click Here'}</button>
    )
}

export const Input = (props: { type?: string }) => {
    const { type } = props
    return (
        <input type={type || 'text'} />
    )
}

export const Logo = () => {
    return (
        <img src={logo} alt="logo" />
    )
}
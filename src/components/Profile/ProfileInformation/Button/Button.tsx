type IButton= {
    state:string,
    content:string
}
const Button = (props:IButton)=>{
    return (
        <div>
            <button className="">
                {props.content}
            </button>
        </div>
    )
}

export default Button
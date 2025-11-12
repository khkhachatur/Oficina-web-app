type TitleProps ={
    title: string
}
const Title = ({title}: TitleProps) => {
  return (
    <div>
        <h2 className="text-5xl my-10 font-bold text-gray-400">{title}</h2>
    </div>
  )
}

export default Title
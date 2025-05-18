interface Props {
  children: React.ReactNode
}

export default function MainTitle(props: Props) {
  return (
    <h2 className="scroll-m-20 py-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  )
}

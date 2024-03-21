import './styles.css';

interface TitleProps {
  titulo: string
  subtitulo: string
}

export function Title(props: TitleProps) {
  return (
    <div className="title">
      <h1>{props.titulo}
        <span>{props.subtitulo}</span>
      </h1>
    </div>
    
    
  )
}
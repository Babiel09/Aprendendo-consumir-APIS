import estilos from './banner.module.scss';

export default function Banner2() {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>AlFood</h1>
      <p>Área de adiministação</p>
    </div>
  </section>)
}
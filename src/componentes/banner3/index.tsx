import estilos from './banner.module.scss';

export default function Banner3() {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>AlFood</h1>
      <br />
      <p className={estilos.Titulo}>Login Page</p>
    </div>
  </section>)
}
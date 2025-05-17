import MyGO from '@/assets/images/mygo/logo_mygo.png'

export default function AboutMe() {
  return (
    <div className="pt-12 pb-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex items-center">
        " 世界就是一个巨大的
        <img width={160} src={MyGO.src} alt="mygo" className="ml-4" />
      </h1>
      <br />
      <div className="flex">
        <section className="pr-8">
          <a target="_blank" href="https://github.com/luoqiucc">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight hover:text-primary">
              <i>GitHub</i>
            </h4>
          </a>
        </section>
        <section className="pr-8">
          <a
            target="_blank"
            href="https://space.bilibili.com/94905532?spm_id_from=333.1007.0.0"
          >
            <h4 className="scroll-m-20 text-xl text-[#ff6699] font-semibold tracking-tight hover:text-primary">
              <i>Bilibili</i>
            </h4>
          </a>
        </section>
        <section className="pr-8">
          <a target="_blank" href="https://steamcommunity.com/id/2992845224/">
            <h4 className="scroll-m-20 text-xl text-[#146B9D] font-semibold tracking-tight hover:text-primary">
              <i>Steam</i>
            </h4>
          </a>
        </section>
      </div>
    </div>
  )
}

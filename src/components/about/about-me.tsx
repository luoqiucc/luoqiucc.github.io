export default function AboutMe() {
  return (
    <div className="pt-12 pb-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        👋 Hi !
      </h1>
      <br />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        这里是<span className="text-primary">落秋cc</span>，期待可以有所帮助...
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
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight hover:text-primary">
              <i>Bilibili</i>
            </h4>
          </a>
        </section>
        <section className="pr-8">
          <a target="_blank" href="https://steamcommunity.com/id/2992845224/">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight hover:text-primary">
              <i>Steam</i>
            </h4>
          </a>
        </section>
      </div>
    </div>
  )
}

import type { Project } from "@/components/wrapper/card/types"

const projects: Project[] = [
  {
    title: "DPDK-BASIC",
    abstract: "一个dpdk应用底座，包含初始化设备，读取配置等通用操作。",
    language: "C/C++",
    coverUrl: "https://pic1.imgdb.cn/i/1BWZPipaqayth5z4niiNfS.png",
    githubUrl: "https://github.com/luoqiucc/dpdk-basic",
  },
  {
    title: "SUYO",
    abstract: "让SUYO来帮助整理你的小说或是文档。使用Next.js构建。",
    language: "JavaScript",
    coverUrl: "https://pic1.imgdb.cn/i/1BWZPipaqayth5z4niiNfS.png",
    githubUrl: "https://github.com/luoqiucc/suyo",
  },
  {
    title: "群刊",
    abstract: "记录群友的那些金句与欢乐时光",
    language: "JavaScript",
    coverUrl: "https://pic1.imgdb.cn/i/1BWZPipaqayth5z4niiNfS.png",
    githubUrl: "https://github.com/luoqiucc/chat-magazine",
  },
]

export { projects }

import Bilibili from "@/assets/social/bilibili.svg"
import Github from "@/assets/social/github.svg"
import Steam from "@/assets/social/steam.svg"
import Facebook from "@/assets/social/facebook.svg"

function SocialBanner() {
  return (
    <div className="flex h-16 items-center justify-center bg-blue-600">
      <a target="_blank" href="https://github.com/luoqiucc">
        <img className="mx-2 h-8 w-8" src={Github.src} alt="Github" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100084243072146"
      >
        <img className="mx-2 h-8 w-8" src={Facebook.src} alt="Facebook" />
      </a>
      <a
        target="_blank"
        href="https://space.bilibili.com/94905532?spm_id_from=333.1007.0.0"
      >
        <img className="mx-2 h-8 w-8" src={Bilibili.src} alt="Bilibili" />
      </a>
      <a target="_blank" href="https://steamcommunity.com/id/2992845224/">
        <img className="mx-2 h-8 w-8" src={Steam.src} alt="Steam" />
      </a>
    </div>
  )
}

export { SocialBanner }

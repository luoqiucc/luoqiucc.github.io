import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateCN(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  return `${year}年${month}月${day}日`
}

export function formatDateEN(date: Date) {
  const englishMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const year = date.getFullYear()
  const month = englishMonths[date.getMonth()]
  const day = String(date.getDate()).padStart(2, "0")
  return `${month} ${day}, ${year}`
}

export function formatCategory(category: string) {
  switch (category) {
    case "essay":
      return "随笔"
    case "paper":
      return "论文研读"
    case "computer-networks":
      return "计算机网络"
    default:
      return "未知"
  }
}

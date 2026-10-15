// Central GSAP setup: register plugins once and share motion preferences.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const fine = !reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches
export { gsap, ScrollTrigger }

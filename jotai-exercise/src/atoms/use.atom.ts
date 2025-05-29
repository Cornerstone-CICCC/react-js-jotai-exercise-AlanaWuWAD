import { atom } from "jotai";

const firstnameAtom = atom<string>("guest")
const lastnameAtom = atom<string>("guest")
const ageAtom = atom<number>(0)
const hobbiesAtom = atom<string[]>([
    "Listen to music",
    "Watch movies",
    "Stay in home",
    "Go hiking"
])
   
export {
    firstnameAtom,
    lastnameAtom,
    ageAtom,
    hobbiesAtom
}
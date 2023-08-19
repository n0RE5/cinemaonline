import {create} from 'zustand'

interface SidebarState {
    active: boolean
    switchState: (arg: boolean) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
    active: false,
    switchState: (active: boolean) => set(state => ({
        active: active
    }))
}))
import { create } from 'zustand'

const useAuthStore = create((set, get) => ({
    modalOpen: false
}))
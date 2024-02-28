import { create } from 'zustand'

type State = {
	modalOpen: boolean
}

type Actions = {
	setModalOpen: (state: State['modalOpen']) => void
}

const useAuthStore = create<State & Actions>((set, get) => ({
	modalOpen: true,
	setModalOpen: (state) => set(() => ({ modalOpen: state })),
}))

export default useAuthStore

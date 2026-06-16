import { useSyncExternalStore } from 'react'
import { readPageFromHash } from './pages'

function subscribeToHash(onStoreChange: () => void) {
    window.addEventListener('hashchange', onStoreChange)
    return () => window.removeEventListener('hashchange', onStoreChange)
}

export function useHashPage() {
    return useSyncExternalStore(subscribeToHash, readPageFromHash, () => 'home' as const)
}

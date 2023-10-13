import { defineStore } from 'pinia'
import { useStoreAuth } from '@/stores/storeAuth'
import {
  doc,
  query,
  addDoc,
  orderBy,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
  QueryDocumentSnapshot
} from 'firebase/firestore'
import { db } from '@/ts/firebase'

interface Note {
  title: string
  content: string
}

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [] as Note[],
      notesLoaded: false,
      getNotesSnapshot: null
    }
  },
  actions: {
    async init() {
      const storeAuth = useStoreAuth()
      if (storeAuth.user.id) {
        const notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
        const notesCollectionQuery = query(notesCollectionRef, orderBy('createdDate', 'desc'))
        this.getNotes(notesCollectionQuery)
      }
    },
    async getNotes(notesCollectionQuery: any) {
      this.notesLoaded = false

      // if (this.getNotesSnapshot) this.getNotesSnapshot()
      this.getNotesSnapshot = onSnapshot(
        notesCollectionQuery,
        (querySnapshot: any) => {
          const notes: Note[] = []
          querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
            const note: Note = {
              content: doc.data().content,
              title: doc.data().title
            }
            notes.push(note)
          })
          this.notes = notes
          this.notesLoaded = true
        },
        (error: any) => {
          console.log('error.message: ', error.message)
        }
      ) as any
    },
    clearNotes() {
      this.notes = []
    },
    async addNote(newNoteContent: string) {
      const storeAuth = useStoreAuth()
      if (storeAuth.user.id) {
        const currentDate = new Date().getTime()
        const createdDate = currentDate.toString()
        const notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
        await addDoc(notesCollectionRef, {
          content: newNoteContent,
          createdDate
        })
      }
    },
    async deleteNote(idToDelete: string) {
      const storeAuth = useStoreAuth()
      if (storeAuth.user.id) {
        const notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
        await deleteDoc(doc(notesCollectionRef, idToDelete))
      }
    },
    async updateNote(id: string, content: string) {
      const storeAuth = useStoreAuth()
      if (storeAuth.user.id) {
        const notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
        await updateDoc(doc(notesCollectionRef, id), {
          content
        })
      }
    }
  },
  getters: {}
})

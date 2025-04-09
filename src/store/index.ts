// A pinia store meant to hold contacts, interactions,
// and functions that allow adding and getting them
// as well as saving and retrieval to/from localStorage

import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { Ref } from 'vue'
import type { Contact, Interaction } from '@/types.d.ts'

// function loadContactIDs() {
//   const contacts = localStorage.getItem('contact-reminder-contacts')
//   return contacts ? JSON.parse(contacts) : contacts
// }

export const useStore = defineStore('store', () => {
  const router = useRouter()
  const contactIDs: string[] = reactive([])
  const interactionIDs: string[] = reactive([])

  const contacts: Map<string, Contact> = new Map()
  const interactions: Map<string, Interaction> = new Map()

  // make these two highestID values something that is kept in the localStorage so it persists and increments
  const highestContactID: Ref<number> = ref(0)
  const highestInteractionID: Ref<number> = ref(0)

  const debugMessages: Ref<string> = ref('')

  function addContact() {
    //add a new contact to the contacts Map
    const newContactID = crypto.randomUUID()
    contactIDs.push(newContactID)
    debugMessages.value = `Added new contact with ID of: ${newContactID}, and contactIDs is now ${JSON.stringify(contactIDs)}`
    // console.log(debugMessages.value)

    //prepare a router move to an edit view to fill in its details and save it
    showContact(newContactID)
  }

  function showContact(contactID: string) {
    console.log(`Opening view of Contact information for contactID: ${contactID}`)
    router.push({ name: 'contactview', params: { contactID } })
  }

  function addInteraction() {
    highestInteractionID.value += 1

    //add a new interaction to the interactions Map

    //prepare a router move to an edit view to fill in its details and save it
  }

  function importData() {
    // read a JSON file and save the contents to localstorage
    // fill the pinia store with it
    console.log('importData clicked')
    debugMessages.value = 'importData clicked'
  }

  function exportData() {
    // save the contents that are saved in localstorage to a json file,
    // but not necessarily including the store contents that weren't saved to disk
    console.log('exportData clicked')
    debugMessages.value = 'exportData clicked'
  }

  function clearData() {
    // wipe all the contents from localStorage that were saved by this app,
    // clear the pinia store contents
    console.log('clearData clicked')
    debugMessages.value = 'clearData clicked'
  }

  return {
    contactIDs,
    interactionIDs,
    contacts,
    interactions,
    highestContactID,
    highestInteractionID,
    addContact,
    addInteraction,
    importData,
    exportData,
    clearData,
    debugMessages,
  }
})

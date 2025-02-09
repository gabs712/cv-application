import { mdiBriefcase, mdiCardAccountDetails, mdiSchool } from '@mdi/js'

export default function getTitleIcon(title) {
  switch (title) {
    case 'generalInfo': {
      console.log(mdiCardAccountDetails)
      return mdiCardAccountDetails
    }
    case 'education': {
      return mdiSchool
    }
    case 'experience': {
      return mdiBriefcase
    }
  }
}

export default function getInputType(label) {
  switch (label) {
    case 'email': {
      return 'email'
    }
    case 'phone': {
      return 'tel'
    }
    default: {
      return 'text'
    }
  }
}

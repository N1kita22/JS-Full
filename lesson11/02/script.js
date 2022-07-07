// Sorting string

function sortContacts(contacts, isAsc = true) {
  if (!Array.isArray(contacts)) return null;
  const result = contacts.sort((a, b) => {
    if (isAsc === true) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return result;
}

// test data

const contacts = [
  { name: 'Tom', phoneNumber: '777-222-333' },
  { name: 'Am', phoneNumber: '777-212-333' },
  { name: 'Ben', phoneNumber: '777-252-333' },
  { name: 'Lary', phoneNumber: '777-223-333' },
  { name: 'John', phoneNumber: '777-254-333' },
];

console.log(sortContacts(contacts, true));

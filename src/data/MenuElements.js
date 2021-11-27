import { v4 as uuidv4 } from 'uuid';

export const menuElements = [
  {
    id: uuidv4(),
    value: 'Dashboard',
    to: '/',
    isCurrent: false,
  },
  {
    id: uuidv4(),
    value: 'Add User',
    to: '/add-user',
    isCurrent: false,
  },
  {
    id: uuidv4(),
    value: 'Settings',
    to: '/settings',
    isCurrent: false,
  },
  {
    id: uuidv4(),
    value: 'Logout',
    to: '/logout',
    isCurrent: false,
  },
];
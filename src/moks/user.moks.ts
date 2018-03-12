import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: 'Paul',
    company: 'PWH',
    location: 'Durham, UK',
    bio: 'Go Angular!',
    avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    email: 'paul@paul.com'
  },
  {
    name: 'John',
    company: 'Doe',
    location: 'London, UK',
    bio: 'Go React',
    avatar_url: 'http://i.imgur.com/TzWcihb.png',
    email: 'john@doe.com'
  }
]

export const USER_LIST = userList;
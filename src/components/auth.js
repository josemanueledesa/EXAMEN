const users = [
  { email: 'manu', password: '123', name: 'Jose Manuel Edesa' },
 
]

export function signIn({ email, password }) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}
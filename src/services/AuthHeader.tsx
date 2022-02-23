export default function authHeader(): any {
  const user: any = JSON.parse(localStorage.getItem('email')!);
  if (user && user.jwt) {
    return { Authorization: 'Bearer ' + user.jwt };
  } else {
    return {};
  }
}

